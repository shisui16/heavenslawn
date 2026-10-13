/* parser.js — turns raw bill/receipt text into a draft transaction. Pure functions. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else (root.Fin = root.Fin || {}).Parser = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const pad = (n) => String(n).padStart(2, '0');
  const MONTHS = {
    jan: 1, january: 1, janv: 1, janvier: 1, feb: 2, february: 2, fev: 2, fevr: 2, fevrier: 2,
    mar: 3, march: 3, mars: 3, apr: 4, april: 4, avr: 4, avril: 4, may: 5, mai: 5,
    jun: 6, june: 6, juin: 6, jul: 7, july: 7, juil: 7, juillet: 7, aug: 8, august: 8, aout: 8,
    sep: 9, sept: 9, september: 9, septembre: 9, oct: 10, october: 10, octobre: 10,
    nov: 11, november: 11, novembre: 11, dec: 12, december: 12, decembre: 12,
  };
  const deaccent = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  function mkDate(y, m, d) {
    if (y < 100) y += 2000;
    if (y < 2000 || y > 2100 || m < 1 || m > 12 || d < 1 || d > 31) return null;
    const dt = new Date(Date.UTC(y, m - 1, d));
    if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== m - 1 || dt.getUTCDate() !== d) return null;
    return `${y}-${pad(m)}-${pad(d)}`;
  }
  function numericDate(a, b, y, order) {
    // a/b are the first/second numbers; decide which is the day.
    if (a > 12 && b <= 12) return mkDate(y, b, a);
    if (b > 12 && a <= 12) return mkDate(y, a, b);
    return order === 'mdy' ? mkDate(y, a, b) : mkDate(y, b, a);
  }

  /** Find every date in the text: [{iso, index}] */
  function findDates(text, order = 'dmy') {
    const out = [];
    const push = (iso, index, len) => { if (iso) out.push({ iso, index, len }); };
    let m;
    const iso = /(?<!\d)(\d{4})[-\/.](\d{1,2})[-\/.](\d{1,2})(?!\d)/g;
    while ((m = iso.exec(text))) push(mkDate(+m[1], +m[2], +m[3]), m.index, m[0].length);
    const num = /(?<![\d.])(\d{1,2})[-\/.](\d{1,2})[-\/.](\d{4}|\d{2})(?![\d])/g;
    while ((m = num.exec(text))) push(numericDate(+m[1], +m[2], +m[3], order), m.index, m[0].length);
    const dmy = /(?<!\d)(\d{1,2})(?:st|nd|rd|th|er)?[\s\-\/]+([A-Za-zÀ-ÿ]{3,9})\.?,?[\s\-\/]+(\d{4}|\d{2})(?!\d)/g;
    while ((m = dmy.exec(text))) {
      const mo = MONTHS[deaccent(m[2]).toLowerCase()];
      if (mo) push(mkDate(+m[3], mo, +m[1]), m.index, m[0].length);
    }
    const mdy = /\b([A-Za-zÀ-ÿ]{3,9})\.?\s+(\d{1,2})(?:st|nd|rd|th)?,?\s+(\d{4})(?!\d)/g;
    while ((m = mdy.exec(text))) {
      const mo = MONTHS[deaccent(m[1]).toLowerCase()];
      if (mo) push(mkDate(+m[3], mo, +m[2]), m.index, m[0].length);
    }
    // de-duplicate overlapping matches (keep earliest/longest)
    out.sort((a, b) => a.index - b.index || b.len - a.len);
    const res = [];
    for (const d of out) if (!res.some((r) => d.index < r.index + r.len && r.index < d.index + d.len)) res.push(d);
    return res;
  }

  function parseDateLoose(s, order = 'dmy') {
    s = String(s || '').trim();
    if (!s) return '';
    const d = findDates(s, order);
    return d.length ? d[0].iso : '';
  }

  const DUE_RE = /\bdue\b|pay(?:ment)?\s+by|pay\s+before|[ée]ch[ée]ance|date\s+limite|r[ée]gler\s+avant|payable\s+(?:by|avant)|last\s+date/i;
  const DOC_RE = /date|invoice|facture|bill|issued|[ée]mis|statement|[ée]mission/i;

  function pickDates(text, order) {
    const lines = text.split(/\n/);
    const starts = []; let pos = 0;
    for (const l of lines) { starts.push(pos); pos += l.length + 1; }
    const lineOf = (i) => { let k = 0; while (k + 1 < starts.length && starts[k + 1] <= i) k++; return k; };
    const dates = findDates(text, order).filter((d) => {
      const y = +d.iso.slice(0, 4), now = new Date().getFullYear();
      return y >= now - 15 && y <= now + 3;
    });
    let doc = null, due = null, docStrong = null;
    for (const d of dates) {
      const k = lineOf(d.index);
      const before = lines[k].slice(0, d.index - starts[k]);
      const lineIsJustDate = lines[k].replace(/[\s:.\-–]/g, '').length <= d.len + 2;
      const ctx = lineIsJustDate && k > 0 ? lines[k - 1] + ' ' + before : before;
      if (DUE_RE.test(ctx) || DUE_RE.test(lines[k])) { if (!due) due = d.iso; }
      else if (DOC_RE.test(ctx)) { if (!docStrong) docStrong = d.iso; }
      else if (!doc) doc = d.iso;
    }
    return { date: docStrong || doc || '', dueDate: due || '' };
  }

  // ---------- amounts ----------
  function parseAmount(tok) {
    let s = String(tok == null ? '' : tok).replace(/[^\d.,\s\u00a0-]/g, '').replace(/[\s\u00a0]/g, '');
    const neg = s.startsWith('-'); s = s.replace(/-/g, '');
    if (!/\d/.test(s)) return 0;
    const lc = s.lastIndexOf(','), ld = s.lastIndexOf('.');
    if (lc > -1 && ld > -1) {
      const dec = lc > ld ? ',' : '.', th = dec === ',' ? '.' : ',';
      s = s.split(th).join('').replace(dec, '.');
    } else if (lc > -1) {
      const parts = s.split(',');
      const tail = parts[parts.length - 1];
      s = parts.length > 2 || (tail.length === 3 && parts[0].length <= 3 && parts[0] !== '0')
        ? parts.join('') : parts.join('.');
    } else if (ld > -1) {
      const parts = s.split('.');
      if (parts.length > 2) s = parts.join('');
    }
    const n = Math.round(parseFloat(s) * 100) / 100;
    return Number.isFinite(n) && n > 0 && !neg ? n : 0;
  }

  const NUM_RE = /\d{1,3}(?:[ \u00a0]\d{3})+(?:[.,]\d{1,2})?(?![\d])|\d+(?:[.,]\d+)*/g;
  function numbersIn(line) {
    const res = []; let m;
    NUM_RE.lastIndex = 0;
    while ((m = NUM_RE.exec(line))) {
      const v = parseAmount(m[0]);
      if (v) res.push({ v, index: m.index, raw: m[0] });
    }
    return res;
  }

  const TIER1 = /(?:amount|total|balance|net)\s*(?:due|payable|to\s*pay)|montant\s*(?:[àa])\s*payer|net\s*(?:[àa])\s*payer|grand\s*total|total\s*(?:ttc|payable|due|amount)|total\s*amount|invoice\s*total|bill\s*amount|please\s*pay|to\s*be\s*paid|amount\s*payable|total\s*[àa]\s*payer|[àa]\s*r[ée]gler/i;
  const TIER2 = /\btotal\b|\bamount\b|\bmontant\b|\bbalance\b|\bpayable\b/i;
  const EXCLUDE = /sub\s*-?\s*total|\btva\b|\bvat\b|\bgst\b|cgst|sgst|igst|\btax\b|discount|remise|saving|[ée]conom|reward|points|\bchange\b|rendu|tendered|\bcash\b|esp[èe]ces|\bitems?\b|articles?\b|\bqty\b|quantity|\bpaid\b/i;
  const TAX_OK = /ttc|incl|inc\./i;

  function findAmount(text) {
    const lines = text.split(/\n/);
    const cands = [];
    lines.forEach((line, i) => {
      let tier = 0;
      if (TIER1.test(line)) tier = 1;
      else if (TIER2.test(line)) tier = 2;
      if (!tier) return;
      if (tier === 2 && EXCLUDE.test(line) && !TAX_OK.test(line)) return;
      if (tier === 1 && /sub\s*-?\s*total/i.test(line)) return;
      const kw = (line.match(tier === 1 ? TIER1 : TIER2) || {}).index || 0;
      let nums = numbersIn(line).filter((n) => n.index >= kw);
      if (!nums.length && lines[i + 1] !== undefined) nums = numbersIn(lines[i + 1]).slice(0, 1);
      if (nums.length) cands.push({ tier, v: nums[nums.length - 1].v, raw: nums[nums.length - 1].raw, line: i });
    });
    if (cands.length) {
      const best = Math.min(...cands.map((c) => c.tier));
      const pool = cands.filter((c) => c.tier === best);
      return pool.reduce((a, b) => (b.v >= a.v ? b : a));
    }
    // fallback: largest number that looks like money (has decimals), ignoring date-like lines
    let top = null;
    lines.forEach((line, i) => {
      if (findDates(line).length) return;
      for (const n of numbersIn(line)) if (/[.,]\d{1,2}$/.test(n.raw) && (!top || n.v > top.v)) top = { v: n.v, raw: n.raw, line: i, tier: 3 };
    });
    return top;
  }

  // ---------- vendor ----------
  const normV = (s) => deaccent(String(s || '')).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const JUNK = /^(tax\s+)?(invoice|receipt|bill|facture|ticket|duplicate|copy|welcome|thank|statement|re[cç]u)\b|^(tel|phone|t[ée]l|fax|www|http|gst|gstin|siret|siren|tva|vat|date|page|cin|pan|order|no\b|n°)|@|^\W*$/i;
  function titleCase(s) {
    return s === s.toUpperCase() ? s.toLowerCase().replace(/(^|[\s\-'&])(\p{L})/gu, (_, a, b) => a + b.toUpperCase()) : s;
  }
  function findVendor(text, history = []) {
    const hay = ' ' + normV(text) + ' ';
    const seen = new Map();
    for (const t of history) {
      const v = (t.vendor || '').trim(), n = normV(v);
      if (n.length >= 3 && !seen.has(n)) seen.set(n, v);
    }
    let hit = null;
    for (const [n, v] of seen) if (hay.includes(' ' + n + ' ') && (!hit || n.length > hit.n.length)) hit = { n, v };
    if (hit) return { vendor: hit.v, learned: true };
    for (const raw of text.split(/\n/).slice(0, 12)) {
      const line = raw.trim().replace(/^[\W_]+|[\W_]+$/g, '');
      const letters = (line.match(/\p{L}/gu) || []).length;
      if (letters < 3 || line.length > 50 || JUNK.test(line)) continue;
      if (letters / line.replace(/\s/g, '').length < 0.6) continue;
      if (findDates(line).length) continue;
      return { vendor: titleCase(line), learned: false };
    }
    return { vendor: '', learned: false };
  }

  // ---------- category ----------
  const RULES = [
    [/\b(jio|airtel|vodafone|vi|bsnl|recharge|prepaid|orange|sfr|bouygues|free mobile|mobile bill)\b/i, /mobile|recharge|phone/i],
    [/spotify/i, /spotify/i],
    [/icloud|apple services|apple\.com\/bill/i, /icloud/i],
    [/amazon prime|prime video/i, /prime/i],
    [/openai|chatgpt|anthropic|claude|midjourney|copilot|perplexity|cursor/i, /^ai$/i],
    [/indigo|air india|vistara|akasa|ryanair|easyjet|lufthansa|air france|emirates|boarding pass|airline|\bflights?\b/i, /flight/i],
    [/\buber\b|\bola\b|irctc|railway|sncf|\bter\b|flixbus|blablacar|redbus|\bbus\b|\btrain\b|\bmetro\b|\btravel\b/i, /travel/i],
    [/laundry|dhobi|pressing|laverie/i, /laundry/i],
    [/\bhostel\b|warden/i, /hostel/i],
    [/\bmess\b|canteen|cantine/i, /\bmess\b/i],
    [/stationer|stationary|papeterie|notebook|\bprint(?:ing|out)?\b|xerox|photocopy/i, /station/i],
    [/zara|h&m|uniqlo|myntra|clothing|apparel|textile|v[êe]tement|decathlon|fashion/i, /cloth/i],
    [/croma|reliance digital|boulanger|fnac|darty|electronics|charger|laptop|headphone|earbuds/i, /electronic/i],
    [/supermarket|supermarch|carrefour|lidl|aldi|auchan|grocery|groceries|bigbasket|dmart|d-mart|reliance fresh|monoprix|leclerc|intermarch/i, /grocer|^food$/i],
    [/caf[ée]|coffee|restaurant|bistro|bakery|boulangerie|pizza|burger|kfc|mcdonald|domino|swiggy|zomato|subway|dining|\bsnacks?\b|\btea\b|\bchai\b/i, /^food$|dining|snack|caf/i],
  ];
  const findCat = (names, re) => names.find((n) => re.test(n)) || '';

  function suggestCategory(text, vendor, categories, history = []) {
    const names = categories.expense || [];
    const nv = normV(vendor);
    if (nv) {
      const counts = new Map();
      for (const t of history) if (t.type === 'expense' && normV(t.vendor) === nv && names.includes(t.category)) counts.set(t.category, (counts.get(t.category) || 0) + 1);
      if (counts.size) return { category: [...counts].sort((a, b) => b[1] - a[1])[0][0], why: 'learned' };
    }
    const hay = `${vendor}\n${text}`;
    for (const [kw, hint] of RULES) {
      if (kw.test(hay)) { const c = findCat(names, hint); if (c) return { category: c, why: 'keyword' }; }
    }
    return { category: findCat(names, /^misc/i) || '', why: 'default' };
  }


  // ---------- line items, tax, splitting ----------
  const ITEM_STOP = /sub\s*-?\s*total|sous\s*-?\s*total|\btotal\b|net\s*[àa]\s*payer|amount\s*(?:due|payable)|montant/i;
  const NOT_ITEM = /\btva\b|\bvat\b|\bgst\b|cgst|sgst|igst|\btax\b|\btaxe\b|\bcess\b|\bchange\b|rendu|tendered|\bcash\b|esp[èe]ces|\bcb\b|\bcarte\b|\bcard\b|visa|master|\bpaid\b|points|\bsavings?\b|[ée]conom|balance|\bqty\b|quantit|\bitems?\b|articles?\b|invoice|receipt|facture|ticket|\bdate\b|\btel\b|phone|gstin|siret|thank|merci|rounding|arrondi|\bhsn\b|\bsac\b/i;
  const DISCOUNT = /remise|discount|coupon|promo|r[ée]duction|\boffre\b|\boffer\b/i;
  const TAX_LINE = /\b(?:tva|vat|gst|cgst|sgst|igst|tax|taxe|cess)\b/i;
  const TAX_SKIP = /incl|inc\.|ttc|including|\bht\b|invoice|gstin|\bid\b|\bno\b|number|n°|registration|siret/i;

  const ITEM_RULES = [
    [/\b(chips|crisps|chocolat\w*|chocolate|biscuit\w*|cookies?|candy|bonbons?|namkeen|haribo|snacks?|soda|cola|juice|jus|kitkat|oreo|wafer)\b/i, /snack/i],
    [/\b(detergent|lessive|softener|adoucissant|soap|savon|surf|ariel|tide|dishwash|vaisselle|bleach|javel|shampoo?ing?|shampoo)\b/i, /laundry|clean|house/i],
    [/\b(pens?|stylos?|notebooks?|cahiers?|paper|papier|markers?|pencil|crayon|stapler|ruler)\b/i, /station/i],
    [/\b(batter(?:y|ies)|piles?|cable|c[âa]ble|charger|chargeur|usb|earphones?|earbuds?|mouse|souris)\b/i, /electronic/i],
    [/\b(shirt|t-?shirt|socks?|chaussettes?|jeans|pantalon|trousers|jacket|veste|innerwear)\b/i, /cloth/i],
    [/\b(milk|lait|bread|pain|eggs?|oeufs?|œufs?|cheese|fromage|butter|beurre|rice|riz|atta|dal|oil|huile|sugar|sucre|flour|farine|tomato(?:es)?|tomates?|onions?|oignons?|potato(?:es)?|pommes?|bananas?|bananes?|apples?|fruits?|l[ée]gumes?|vegetables?|chicken|poulet|meat|viande|fish|poisson|yogh?urt|yaourt|curd|water|eau|pasta|p[âa]tes|salt|sel|tea|th[ée]|coffee|caf[ée]|jambon|ham|salade|carrots?|carottes?|paneer|ghee|masala|maggi|noodles?)\b/i, /^food$|grocer/i],
  ];

  const stripQty = (n) => n.replace(/\s*\d+(?:[.,]\d+)?\s*[x×*@]\s*\d[\d.,]*\s*$/i, '').replace(/^\s*\d{4,}\s+/, '').replace(/^\s*\d+\s*[x×]\s+/i, '')
    .replace(/[\s:.\-–*#]+$/g, '').replace(/^[\s:.\-–*#]+/g, '').replace(/\s{2,}/g, ' ').trim();

  function itemCategory(name, categories, history, fallback) {
    const names = categories.expense || [], nn = normV(name);
    if (nn) {
      const counts = new Map();
      for (const t of history) if (t.type === 'expense' && t.item && normV(t.item) === nn && names.includes(t.category)) counts.set(t.category, (counts.get(t.category) || 0) + 1);
      if (counts.size) return [...counts].sort((a, b) => b[1] - a[1])[0][0];
    }
    for (const [kw, hint] of ITEM_RULES) if (kw.test(name)) { const c = findCat(names, hint); if (c) return c; }
    return fallback && names.includes(fallback) ? fallback : (findCat(names, /^misc/i) || fallback || '');
  }

  function parseItems(text, { categories = { expense: [] }, history = [], fallbackCategory = '' } = {}) {
    const lines = String(text || '').replace(/\r/g, '').split('\n');
    const collect = (allowInt) => {
      const out = [];
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        if (out.length && ITEM_STOP.test(line)) break;
        if (ITEM_STOP.test(line) || (NOT_ITEM.test(line) && !DISCOUNT.test(line)) || findDates(line).length) continue;
        const nums = numbersIn(line); if (!nums.length) continue;
        const last = nums[nums.length - 1];
        if (last.index + last.raw.length < line.length - 4) continue;       // amount must sit at the end of the line
        const hasDec = /[.,]\d{1,2}$/.test(last.raw);
        if (!hasDec && !(allowInt && nums.length === 1 && i > 2 && last.v <= 20000)) continue;
        const name = stripQty(line.slice(0, last.index));
        if ((name.match(/\p{L}/gu) || []).length < 2) continue;
        const neg = DISCOUNT.test(line) || /-\s*$/.test(line) || /-\s*$/.test(line.slice(0, last.index));
        out.push({ name: titleCase(name), amount: (neg ? -1 : 1) * last.v });
      }
      return out;
    };
    let items = collect(false);
    if (items.length < 2) { const alt = collect(true); if (alt.length > items.length) items = alt; }
    for (const it of items) it.category = itemCategory(it.name, categories, history, fallbackCategory);

    // tax: prefer an explicit "total tax" line, otherwise add the separate rate rows (CGST+SGST, TVA 5.5% + 20% …)
    let totalTax = 0, parts = 0; const seen = new Set();
    for (const raw of lines) {
      if (!TAX_LINE.test(raw) || TAX_SKIP.test(raw)) continue;
      const clean = raw.replace(/\d+(?:[.,]\d+)?\s*%/g, ' ');
      const nums = numbersIn(clean); if (!nums.length) continue;
      const v = nums[nums.length - 1].v;
      if (/total|totale/i.test(raw)) { totalTax = v; parts = -1; break; }
      const key = raw.trim().toLowerCase(); if (seen.has(key)) continue; seen.add(key);
      parts += v;
    }
    const tax = parts === -1 ? totalTax : Math.round(parts * 100) / 100;
    return { items, tax };
  }

  /** Spread `target` cents over `cents` in proportion, exactly (largest-remainder). */
  function allocate(cents, target) {
    const sum = cents.reduce((a, b) => a + b, 0);
    if (!sum) return cents.slice();
    const raw = cents.map((c) => (c * target) / sum), fl = raw.map(Math.floor);
    let rem = target - fl.reduce((a, b) => a + b, 0);
    raw.map((r, i) => [r - fl[i], i]).sort((a, b) => b[0] - a[0]).forEach(([, i]) => { if (rem > 0) { fl[i]++; rem--; } });
    return fl;
  }
  /** mode 'added': tax is on top of item prices. mode 'included': prices contain the tax, so carve it out. */
  function buildSplit({ items, tax = 0, mode = 'added' }) {
    const ic = items.map((i) => Math.round(i.amount * 100)), tc = Math.round(tax * 100);
    const sumI = ic.reduce((a, b) => a + b, 0);
    const net = mode === 'included' && tc > 0 && sumI > tc ? allocate(ic, sumI - tc) : ic;
    const rows = items.map((i, k) => ({ name: i.name, category: i.category, amount: net[k] / 100, kind: 'item' }));
    if (tc > 0) rows.push({ name: 'Tax', category: 'Tax', amount: tc / 100, kind: 'tax' });
    return { rows, cents: rows.reduce((a, r) => a + Math.round(r.amount * 100), 0) };
  }
  function detectMode(items, tax, total) {
    const sumI = items.reduce((a, i) => a + Math.round(i.amount * 100), 0), t = Math.round(tax * 100), T = Math.round(total * 100);
    if (t > 0 && Math.abs(sumI - T) <= 1 && Math.abs(sumI + t - T) > 1) return 'included';
    return 'added';
  }

  function parseReceipt(text, { categories = { expense: [], income: [] }, history = [], dateOrder = 'dmy' } = {}) {
    text = String(text || '').replace(/\r/g, '');
    const { date, dueDate } = pickDates(text, dateOrder);
    const amt = findAmount(text);
    const { vendor, learned } = findVendor(text, history);
    const cat = suggestCategory(text, vendor, categories, history);
    const warnings = [];
    if (!amt) warnings.push('No amount found — enter it manually.');
    else {
      const decimals = (text.match(/\d[.,]\d{2}(?!\d)/g) || []).length;
      if (!/[.,]\d{1,2}$/.test(amt.raw) && amt.v >= 100 && decimals >= 2) warnings.push('The amount has no decimal point but other prices do — the scan may have dropped one. Check it.');
    }
    if (!date) warnings.push('No date found — using today.');
    if (!vendor) warnings.push('Could not read a vendor name.');
    const { items, tax } = parseItems(text, { categories, history, fallbackCategory: cat.category });
    const total = amt ? amt.v : 0;
    return { date, dueDate, amount: total, vendor, category: cat.category, categoryWhy: cat.why, vendorLearned: learned, warnings,
      items, tax, splitMode: detectMode(items, tax, total) };
  }

  return { parseItems, buildSplit, detectMode, parseReceipt, parseAmount, parseDateLoose, findDates, findAmount, findVendor, suggestCategory, mkDate };
});

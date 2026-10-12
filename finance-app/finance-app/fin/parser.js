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
    return { date, dueDate, amount: amt ? amt.v : 0, vendor, category: cat.category, categoryWhy: cat.why, vendorLearned: learned, warnings };
  }

  return { parseReceipt, parseAmount, parseDateLoose, findDates, findAmount, findVendor, suggestCategory, mkDate };
});

/* calc.js — pure helpers: filtering, summaries, CSV. No DOM, no network. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else (root.Fin = root.Fin || {}).Calc = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const cents = (n) => Math.round(Number(n) * 100);
  const money = (c) => Math.round(c) / 100;
  const pad = (n) => String(n).padStart(2, '0');
  const isoOf = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const todayISO = () => isoOf(new Date());
  const monthKey = (iso) => iso.slice(0, 7);

  /** Transactions that count toward spending/income (unpaid bills do not). */
  const isSettled = (t) => t.status !== 'unpaid';

  function applyFilter(txs, f = {}) {
    const q = (f.q || '').trim().toLowerCase();
    return txs.filter((t) => {
      if (f.from && t.date < f.from) return false;
      if (f.to && t.date > f.to) return false;
      if (f.type && t.type !== f.type) return false;
      if (f.category && t.category !== f.category) return false;
      if (f.status === 'unpaid' && t.status !== 'unpaid') return false;
      if (f.status === 'paid' && t.status === 'unpaid') return false;
      if (q && !`${t.vendor} ${t.item || ''} ${t.notes || ''} ${t.category}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }

  function summarize(txs) {
    let inc = 0, exp = 0, out = 0;
    const cat = new Map(), icat = new Map(), months = new Map(), vendors = new Map();
    for (const t of txs) {
      const c = cents(t.amount);
      if (t.status === 'unpaid') { if (t.type === 'expense') out += c; continue; }
      const m = months.get(monthKey(t.date)) || { month: monthKey(t.date), income: 0, expense: 0 };
      months.set(m.month, m);
      if (t.type === 'income') {
        inc += c; m.income += c;
        const e = icat.get(t.category) || { category: t.category, total: 0, count: 0 };
        e.total += c; e.count++; icat.set(t.category, e);
      } else {
        exp += c; m.expense += c;
        const e = cat.get(t.category) || { category: t.category, total: 0, count: 0 };
        e.total += c; e.count++; cat.set(t.category, e);
        const key = (t.vendor || '').trim().toLowerCase();
        const v = vendors.get(key) || { vendor: t.vendor, total: 0, count: 0 };
        v.total += c; v.count++; vendors.set(key, v);
      }
    }
    const list = (m) => [...m.values()].sort((a, b) => b.total - a.total).map((e) => ({ ...e, total: money(e.total) }));
    return {
      income: money(inc), expense: money(exp), net: money(inc - exp), outstanding: money(out),
      byCategory: list(cat), incomeByCategory: list(icat), topVendors: list(vendors).slice(0, 8),
      byMonth: [...months.values()].sort((a, b) => a.month.localeCompare(b.month))
        .map((m) => ({ month: m.month, income: money(m.income), expense: money(m.expense) })),
    };
  }

  function rangeFor(preset, today = todayISO()) {
    const [y, m] = today.split('-').map(Number);
    const first = (yy, mm) => `${yy}-${pad(mm)}-01`;
    const last = (yy, mm) => `${yy}-${pad(mm)}-${pad(new Date(yy, mm, 0).getDate())}`;
    const back = (n) => { const d = new Date(y, m - 1 - n, 1); return [d.getFullYear(), d.getMonth() + 1]; };
    switch (preset) {
      case 'thisMonth': return { from: first(y, m), to: last(y, m) };
      case 'lastMonth': { const [yy, mm] = back(1); return { from: first(yy, mm), to: last(yy, mm) }; }
      case 'last3': { const [yy, mm] = back(2); return { from: first(yy, mm), to: last(y, m) }; }
      case 'thisYear': return { from: `${y}-01-01`, to: `${y}-12-31` };
      default: return { from: '', to: '' };
    }
  }

  const norm = (s) => String(s || '').trim().toLowerCase().replace(/\s+/g, ' ');
  const sameTx = (a, b) =>
    a.date === b.date && a.type === b.type && cents(a.amount) === cents(b.amount) &&
    norm(a.vendor) === norm(b.vendor);
  const findDuplicate = (txs, t) => txs.find((x) => sameTx(x, t)) || null;

  // ---------- CSV ----------
  const COLS = ['date', 'type', 'vendor', 'amount', 'category', 'notes', 'status', 'dueDate', 'item', 'group'];
  function csvCell(v) {
    let s = v == null ? '' : String(v);
    if (/^[=+\-@\t\r]/.test(s) && !/^-?\d+(\.\d+)?$/.test(s)) s = "'" + s; // spreadsheet formula injection guard
    return /[",\n\r;]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  }
  function toCSV(txs) {
    const rows = txs.map((t) => COLS.map((c) => csvCell(t[c])).join(','));
    return COLS.join(',') + '\n' + rows.join('\n') + (rows.length ? '\n' : '');
  }
  function parseCSV(text) {
    text = String(text).replace(/^\uFEFF/, '');
    const firstLine = text.split(/\r?\n/, 1)[0] || '';
    const delim = (firstLine.match(/;/g) || []).length > (firstLine.match(/,/g) || []).length ? ';' : ',';
    const rows = []; let row = [], cur = '', q = false;
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (q) {
        if (ch === '"') { if (text[i + 1] === '"') { cur += '"'; i++; } else q = false; } else cur += ch;
      } else if (ch === '"') q = true;
      else if (ch === delim) { row.push(cur); cur = ''; }
      else if (ch === '\n' || ch === '\r') {
        if (ch === '\r' && text[i + 1] === '\n') i++;
        row.push(cur); cur = ''; if (row.some((c) => c.trim() !== '')) rows.push(row); row = [];
      } else cur += ch;
    }
    row.push(cur); if (row.some((c) => c.trim() !== '')) rows.push(row);
    return rows;
  }

  /** Map CSV text to transactions. `P` = Parser (for date/amount parsing). */
  function importCSV(text, P, { defaultType = 'expense', dateOrder = 'dmy' } = {}) {
    const rows = parseCSV(text);
    if (rows.length < 2) return { items: [], errors: ['The file has no data rows.'] };
    const head = rows[0].map((h) => norm(h).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z]/g, ''));
    const idx = (...names) => head.findIndex((h) => names.includes(h));
    const ix = {
      date: idx('date', 'jour'), type: idx('type'), vendor: idx('vendor', 'source', 'store', 'merchant', 'storevendor', 'storevendor', 'payee', 'description', 'libelle', 'fournisseur', 'magasin'),
      amount: idx('amount', 'montant', 'amountinr', 'total', 'price'), category: idx('category', 'expensecategory', 'incomecategory', 'categorie'),
      notes: idx('notes', 'note', 'memo', 'commentaire'), status: idx('status'), dueDate: idx('duedate', 'due'),
      item: idx('item', 'article'), group: idx('group'),
    };
    if (ix.date < 0 || ix.amount < 0) return { items: [], errors: ['Needs at least "date" and "amount" columns.'] };
    const items = [], errors = [];
    rows.slice(1).forEach((r, n) => {
      const get = (k) => (ix[k] >= 0 ? (r[ix[k]] || '').trim().replace(/^'(?=[=+\-@])/, '') : '');
      const date = P.parseDateLoose(get('date'), dateOrder);
      const amount = P.parseAmount(get('amount'));
      if (!date || !amount) { errors.push(`Row ${n + 2}: couldn't read ${!date ? 'date' : 'amount'}.`); return; }
      const t = norm(get('type'));
      const type = t.startsWith('inc') ? 'income' : t.startsWith('exp') ? 'expense' : defaultType;
      const status = type === 'expense' && norm(get('status')) === 'unpaid' ? 'unpaid' : 'paid';
      const due = get('dueDate') ? P.parseDateLoose(get('dueDate'), dateOrder) : '';
      const row = { type, date, vendor: get('vendor'), amount, category: get('category'), notes: get('notes'), status, dueDate: due || '' };
      if (get('item')) row.item = get('item');
      if (get('group')) row.group = get('group');
      items.push(row);
    });
    return { items, errors };
  }

  return { cents, money, todayISO, isoOf, monthKey, isSettled, applyFilter, summarize, rangeFor, findDuplicate, toCSV, parseCSV, importCSV, COLS };
});

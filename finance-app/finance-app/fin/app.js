/* app.js — UI. All DOM is built with textContent (never innerHTML) so scanned text can't inject markup. */
(function () {
  'use strict';
  const { Vault, Calc, Parser, Scan } = window.Fin;
  const { Store, newId } = window.Fin.Store;
  const LS_KEY = 'fin.vault.v1';
  const TABS = [['add', 'Add'], ['bills', 'Bills'], ['ledger', 'Ledger'], ['insights', 'Insights'], ['settings', 'Settings']];

  const st = {
    store: null, tab: 'add', drafts: [], idleTimer: null,
    ledger: { from: '', to: '', type: '', category: '', q: '', status: '', limit: 200 },
    range: 'thisMonth', cfrom: '', cto: '',
  };
  const db = () => st.store.db;
  const settings = () => db().settings;
  const today = () => Calc.todayISO();

  // ---------- tiny DOM helper ----------
  function h(tag, props, ...kids) {
    const el = document.createElement(tag); let value;
    for (const [k, v] of Object.entries(props || {})) {
      if (v == null || v === false) continue;
      if (k === 'class') el.className = v;
      else if (k === 'value') value = v;
      else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
      else if (v === true) el.setAttribute(k, '');
      else el.setAttribute(k, v);
    }
    for (const kid of kids.flat(Infinity)) { if (kid == null || kid === false) continue; el.append(kid.nodeType ? kid : document.createTextNode(String(kid))); }
    if (value !== undefined) el.value = value;
    return el;
  }
  const $ = (s, r = document) => r.querySelector(s);
  const clear = (el) => { while (el.firstChild) el.removeChild(el.firstChild); return el; };

  function fmt(n) {
    try { return new Intl.NumberFormat(settings().locale, { style: 'currency', currency: settings().currency, maximumFractionDigits: 2 }).format(n); }
    catch { return Number(n).toFixed(2); }
  }
  function fmtDate(iso) {
    if (!iso) return '';
    try { return new Date(iso + 'T00:00:00').toLocaleDateString(settings().locale, { day: 'numeric', month: 'short', year: 'numeric' }); } catch { return iso; }
  }
  const dayDiff = (a, b) => Math.round((Date.parse(b + 'T00:00:00Z') - Date.parse(a + 'T00:00:00Z')) / 864e5);

  let toastT;
  function toast(msg, err) {
    const t = $('#toast'); t.textContent = msg; t.className = 'show' + (err ? ' err' : '');
    clearTimeout(toastT); toastT = setTimeout(() => { t.className = ''; }, err ? 6000 : 2800);
  }
  async function run(btn, fn) {
    if (btn) btn.disabled = true;
    try { return await fn(); } catch (e) { console.warn(e); toast(e.message || String(e), true); }
    finally { if (btn) btn.disabled = false; }
  }
  function dialog(...content) {
    const d = $('#dlg'); clear(d).append(...content);
    if (!d.open) d.showModal();
    return d;
  }
  const closeDialog = () => { const d = $('#dlg'); if (d.open) d.close(); };
  $('#dlg').addEventListener('click', (e) => { if (e.target.id === 'dlg') closeDialog(); });

  // ---------- auth ----------
  function authShell(title, ...body) {
    clear($('#app')).append(h('div', { class: 'shell auth' }, h('div', { class: 'panel' }, h('h2', null, title), ...body)));
  }
  function boot() {
    let sealed = null; try { sealed = localStorage.getItem(LS_KEY); } catch { /* storage blocked */ }
    sealed ? showUnlock(sealed) : showSetup();
  }
  function showSetup() {
    const f = {
      owner: h('input', { required: true, autocomplete: 'off', placeholder: 'your GitHub username' }),
      repo: h('input', { required: true, autocomplete: 'off', value: 'finance-data' }),
      token: h('input', { type: 'password', required: true, autocomplete: 'off', placeholder: 'github_pat_…' }),
      pass: h('input', { type: 'password', required: true, minlength: 8, autocomplete: 'new-password' }),
      pass2: h('input', { type: 'password', required: true, autocomplete: 'new-password' }),
    };
    const btn = h('button', { class: 'btn primary', type: 'submit' }, 'Connect');
    const form = h('form', { class: 'grid', onsubmit: (e) => { e.preventDefault(); run(btn, async () => {
      if (f.pass.value !== f.pass2.value) throw new Error('The two passphrases do not match.');
      const cfg = { owner: f.owner.value.trim(), repo: f.repo.value.trim(), token: f.token.value.trim() };
      const store = new Store(cfg); await store.connect();
      const sealed = await Vault.seal(cfg, f.pass.value);
      try { localStorage.setItem(LS_KEY, sealed); } catch { throw new Error('This browser blocks local storage (private mode?). Use a normal window.'); }
      enter(store);
    }); } },
      h('p', { class: 'muted small' }, 'Data is stored in a private GitHub repository you own. Make a fine-grained token for that one repo with Contents: read and write. See the README for a 2-minute walkthrough.'),
      lbl('GitHub username', f.owner), lbl('Private data repository', f.repo), lbl('Fine-grained access token', f.token),
      lbl('Passphrase for this device (encrypts the token)', f.pass), lbl('Repeat passphrase', f.pass2), btn);
    authShell('Set up Ledger', form);
  }
  function showUnlock(sealed) {
    const pass = h('input', { type: 'password', required: true, autocomplete: 'current-password', autofocus: true });
    const btn = h('button', { class: 'btn primary', type: 'submit' }, 'Unlock');
    authShell('Ledger',
      h('form', { class: 'grid', onsubmit: (e) => { e.preventDefault(); run(btn, async () => {
        const cfg = await Vault.open(sealed, pass.value);
        const store = new Store(cfg); await store.connect(); enter(store);
      }); } }, lbl('Passphrase', pass), btn),
      h('p', { class: 'small muted', style: 'margin-top:16px' }, 'Wrong device or lost passphrase? ',
        h('a', { href: '#', onclick: (e) => { e.preventDefault(); if (confirm('Remove the saved login from this browser? Your data in GitHub is not touched.')) { try { localStorage.removeItem(LS_KEY); } catch {} showSetup(); } } }, 'Reset this device')));
  }
  function lock() {
    st.store = null; st.drafts = []; clearTimeout(st.idleTimer);
    clear($('#app')); boot();
  }
  function bumpIdle() {
    clearTimeout(st.idleTimer);
    st.idleTimer = setTimeout(() => { if (st.store && !st.drafts.length) lock(); else bumpIdle(); }, 15 * 60 * 1000);
  }
  ['pointerdown', 'keydown'].forEach((ev) => document.addEventListener(ev, () => st.store && bumpIdle(), { passive: true }));
  window.addEventListener('beforeunload', (e) => { if (st.drafts.length) { e.preventDefault(); e.returnValue = ''; } });

  function lbl(text, input) { return h('label', { class: 'f' }, text, input); }

  // ---------- shell ----------
  function enter(store) { st.store = store; st.tab = 'add'; bumpIdle(); renderShell(); }
  function unpaidList() { return db().transactions.filter((t) => t.type === 'expense' && t.status === 'unpaid'); }
  function renderShell() {
    const dl = h('datalist', { id: 'vendors' });
    const seen = new Set();
    for (const t of db().transactions) { const v = (t.vendor || '').trim(); if (v && !seen.has(v.toLowerCase()) && seen.size < 400) { seen.add(v.toLowerCase()); dl.append(h('option', { value: v })); } }
    const n = unpaidList().length;
    clear($('#app')).append(h('div', { class: 'shell' },
      h('header', { class: 'top' }, h('div', { class: 'brand' }, 'Ledger'),
        h('div', { class: 'row' }, h('span', { class: 'muted small' }, `${st.store.owner}/${st.store.repo}`), h('button', { class: 'btn small', onclick: lock }, 'Lock'))),
      h('nav', { class: 'tabs', role: 'tablist' }, TABS.map(([id, name]) => h('button', { role: 'tab', 'aria-selected': String(st.tab === id), onclick: () => { st.tab = id; renderShell(); } },
        name, id === 'bills' && n ? h('span', { class: 'badge' }, n) : null))),
      dl, h('main', { id: 'main' })));
    ({ add: renderAdd, bills: renderBills, ledger: renderLedger, insights: renderInsights, settings: renderSettings })[st.tab]();
  }

  // ---------- transaction form ----------
  function catSelect(sel, type, current) {
    clear(sel);
    const names = db().categories[type].slice();
    if (current && !names.includes(current)) names.push(current);
    for (const c of names) sel.append(h('option', { value: c }, c));
    sel.append(h('option', { value: '__new__' }, '+ New category…'));
    sel.value = current && names.includes(current) ? current : names[0] || '__new__';
  }
  function txForm(t = {}) {
    let type = t.type || 'expense';
    const date = h('input', { type: 'date', required: true, value: t.date || today() });
    const vendor = h('input', { list: 'vendors', required: true, autocomplete: 'off', value: t.vendor || '' });
    const amount = h('input', { type: 'number', step: '0.01', min: '0.01', inputmode: 'decimal', required: true, value: t.amount || '' });
    const category = h('select');
    const status = h('select', null, h('option', { value: 'paid' }, 'Paid'), h('option', { value: 'unpaid' }, 'Unpaid bill'));
    status.value = t.status === 'unpaid' ? 'unpaid' : 'paid';
    const due = h('input', { type: 'date', value: t.dueDate || '' });
    const notes = h('textarea', { value: t.notes || '' });
    const vLabel = lbl('', vendor), statusRow = lbl('Status', status), dueRow = lbl('Due date', due);
    let prevCat = t.category || '';
    category.addEventListener('change', async () => {
      if (category.value !== '__new__') { prevCat = category.value; return; }
      const name = (prompt(`New ${type} category name:`) || '').trim();
      const exists = db().categories[type].find((c) => c.toLowerCase() === name.toLowerCase());
      if (name && !exists) {
        try { await st.store.mutate((d) => { if (!d.categories[type].some((c) => c.toLowerCase() === name.toLowerCase())) d.categories[type].push(name); }, 'Add category'); prevCat = name; }
        catch (e) { toast(e.message, true); }
      } else if (exists) prevCat = exists;
      catSelect(category, type, prevCat);
    });
    const typeBtns = ['expense', 'income'].map((k) => h('button', { type: 'button', 'aria-pressed': String(type === k), onclick: () => setType(k) }, k === 'expense' ? 'Expense' : 'Income'));
    function setType(k) {
      type = k; typeBtns.forEach((b, i) => b.setAttribute('aria-pressed', String(['expense', 'income'][i] === k)));
      vLabel.firstChild.nodeValue = k === 'expense' ? 'Store / vendor' : 'Source';
      statusRow.style.display = k === 'expense' ? '' : 'none'; syncDue();
      catSelect(category, k, k === (t.type || 'expense') ? t.category : '');
      prevCat = category.value;
    }
    function syncDue() { dueRow.style.display = type === 'expense' && status.value === 'unpaid' ? '' : 'none'; }
    status.addEventListener('change', syncDue);
    const el = h('div', { class: 'grid' },
      h('div', null, h('div', { class: 'seg', role: 'group', 'aria-label': 'Type' }, typeBtns)),
      h('div', { class: 'grid cols2' }, lbl('Date', date), vLabel, lbl('Amount', amount), lbl('Category', category), statusRow, dueRow), lbl('Notes (optional)', notes));
    setType(type); if (t.category) { catSelect(category, type, t.category); prevCat = t.category; }
    function read() {
      const a = Math.round(parseFloat(amount.value) * 100) / 100;
      if (!date.value) throw new Error('Pick a date.');
      if (!vendor.value.trim()) throw new Error(type === 'expense' ? 'Enter the store or vendor.' : 'Enter the income source.');
      if (!(a > 0)) throw new Error('Enter an amount above zero.');
      if (!category.value || category.value === '__new__') throw new Error('Pick a category.');
      const unpaid = type === 'expense' && status.value === 'unpaid';
      return { type, date: date.value, vendor: vendor.value.trim(), amount: a, category: category.value, notes: notes.value.trim(), status: unpaid ? 'unpaid' : 'paid', dueDate: unpaid ? due.value : '' };
    }
    return { el, read };
  }
  function confirmDuplicate(t) {
    const d = Calc.findDuplicate(db().transactions, t);
    return !d || confirm(`You already have ${fmt(t.amount)} at "${t.vendor}" on ${fmtDate(t.date)}. Save it again?`);
  }

  // ---------- Add tab (scan + manual) ----------
  function renderAdd() {
    const main = clear($('#main'));
    const input = h('input', { type: 'file', multiple: true, accept: 'image/*,application/pdf', style: 'display:none', onchange: () => { addFiles([...input.files]); input.value = ''; } });
    const drop = h('div', { class: 'drop', tabindex: '0', role: 'button', onclick: () => input.click(), onkeydown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); } },
      ondragover: (e) => { e.preventDefault(); drop.classList.add('over'); }, ondragleave: () => drop.classList.remove('over'),
      ondrop: (e) => { e.preventDefault(); drop.classList.remove('over'); addFiles([...e.dataTransfer.files]); } },
      h('strong', null, 'Scan bills and receipts'), h('span', { class: 'muted' }, 'Drop photos or PDFs here, or tap to choose. Select many at once.'), input);
    const list = h('div', { id: 'drafts' }); st.drafts.forEach((d) => list.append(d.el));
    const bulk = h('div', { id: 'bulk', class: 'row', style: 'margin-top:14px' });
    const form = txForm(); const save = h('button', { class: 'btn primary' }, 'Save entry');
    save.addEventListener('click', () => run(save, async () => {
      const t = form.read(); if (!confirmDuplicate(t)) return;
      await st.store.addTransactions([t]); toast('Saved.'); renderShell();
    }));
    main.append(h('section', { class: 'panel' }, h('h2', null, 'Scan'), drop, list, bulk),
      h('section', { class: 'panel' }, h('h2', null, 'Add by hand'), form.el, h('div', { style: 'margin-top:14px' }, save)));
    syncBulk();
  }
  function syncBulk() {
    const bulk = $('#bulk'); if (!bulk) return; clear(bulk);
    const ready = st.drafts.filter((d) => d.state === 'ready');
    if (ready.length > 1) {
      const b = h('button', { class: 'btn primary' }, `Save all ${ready.length}`);
      b.addEventListener('click', () => run(b, async () => { for (const d of ready) await saveDraft(d, true); toast('Saved.'); renderShell(); }));
      bulk.append(b, h('span', { class: 'muted small' }, 'Check each card first — scans can misread amounts.'));
    }
  }
  let chain = Promise.resolve();
  function addFiles(files) {
    const ok = files.filter((f) => /^image\//.test(f.type) || Scan.isPdf(f));
    if (ok.length < files.length) toast('Skipped files that are not images or PDFs.', true);
    for (const file of ok) {
      if (file.size > 25 * 1024 * 1024) { toast(`${file.name} is over 25 MB — skipped.`, true); continue; }
      const d = { id: newId(), file, state: 'queued', el: h('div', { class: 'draft' }) };
      st.drafts.push(d); paintDraftBusy(d, 'Waiting…'); $('#drafts') && $('#drafts').append(d.el);
      chain = chain.then(() => processDraft(d));
    }
    syncBulk();
  }
  function thumb(d) {
    if (/^image\//.test(d.file.type)) { d.url = d.url || URL.createObjectURL(d.file); return h('img', { class: 'thumb', src: d.url, alt: '' }); }
    return h('div', { class: 'thumb' }, 'PDF');
  }
  function paintDraftBusy(d, label) {
    d.prog = h('progress', { max: '1', value: '0' });
    clear(d.el).append(h('div', { class: 'row' }, thumb(d), h('div', { style: 'flex:1;min-width:160px' }, h('strong', null, d.file.name), h('div', { class: 'muted small' }, label), d.prog)));
  }
  async function processDraft(d) {
    if (!st.drafts.includes(d)) return;
    d.state = 'scanning'; paintDraftBusy(d, 'Reading the document… the first scan downloads the reader (a few MB).');
    let parsed = null, err = '';
    try {
      const { text } = await Scan.extract(d.file, { langs: settings().ocrLangs, onProgress: (p) => { d.prog.value = p; } });
      d.text = text;
      parsed = Parser.parseReceipt(text, { categories: db().categories, history: db().transactions, dateOrder: settings().dateOrder });
    } catch (e) { err = e.message || 'Could not read this file.'; }
    if (!st.drafts.includes(d)) return;
    d.state = 'ready'; paintDraft(d, parsed, err); syncBulk();
  }
  function paintDraft(d, p, err) {
    const unpaid = !!(p && p.dueDate);
    d.form = txForm({ type: 'expense', date: (p && p.date) || today(), vendor: p ? p.vendor : '', amount: p && p.amount ? p.amount : '', category: p ? p.category : '', status: unpaid ? 'unpaid' : 'paid', dueDate: p ? p.dueDate : '' });
    const warns = [...(err ? [err + ' Fill it in by hand.'] : []), ...(p ? p.warnings : [])];
    const save = h('button', { class: 'btn primary' }, 'Save');
    save.addEventListener('click', () => run(save, async () => { await saveDraft(d); toast('Saved.'); renderShell(); }));
    const discard = h('button', { class: 'btn', onclick: () => { st.drafts = st.drafts.filter((x) => x !== d); if (d.url) URL.revokeObjectURL(d.url); d.el.remove(); syncBulk(); } }, 'Discard');
    d.el.classList.toggle('err', !!err);
    clear(d.el).append(h('div', { class: 'row', style: 'align-items:flex-start' }, thumb(d), h('div', { style: 'flex:1;min-width:200px' }, h('strong', null, d.file.name),
      warns.map((w) => h('div', { class: 'warn' }, w)),
      p && p.categoryWhy === 'learned' ? h('div', { class: 'muted small' }, 'Category chosen from your past entries for this vendor.') : null)),
      h('div', { style: 'margin-top:12px' }, d.form.el),
      d.text ? h('details', { style: 'margin-top:10px' }, h('summary', { class: 'small muted' }, 'What the scanner read'), h('pre', null, d.text)) : null,
      h('div', { class: 'row', style: 'margin-top:12px' }, save, discard));
  }
  async function saveDraft(d, skipDupe) {
    const t = d.form.read();
    if (!skipDupe && !confirmDuplicate(t)) throw new Error('Not saved.');
    if (!d.receiptPath) {
      d.rid = d.rid || newId();
      const prep = await Scan.prepareForUpload(d.file);
      d.receiptPath = await st.store.putReceipt(d.rid, prep.bytes, prep.ext);
    }
    await st.store.addTransactions([{ ...t, receipt: d.receiptPath }]);
    st.drafts = st.drafts.filter((x) => x !== d); if (d.url) URL.revokeObjectURL(d.url);
  }

  // ---------- receipts ----------
  async function showReceipt(path) {
    const body = h('p', { class: 'muted' }, 'Loading receipt…');
    dialog(body, h('div', { class: 'row', style: 'margin-top:12px' }, h('button', { class: 'btn', onclick: closeDialog }, 'Close')));
    try {
      const bytes = await st.store.getReceipt(path); const pdf = /\.pdf$/i.test(path);
      const url = URL.createObjectURL(new Blob([bytes], { type: pdf ? 'application/pdf' : 'image/jpeg' }));
      body.replaceWith(h('div', null, pdf ? h('iframe', { src: url, title: 'Receipt', style: 'height:60vh' }) : h('img', { src: url, alt: 'Receipt' }),
        h('p', null, h('a', { href: url, target: '_blank', rel: 'noopener' }, 'Open in a new tab'))));
    } catch (e) { body.textContent = e.message; }
  }

  // ---------- edit / mark paid ----------
  function editDialog(t) {
    const f = txForm(t);
    const save = h('button', { class: 'btn primary' }, 'Save changes');
    save.addEventListener('click', () => run(save, async () => { await st.store.updateTransaction(t.id, f.read()); closeDialog(); toast('Updated.'); renderShell(); }));
    const del = h('button', { class: 'btn danger', onclick: () => { if (confirm('Delete this entry?')) run(del, async () => { await st.store.deleteTransaction(t.id); closeDialog(); toast('Deleted.'); renderShell(); }); } }, 'Delete');
    dialog(h('h3', null, 'Edit entry'), f.el, h('div', { class: 'row between', style: 'margin-top:14px' }, h('div', { class: 'row' }, save, h('button', { class: 'btn', onclick: closeDialog }, 'Cancel')), del));
  }
  function payDialog(t) {
    const d = h('input', { type: 'date', value: today(), required: true });
    const ok = h('button', { class: 'btn primary' }, 'Mark paid');
    ok.addEventListener('click', () => run(ok, async () => {
      if (!d.value) throw new Error('Pick the payment date.');
      await st.store.updateTransaction(t.id, { status: 'paid', billDate: t.billDate || t.date, date: d.value });
      closeDialog(); toast('Marked as paid.'); renderShell();
    }));
    dialog(h('h3', null, `Pay ${t.vendor}`), h('p', { class: 'muted small' }, `${fmt(t.amount)}. Spending is counted on the day you pay.`), lbl('Paid on', d), h('div', { class: 'row', style: 'margin-top:14px' }, ok, h('button', { class: 'btn', onclick: closeDialog }, 'Cancel')));
  }

  // ---------- Bills ----------
  function renderBills() {
    const main = clear($('#main'));
    const list = unpaidList().sort((a, b) => (a.dueDate || '9999').localeCompare(b.dueDate || '9999') || a.date.localeCompare(b.date));
    const td = today(); let total = 0, od = 0, odN = 0, wk = 0;
    for (const t of list) { total += Calc.cents(t.amount); if (t.dueDate && t.dueDate < td) { od += Calc.cents(t.amount); odN++; } else if (t.dueDate && dayDiff(td, t.dueDate) <= 7) wk += Calc.cents(t.amount); }
    main.append(h('div', { class: 'kpis' },
      kpi('Unpaid', fmt(total / 100), `${list.length} bill${list.length === 1 ? '' : 's'}`), kpi('Overdue', fmt(od / 100), `${odN} bill${odN === 1 ? '' : 's'}`, od ? 'neg' : ''), kpi('Due in 7 days', fmt(wk / 100))));
    if (!list.length) { main.append(h('div', { class: 'panel' }, h('h3', null, 'Nothing unpaid'), h('p', { class: 'muted' }, 'Scan a bill on the Add tab and leave it as “Unpaid bill” to track it here.'))); return; }
    main.append(h('div', { class: 'panel' }, h('ul', { class: 'bills' }, list.map(billRow))));
  }
  function kpi(label, value, sub, cls) { return h('div', { class: 'kpi' }, h('div', { class: 'l' }, label), h('div', { class: 'v ' + (cls || '') }, value), sub ? h('div', { class: 'l' }, sub) : null); }
  function billRow(t) {
    const td = today(), over = t.dueDate && t.dueDate < td;
    let rel = 'no due date';
    if (t.dueDate) { const n = dayDiff(td, t.dueDate); rel = n < 0 ? `${-n} day${n === -1 ? '' : 's'} overdue` : n === 0 ? 'due today' : `in ${n} day${n === 1 ? '' : 's'}`; }
    const dd = t.dueDate ? new Date(t.dueDate + 'T00:00:00') : null;
    const stub = h('div', { class: 'stub' + (over ? ' overdue' : '') },
      h('div', { class: 'd' }, dd ? dd.getDate() : '—'), h('div', { class: 'm' }, dd ? dd.toLocaleDateString(settings().locale, { month: 'short', year: 'numeric' }) : 'no date'), h('div', { class: 'rel' }, rel));
    return h('li', { class: 'bill' }, stub,
      h('div', null, h('strong', null, t.vendor), h('div', { class: 'muted small' }, `${t.category} · billed ${fmtDate(t.billDate || t.date)}`), t.notes ? h('div', { class: 'small' }, t.notes) : null,
        h('div', { class: 'acts' }, h('button', { class: 'btn small primary', onclick: () => payDialog(t) }, 'Mark paid'), h('button', { class: 'btn small', onclick: () => editDialog(t) }, 'Edit'),
          t.receipt ? h('button', { class: 'btn small', onclick: () => showReceipt(t.receipt) }, 'Receipt') : null)),
      h('div', { class: 'amt' }, fmt(t.amount)));
  }

  // ---------- Ledger ----------
  function renderLedger() {
    const main = clear($('#main')), F = st.ledger;
    const set = (k) => (e) => { F[k] = e.target.value; F.limit = 200; draw(); };
    const catSel = h('select', { onchange: set('category') }, h('option', { value: '' }, 'All categories'), [...new Set([...db().categories.expense, ...db().categories.income])].map((c) => h('option', { value: c }, c)));
    catSel.value = F.category;
    const typeSel = h('select', { onchange: set('type') }, h('option', { value: '' }, 'Income & expenses'), h('option', { value: 'expense' }, 'Expenses'), h('option', { value: 'income' }, 'Income')); typeSel.value = F.type;
    const statSel = h('select', { onchange: set('status') }, h('option', { value: '' }, 'Paid & unpaid'), h('option', { value: 'paid' }, 'Paid'), h('option', { value: 'unpaid' }, 'Unpaid')); statSel.value = F.status;
    const imp = h('input', { type: 'file', accept: '.csv,text/csv', style: 'display:none', onchange: () => { if (imp.files[0]) importDialog(imp.files[0]); imp.value = ''; } });
    const out = h('div');
    main.append(h('section', { class: 'panel' },
      h('div', { class: 'grid cols2' }, lbl('From', h('input', { type: 'date', value: F.from, onchange: set('from') })), lbl('To', h('input', { type: 'date', value: F.to, onchange: set('to') })),
        lbl('Search', h('input', { type: 'search', value: F.q, placeholder: 'vendor, note…', oninput: (e) => { F.q = e.target.value; F.limit = 200; draw(); } })), lbl('Type', typeSel), lbl('Category', catSel), lbl('Status', statSel)),
      h('div', { class: 'row', style: 'margin-top:12px' }, h('button', { class: 'btn small', onclick: () => { Object.assign(F, { from: '', to: '', type: '', category: '', q: '', status: '' }); renderShell(); } }, 'Clear filters'),
        h('button', { class: 'btn small', onclick: () => download(`ledger-${today()}.csv`, Calc.toCSV(rows()), 'text/csv') }, 'Export CSV'),
        h('button', { class: 'btn small', onclick: () => imp.click() }, 'Import CSV'), imp)), out);
    const rows = () => Calc.applyFilter(db().transactions, F).sort((a, b) => b.date.localeCompare(a.date) || (b.createdAt || '').localeCompare(a.createdAt || ''));
    function draw() {
      const all = rows(), s = Calc.summarize(all), shown = all.slice(0, F.limit);
      clear(out).append(h('section', { class: 'panel' },
        h('div', { class: 'row between', style: 'margin-bottom:8px' }, h('span', { class: 'muted small' }, `${all.length} entr${all.length === 1 ? 'y' : 'ies'}`),
          h('span', { class: 'small' }, `Spent ${fmt(s.expense)} · Income ${fmt(s.income)}`)),
        all.length ? h('div', { class: 'scroll' }, h('table', { class: 'stack' }, h('thead', null, h('tr', null, h('th', null, 'Date'), h('th', null, 'Vendor / source'), h('th', null, 'Category'), h('th', { class: 'num' }, 'Amount'), h('th'))),
          h('tbody', null, shown.map((t) => h('tr', null, h('td', { 'data-l': 'Date' }, fmtDate(t.date)),
            h('td', { 'data-l': 'Vendor' }, t.vendor, ' ', t.status === 'unpaid' ? h('span', { class: 'tag unpaid' }, 'unpaid') : null, t.notes ? h('div', { class: 'muted small' }, t.notes) : null),
            h('td', { 'data-l': 'Category' }, t.category),
            h('td', { class: 'num ' + (t.type === 'income' ? 'pos' : ''), 'data-l': 'Amount' }, (t.type === 'income' ? '+' : '') + fmt(t.amount)),
            h('td', { class: 'right' }, t.receipt ? h('button', { class: 'btn small', onclick: () => showReceipt(t.receipt) }, 'Receipt') : null, ' ', h('button', { class: 'btn small', onclick: () => editDialog(t) }, 'Edit'))))))) :
          h('p', { class: 'muted' }, 'No entries match. Add some on the Add tab, or import a CSV.'),
        all.length > shown.length ? h('div', { style: 'margin-top:12px' }, h('button', { class: 'btn', onclick: () => { F.limit += 300; draw(); } }, `Show more (${all.length - shown.length} left)`)) : null));
    }
    draw();
  }
  function download(name, text, type) {
    const a = h('a', { href: URL.createObjectURL(new Blob([text], { type })), download: name }); document.body.append(a); a.click(); a.remove();
  }
  async function importDialog(file) {
    const text = await file.text();
    const typeSel = h('select', null, h('option', { value: 'expense' }, 'Expenses'), h('option', { value: 'income' }, 'Income'));
    const info = h('div'), go = h('button', { class: 'btn primary' }, 'Import');
    let plan = [];
    function prepare() {
      const res = Calc.importCSV(text, Parser, { defaultType: typeSel.value, dateOrder: settings().dateOrder });
      const counts = new Map(); const key = (t) => [t.date, t.type, Calc.cents(t.amount), (t.vendor || '').trim().toLowerCase()].join('|');
      for (const t of db().transactions) counts.set(key(t), (counts.get(key(t)) || 0) + 1);
      plan = []; let dupes = 0;
      for (const t of res.items) { const k = key(t); if (counts.get(k) > 0) { counts.set(k, counts.get(k) - 1); dupes++; } else plan.push(t); }
      const newCats = new Set(plan.filter((t) => t.category && !db().categories[t.type].some((c) => c.toLowerCase() === t.category.toLowerCase())).map((t) => `${t.type}:${t.category}`));
      clear(info).append(h('p', null, `${plan.length} to import, ${dupes} already in your ledger (skipped).`), newCats.size ? h('p', { class: 'small muted' }, `New categories will be created: ${[...newCats].map((c) => c.split(':')[1]).slice(0, 8).join(', ')}.`) : null,
        res.errors.length ? h('p', { class: 'warn' }, `${res.errors.length} row(s) skipped: ${res.errors.slice(0, 3).join(' ')}`) : null);
      go.disabled = !plan.length;
    }
    typeSel.addEventListener('change', prepare);
    go.addEventListener('click', () => run(go, async () => {
      const stamp = new Date().toISOString();
      await st.store.mutate((d) => {
        for (const t of plan) {
          const hit = d.categories[t.type].find((c) => c.toLowerCase() === (t.category || '').toLowerCase());
          if (hit) t.category = hit; else if (t.category) d.categories[t.type].push(t.category); else t.category = d.categories[t.type].find((c) => /^misc/i.test(c)) || d.categories[t.type][0];
          d.transactions.push({ ...t, id: newId(), createdAt: stamp });
        }
      }, `Import ${plan.length} transactions`);
      closeDialog(); toast(`Imported ${plan.length}.`); renderShell();
    }));
    prepare();
    dialog(h('h3', null, 'Import CSV'), h('p', { class: 'muted small' }, 'Columns: date, amount, vendor, category, notes (optional: type, status, dueDate).'), lbl('Rows without a type column are', typeSel), info,
      h('div', { class: 'row', style: 'margin-top:14px' }, go, h('button', { class: 'btn', onclick: closeDialog }, 'Cancel')));
  }

  // ---------- Insights ----------
  function renderInsights() {
    const main = clear($('#main'));
    const presets = [['thisMonth', 'This month'], ['lastMonth', 'Last month'], ['last3', 'Last 3 months'], ['thisYear', 'This year'], ['all', 'All time'], ['custom', 'Custom']];
    const sel = h('select', { onchange: (e) => { st.range = e.target.value; renderShell(); } }, presets.map(([v, n]) => h('option', { value: v }, n))); sel.value = st.range;
    const r = st.range === 'custom' ? { from: st.cfrom, to: st.cto } : Calc.rangeFor(st.range);
    const txs = Calc.applyFilter(db().transactions, r), s = Calc.summarize(txs);
    main.append(h('div', { class: 'row', style: 'margin-bottom:14px' }, sel,
      st.range === 'custom' ? [h('input', { type: 'date', value: st.cfrom, style: 'width:auto', onchange: (e) => { st.cfrom = e.target.value; renderShell(); } }), h('input', { type: 'date', value: st.cto, style: 'width:auto', onchange: (e) => { st.cto = e.target.value; renderShell(); } })] : null,
      h('span', { class: 'muted small' }, r.from || r.to ? `${fmtDate(r.from) || 'start'} – ${fmtDate(r.to) || 'now'}` : 'Every entry')));
    const months = s.byMonth.length;
    main.append(h('div', { class: 'kpis' }, kpi('Spent', fmt(s.expense), months > 1 ? `${fmt(s.expense / months)} / month` : ''), kpi('Income', fmt(s.income), '', 'pos'),
      kpi('Net', (s.net >= 0 ? '+' : '') + fmt(s.net), '', s.net >= 0 ? 'pos' : 'neg'), kpi('Unpaid bills', fmt(Calc.summarize(db().transactions).outstanding), 'all dates')));
    if (!txs.length) { main.append(h('div', { class: 'panel' }, h('p', { class: 'muted' }, 'No entries in this period yet.'))); return; }
    const drill = (category, type) => { Object.assign(st.ledger, { category, type, from: r.from, to: r.to, q: '', status: '' }); st.tab = 'ledger'; renderShell(); };
    const bars = (items, cls, type) => { const max = Math.max(...items.map((i) => i.total), 1); const sum = items.reduce((a, i) => a + i.total, 0) || 1;
      return items.map((i) => h('button', { class: 'bar ' + cls, onclick: () => drill(i.category, type), title: `Show ${i.category} entries` },
        h('span', null, i.category), h('span', { class: 'track' }, h('span', { class: 'fill', style: `width:${(i.total / max) * 100}%` })), h('span', { class: 'mono small' }, `${fmt(i.total)} · ${Math.round((i.total / sum) * 100)}%`))); };
    main.append(h('section', { class: 'panel' }, h('h2', null, 'Where the money went'), s.byCategory.length ? bars(s.byCategory, '', 'expense') : h('p', { class: 'muted' }, 'No paid expenses.')));
    if (s.byMonth.length) main.append(h('section', { class: 'panel' }, h('h2', null, 'Month by month'), monthChart(s.byMonth)));
    if (s.incomeByCategory.length) main.append(h('section', { class: 'panel' }, h('h2', null, 'Income sources'), bars(s.incomeByCategory, 'inc', 'income')));
    if (s.topVendors.length) main.append(h('section', { class: 'panel' }, h('h2', null, 'Top vendors'), h('table', null, h('thead', null, h('tr', null, h('th', null, 'Vendor'), h('th', { class: 'num' }, 'Visits'), h('th', { class: 'num' }, 'Total'))),
      h('tbody', null, s.topVendors.map((v) => h('tr', null, h('td', null, v.vendor), h('td', { class: 'num' }, v.count), h('td', { class: 'num' }, fmt(v.total))))))));
  }
  function monthChart(data) {
    const NS = 'http://www.w3.org/2000/svg', W = 700, H = 240, m = { l: 66, r: 8, t: 10, b: 28 };
    const el = (tag, a, ...k) => { const n = document.createElementNS(NS, tag); for (const [x, y] of Object.entries(a || {})) n.setAttribute(x, y); k.forEach((c) => n.append(c)); return n; };
    const max = Math.max(...data.flatMap((d) => [d.income, d.expense]), 1);
    const mag = Math.pow(10, Math.floor(Math.log10(max))), top = Math.ceil(max / mag * 2) / 2 * mag || 1;
    const iw = W - m.l - m.r, ih = H - m.t - m.b, gw = iw / data.length, bw = Math.min(26, gw * 0.36);
    const y = (v) => m.t + ih - (v / top) * ih;
    const svg = el('svg', { class: 'chart', viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': `Income and spending for ${data.length} months` });
    for (let i = 0; i <= 4; i++) { const v = (top / 4) * i;
      svg.append(el('line', { x1: m.l, x2: W - m.r, y1: y(v), y2: y(v), stroke: 'var(--rule)' }), Object.assign(el('text', { x: m.l - 6, y: y(v) + 4, 'text-anchor': 'end' }), { textContent: new Intl.NumberFormat(settings().locale, { maximumFractionDigits: 0 }).format(v) })); }
    data.forEach((d, i) => {
      const cx = m.l + gw * i + gw / 2, label = new Date(d.month + '-01T00:00:00').toLocaleDateString(settings().locale, { month: 'short', year: '2-digit' });
      svg.append(el('rect', { x: cx - bw - 1, y: y(d.income), width: bw, height: Math.max(0, m.t + ih - y(d.income)), fill: 'var(--income)' }, Object.assign(el('title'), { textContent: `${label} income ${fmt(d.income)}` })),
        el('rect', { x: cx + 1, y: y(d.expense), width: bw, height: Math.max(0, m.t + ih - y(d.expense)), fill: 'var(--accent)' }, Object.assign(el('title'), { textContent: `${label} spent ${fmt(d.expense)}` })));
      if (data.length <= 14 || i % Math.ceil(data.length / 14) === 0) svg.append(Object.assign(el('text', { x: cx, y: H - 8, 'text-anchor': 'middle' }), { textContent: label }));
    });
    return h('div', null, svg, h('div', { class: 'row small muted' }, h('span', null, h('span', { style: 'color:var(--income)' }, '■ '), 'Income'), h('span', null, h('span', { style: 'color:var(--accent)' }, '■ '), 'Spent')));
  }

  // ---------- Settings ----------
  function renderSettings() {
    const main = clear($('#main'));
    const catPanel = (type, title) => {
      const add = h('input', { placeholder: 'New category', style: 'max-width:240px' });
      const addBtn = h('button', { class: 'btn' }, 'Add');
      addBtn.addEventListener('click', () => run(addBtn, async () => {
        const n = add.value.trim(); if (!n) return;
        if (db().categories[type].some((c) => c.toLowerCase() === n.toLowerCase())) throw new Error('That category already exists.');
        await st.store.mutate((d) => { d.categories[type].push(n); }, 'Add category'); renderShell();
      }));
      return h('section', { class: 'panel' }, h('h3', null, title), h('div', { class: 'chips', style: 'margin-bottom:12px' }, db().categories[type].map((c) => {
        const used = db().transactions.filter((t) => t.type === type && t.category === c).length;
        return h('span', { class: 'chip' }, h('span', { title: 'Rename', style: 'cursor:pointer', onclick: () => renameCat(type, c) }, c, used ? ` (${used})` : ''),
          h('button', { 'aria-label': `Remove ${c}`, onclick: () => { if (used) return toast(`“${c}” is used by ${used} entries. Rename it or edit those entries first.`, true);
            run(null, async () => { await st.store.mutate((d) => { d.categories[type] = d.categories[type].filter((x) => x !== c); }, 'Remove category'); renderShell(); }); } }, '×'));
      })), h('div', { class: 'row' }, add, addBtn));
    };
    const S = settings();
    const cur = h('input', { value: S.currency, maxlength: 3, style: 'text-transform:uppercase' }), loc = h('input', { value: S.locale });
    const order = h('select', null, h('option', { value: 'dmy' }, 'Day first (31/12/2026)'), h('option', { value: 'mdy' }, 'Month first (12/31/2026)')); order.value = S.dateOrder;
    const langs = h('select', null, h('option', { value: 'eng' }, 'English'), h('option', { value: 'eng+fra' }, 'English + French'), h('option', { value: 'fra' }, 'French')); langs.value = S.ocrLangs;
    const saveS = h('button', { class: 'btn primary' }, 'Save preferences');
    saveS.addEventListener('click', () => run(saveS, async () => {
      const c = cur.value.trim().toUpperCase(), l = loc.value.trim();
      try { new Intl.NumberFormat(l, { style: 'currency', currency: c }); } catch { throw new Error('Currency must be a 3-letter code (INR, EUR, USD) and the locale something like en-IN or fr-FR.'); }
      await st.store.mutate((d) => { Object.assign(d.settings, { currency: c, locale: l, dateOrder: order.value, ocrLangs: langs.value }); }, 'Update settings');
      toast('Saved.'); renderShell();
    }));
    const reload = h('button', { class: 'btn' }, 'Reload from GitHub');
    reload.addEventListener('click', () => run(reload, async () => { await st.store.reload(); toast('Up to date.'); renderShell(); }));
    main.append(h('section', { class: 'panel' }, h('h3', null, 'Preferences'), h('div', { class: 'grid cols2' }, lbl('Currency code', cur), lbl('Number format (locale)', loc), lbl('Reading dates on bills', order), lbl('Scan language', langs)), h('div', { style: 'margin-top:14px' }, saveS)),
      catPanel('expense', 'Expense categories'), catPanel('income', 'Income categories'),
      h('section', { class: 'panel' }, h('h3', null, 'Data'), h('p', { class: 'muted small' }, `Stored in the private repo ${st.store.owner}/${st.store.repo} (data/db.json and receipts/). Every change is a git commit, so history is your undo.`),
        h('div', { class: 'row' }, reload, h('button', { class: 'btn', onclick: () => download(`ledger-backup-${today()}.json`, JSON.stringify(db(), null, 1), 'application/json') }, 'Download backup'), h('button', { class: 'btn', onclick: lock }, 'Lock'),
          h('button', { class: 'btn danger', onclick: () => { if (confirm('Remove the saved login from this browser? Your data in GitHub is not touched.')) { try { localStorage.removeItem(LS_KEY); } catch {} lock(); } } }, 'Forget this device'))));
  }
  function renameCat(type, from) {
    const to = (prompt(`Rename “${from}” to:`, from) || '').trim();
    if (!to || to === from) return;
    if (db().categories[type].some((c) => c.toLowerCase() === to.toLowerCase() && c !== from)) return toast('That name already exists.', true);
    run(null, async () => {
      await st.store.mutate((d) => { d.categories[type] = d.categories[type].map((c) => (c === from ? to : c)); d.transactions.forEach((t) => { if (t.type === type && t.category === from) t.category = to; }); }, 'Rename category');
      toast('Renamed.'); renderShell();
    });
  }

  boot();
})();

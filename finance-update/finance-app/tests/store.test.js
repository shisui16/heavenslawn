const assert = require('assert');
const { Store, serialize, DEFAULT_DB } = require('../fin/store.js');
const Vault = require('../fin/vault.js');
const Calc = require('../fin/calc.js');
const Parser = require('../fin/parser.js');
const { makeFakeGitHub } = require('./fake-github.js');
let n = 0; const T = async (name, fn) => { await fn(); n++; console.log('ok -', name); };
const mk = (gh, o = {}) => new Store({ token: 'good-token', owner: 'me', repo: 'finance-data', fetchImpl: gh.fetch, ...o });
const tx = (o) => ({ type: 'expense', date: '2026-10-01', vendor: 'V', amount: 10, category: 'food', status: 'paid', ...o });

(async () => {
  await T('vault round-trip and wrong passphrase', async () => {
    const s = await Vault.seal({ token: 'abc', owner: 'me' }, 'correct horse');
    assert.ok(!s.includes('abc'));
    assert.deepStrictEqual(await Vault.open(s, 'correct horse'), { token: 'abc', owner: 'me' });
    await assert.rejects(Vault.open(s, 'nope'), /Wrong passphrase/);
  });
  await T('connect creates db.json on an empty repo; reload sees it', async () => {
    const gh = makeFakeGitHub(); const s = mk(gh); await s.connect();
    assert.ok(gh.files.has('data/db.json')); assert.strictEqual(s.db.categories.income.length, 5);
  });
  await T('refuses public repos, read-only tokens, bad tokens, missing repos', async () => {
    await assert.rejects(mk(makeFakeGitHub({ isPrivate: false })).connect(), /public/);
    await assert.rejects(mk(makeFakeGitHub({ push: false })).connect(), /read/);
    await assert.rejects(mk(makeFakeGitHub(), { token: 'bad' }).connect(), /rejected the token/);
    await assert.rejects(mk(makeFakeGitHub(), { repo: 'other' }).connect(), /not found/i);
  });
  await T('add / update / delete persist and are diff-friendly', async () => {
    const gh = makeFakeGitHub(); const s = mk(gh); await s.connect();
    const [a] = await s.addTransactions([tx({ vendor: 'Tastys' }), tx({ vendor: 'Jio' })]);
    await s.updateTransaction(a.id, { amount: 99 });
    const s2 = mk(gh); await s2.connect();
    assert.strictEqual(s2.db.transactions.length, 2); assert.strictEqual(s2.db.transactions.find((t) => t.id === a.id).amount, 99);
    await s2.deleteTransaction(a.id); assert.strictEqual(s2.db.transactions.length, 1);
    const text = Buffer.from(gh.files.get('data/db.json').bytes).toString();
    assert.strictEqual(text.split('\n').filter((l) => l.startsWith('  {')).length, 1);
  });
  await T('two devices writing at once: nothing lost (conflict retry)', async () => {
    const gh = makeFakeGitHub(); const a = mk(gh), b = mk(gh); await a.connect(); await b.connect();
    await Promise.all([a.addTransactions([tx({ vendor: 'A' })]), b.addTransactions([tx({ vendor: 'B' })]), a.addTransactions([tx({ vendor: 'A2' })])]);
    const c = mk(gh); await c.connect();
    assert.deepStrictEqual(c.db.transactions.map((t) => t.vendor).sort(), ['A', 'A2', 'B']);
  });
  await T('receipts upload is idempotent and downloadable', async () => {
    const gh = makeFakeGitHub(); const s = mk(gh); await s.connect();
    const bytes = new Uint8Array([1, 2, 3, 250]);
    const p1 = await s.putReceipt('abc', bytes, 'jpg'); const p2 = await s.putReceipt('abc', bytes, 'jpg');
    assert.strictEqual(p1, 'receipts/abc.jpg'); assert.strictEqual(p1, p2);
    assert.deepStrictEqual([...(await s.getReceipt(p1))], [1, 2, 3, 250]);
  });
  await T('serialize round-trips with special characters', async () => {
    const db = DEFAULT_DB(); db.transactions.push(tx({ vendor: 'Café "Le Gourmet", déjà', notes: 'line\nbreak' }));
    assert.deepStrictEqual(JSON.parse(serialize(db)), db);
  });
  await T('summaries exclude unpaid bills and sum in cents', async () => {
    const s = Calc.summarize([tx({ amount: 0.1 }), tx({ amount: 0.2 }), tx({ amount: 500, status: 'unpaid' }), tx({ type: 'income', amount: 100, category: 'Mom' })]);
    assert.strictEqual(s.expense, 0.3); assert.strictEqual(s.income, 100); assert.strictEqual(s.outstanding, 500); assert.strictEqual(s.net, 99.7);
  });
  await T('CSV export → import round-trip incl. quotes, semicolons, unpaid', async () => {
    const src = [tx({ vendor: 'A, "B"', notes: 'x;y', status: 'unpaid', dueDate: '2026-11-01' }), tx({ type: 'income', category: 'Mom', amount: 1234.5 })];
    const back = Calc.importCSV(Calc.toCSV(src), Parser);
    assert.strictEqual(back.errors.length, 0); assert.strictEqual(back.items[0].vendor, 'A, "B"'); assert.strictEqual(back.items[0].status, 'unpaid');
    assert.strictEqual(back.items[0].dueDate, '2026-11-01'); assert.strictEqual(back.items[1].amount, 1234.5); assert.strictEqual(back.items[1].type, 'income');
    const eu = Calc.importCSV('Date;Montant;Vendor\n05/10/2026;12,50;Lidl\nbad;1;x', Parser);
    assert.strictEqual(eu.items[0].amount, 12.5); assert.strictEqual(eu.items[0].date, '2026-10-05'); assert.strictEqual(eu.errors.length, 1);
  });
  console.log(`\n${n} store/vault/calc tests passed`);
})().catch((e) => { console.error('FAIL', e); process.exit(1); });

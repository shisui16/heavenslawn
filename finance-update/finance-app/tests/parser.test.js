const assert = require('assert');
const P = require('../fin/parser.js');
const cats = { expense: ['Hostel Fees','Mess fees','Mobile Recharge','Stationary','Clothing','Travel Expense','Electronics','Spotify Premium','iCloud+','Flights','iCafe','Cake World','miscellaneous','food','AI','Laundry'], income: [] };
const hist = [{vendor:'Tastys',type:'expense',category:'food'},{vendor:'Jio',type:'expense',category:'Mobile Recharge'},{vendor:'Jio',type:'expense',category:'Mobile Recharge'}];
let n = 0; const t = (name, fn) => { fn(); n++; console.log('ok -', name); };
const year = new Date().getFullYear();

t('amount formats', () => {
  const c = { '1,234.56':1234.56, '1.234,56':1234.56, '1 234,56':1234.56, '45,50':45.5, '1,23,456.00':123456, '1,234':1234, '12.5':12.5, '₹ 2,040':2040, '1.234.567':1234567, '0':0, 'abc':0 };
  for (const [k,v] of Object.entries(c)) assert.strictEqual(P.parseAmount(k), v, k);
});
t('date formats + disambiguation', () => {
  assert.strictEqual(P.parseDateLoose('05-10-2026','dmy'), '2026-10-05');
  assert.strictEqual(P.parseDateLoose('05-10-2026','mdy'), '2026-05-10');
  assert.strictEqual(P.parseDateLoose('25/12/2025','mdy'), '2025-12-25');
  assert.strictEqual(P.parseDateLoose('12/25/2025','dmy'), '2025-12-25');
  assert.strictEqual(P.parseDateLoose('2024-04-01'), '2024-04-01');
  assert.strictEqual(P.parseDateLoose('1 Apr 2024'), '2024-04-01');
  assert.strictEqual(P.parseDateLoose('Apr 1, 2024'), '2024-04-01');
  assert.strictEqual(P.parseDateLoose('3 février 2025'), '2025-02-03');
  assert.strictEqual(P.parseDateLoose('31/02/2025'), '');
  assert.strictEqual(P.parseDateLoose('5/10/26'), '2026-10-05');
});
t('English utility bill with due date', () => {
  const text = `Jio Prepaid Services\nInvoice Date: 02/10/${year}\nDue Date: 20/10/${year}\nPlan charge 299.00\nGST 18% 53.82\nTotal Amount Due ₹ 352.82\nThank you`;
  const r = P.parseReceipt(text, { categories: cats, history: hist });
  assert.strictEqual(r.amount, 352.82); assert.strictEqual(r.date, `${year}-10-02`); assert.strictEqual(r.dueDate, `${year}-10-20`);
  assert.strictEqual(r.vendor, 'Jio'); assert.strictEqual(r.category, 'Mobile Recharge');
});
t('French supermarket receipt, comma decimals', () => {
  const text = `CARREFOUR MARKET\n12 Rue de la Gare\nSTRASBOURG\n05/10/${year}\nPain 2,50\nLait 1,80\nSOUS-TOTAL 4,30\nTVA 5,5% 0,22\nTOTAL TTC 4,30\nCB 4,30`;
  const r = P.parseReceipt(text, { categories: cats });
  assert.strictEqual(r.amount, 4.3); assert.strictEqual(r.date, `${year}-10-05`); assert.strictEqual(r.vendor, 'Carrefour Market');
});
t('French facture: net à payer + échéance', () => {
  const text = `EDF Facture\nDate de facture : 3 septembre ${year}\nDate limite de paiement : 28 septembre ${year}\nNet à payer\n87,45 €`;
  const r = P.parseReceipt(text, { categories: cats });
  assert.strictEqual(r.amount, 87.45); assert.strictEqual(r.dueDate, `${year}-09-28`); assert.strictEqual(r.date, `${year}-09-03`);
});
t('subtotal / tax / change are not picked as total', () => {
  const text = `Cafe Nero\nSubtotal 10.00\nVAT 2.00\nTotal 12.00\nCash 20.00\nChange 8.00`;
  assert.strictEqual(P.parseReceipt(text, { categories: cats }).amount, 12);
});
t('no keyword → largest decimal amount; none → warning', () => {
  assert.strictEqual(P.findAmount('Foo\n3.50\n18.75\nbar').v, 18.75);
  assert.ok(P.parseReceipt('hello world', { categories: cats }).warnings.length >= 2);
});
t('dropped decimal point is flagged', () => {
  const r = P.parseReceipt('SHOP\nBread 2.50\nMilk 1.80\nEggs 3.20\nTOTAL 2040', { categories: cats });
  assert.strictEqual(r.amount, 2040); assert.ok(r.warnings.some((w) => /decimal/i.test(w)));
});
t('keywords + learned vendor categories', () => {
  assert.strictEqual(P.parseReceipt('Spotify AB\nTotal 59.00', { categories: cats }).category, 'Spotify Premium');
  assert.strictEqual(P.parseReceipt('Tastys\nTotal 300', { categories: cats, history: hist }).category, 'food');
  assert.strictEqual(P.parseReceipt('Random Shop\nTotal 300', { categories: cats }).category, 'miscellaneous');
  assert.strictEqual(P.parseReceipt('IndiGo airlines\nTotal 4500.00', { categories: cats }).category, 'Flights');
});
t('phone numbers/GST ids are not vendors', () => {
  assert.strictEqual(P.findVendor('Tel: 0388 12 34\nGSTIN 22AAAAA\nBlue Bottle\nTotal 5').vendor, 'Blue Bottle');
});

const sum = (rows) => Math.round(rows.reduce((a, r) => a + r.amount * 100, 0));
t('supermarket (France): prices include TVA → items split, tax carved out, total preserved', () => {
  const text = `CARREFOUR MARKET\n05/10/${year}\nPain 2,50\nLait 1,80\nChocolat noir 3,20\nLessive Ariel 12,90\nSOUS-TOTAL 20,40\nTVA 5,5% 0,35\nTVA 20% 1,49\nTOTAL TTC 20,40\nCB 20,40`;
  const r = P.parseReceipt(text, { categories: { expense: [...cats.expense, 'Snacks'], income: [] } });
  assert.deepStrictEqual(r.items.map((i) => i.name), ['Pain', 'Lait', 'Chocolat noir', 'Lessive Ariel']);
  assert.strictEqual(r.tax, 1.84); assert.strictEqual(r.amount, 20.4); assert.strictEqual(r.splitMode, 'included');
  assert.deepStrictEqual(r.items.map((i) => i.category), ['food', 'food', 'Snacks', 'Laundry']);
  const sp = P.buildSplit({ items: r.items, tax: r.tax, mode: r.splitMode });
  assert.strictEqual(sp.cents, 2040); assert.strictEqual(sp.rows.at(-1).amount, 1.84); assert.strictEqual(sp.rows.length, 5);
});
t('supermarket (India): GST added on top, qty line, discount line', () => {
  const text = `D-MART\nDate: 05/10/${year}\nRice 5kg 320.00\nMilk 2 x 27.00 54.00\nSoap 45.00\nDiscount -10.00\nSubtotal 409.00\nCGST 2.5% 10.23\nSGST 2.5% 10.23\nTotal 429.46`;
  const r = P.parseReceipt(text, { categories: cats });
  assert.deepStrictEqual(r.items.map((i) => [i.name, i.amount]), [['Rice 5kg', 320], ['Milk', 54], ['Soap', 45], ['Discount', -10]]);
  assert.strictEqual(r.tax, 20.46); assert.strictEqual(r.splitMode, 'added');
  assert.strictEqual(P.buildSplit({ items: r.items, tax: r.tax, mode: 'added' }).cents, 42946);
});
t('allocation is exact to the cent for awkward numbers', () => {
  for (const tax of [0.01, 1.84, 3.33, 7.77]) {
    const items = [1.11, 2.22, 3.33, 4.44, 5.55, 0.07].map((a, i) => ({ name: 'i' + i, amount: a }));
    const total = Math.round(items.reduce((a, i) => a + i.amount * 100, 0));
    const sp = P.buildSplit({ items, tax, mode: 'included' });
    assert.strictEqual(sp.cents, total); assert.ok(sp.rows.every((r) => r.amount >= 0));
  }
});
t('learned item categories beat keywords; unknown items fall back to the store category', () => {
  const h2 = [{ type: 'expense', item: 'Maggi', category: 'Snacks' }];
  const r = P.parseItems('Shop\nMaggi 14.00\nMystery Thing 9.50\nTOTAL 23.50', { categories: { expense: ['Snacks', 'food', 'miscellaneous'] }, history: h2, fallbackCategory: 'food' });
  assert.deepStrictEqual(r.items.map((i) => i.category), ['Snacks', 'food']);
});
t('totals lines, addresses and card slips are not items; no tax → 0', () => {
  const r = P.parseItems('Cafe X\n12 Rue de la Gare\nCoffee 3.50\nCake 4.20\nTOTAL 7.70\nCB 7.70', { categories: cats });
  assert.deepStrictEqual(r.items.map((i) => i.name), ['Coffee', 'Cake']); assert.strictEqual(r.tax, 0);
});
t('"incl. VAT" on the total line is not mistaken for tax', () => {
  assert.strictEqual(P.parseItems('S\nA 5.00\nB 6.00\nTotal incl. VAT 11.00', { categories: cats }).tax, 0);
});
console.log(`\n${n} parser tests passed`);

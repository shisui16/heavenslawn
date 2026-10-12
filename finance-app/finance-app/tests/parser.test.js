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
console.log(`\n${n} parser tests passed`);

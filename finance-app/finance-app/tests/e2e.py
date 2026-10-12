import os, re, sys, json, subprocess, time
from playwright.sync_api import sync_playwright, expect
os.environ['PLAYWRIGHT_BROWSERS_PATH'] = '/opt/pw-browsers'
ROOT = os.path.dirname(os.path.abspath(__file__)); APP = os.path.dirname(ROOT)
srv = subprocess.Popen([sys.executable, '-m', 'http.server', '8765', '-d', os.path.join(APP, 'fin')], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
time.sleep(1)
errors = []; steps = 0
def ok(msg):
    global steps; steps += 1; print('ok -', msg)
FAKE_TESS = "window.Tesseract={createWorker:async()=>({recognize:async()=>({data:{text:window.__OCR_TEXT||''}}),terminate(){}})};"
BILL = "Jio Prepaid Services\nInvoice Date: 02/10/2026\nDue Date: 20/10/2026\nPlan charge 299.00\nGST 18% 53.82\nTotal Amount Due 352.82\n"
try:
    with sync_playwright() as p:
        br = p.chromium.launch()
        ctx = br.new_context(viewport={'width': 1100, 'height': 900}); page = ctx.new_page()
        page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)
        page.on('pageerror', lambda e: errors.append(str(e)))
        ctx.add_init_script(path=os.path.join(ROOT, 'fake-github-browser.js'))
        ctx.route('**/tesseract.min.js', lambda r: r.fulfill(body=FAKE_TESS, content_type='application/javascript'))
        page.goto('http://localhost:8765/index.html')

        # --- setup rejects a bad token, accepts a good one
        page.fill('input[placeholder="your GitHub username"]', 'me')
        page.locator('input[type=password]').nth(0).fill('wrong'); page.locator('input[type=password]').nth(1).fill('passphrase1'); page.locator('input[type=password]').nth(2).fill('passphrase1')
        page.click('button:text-is("Connect")'); expect(page.locator('#toast')).to_contain_text('rejected the token'); ok('bad token rejected with a clear message')
        page.locator('input[type=password]').nth(0).fill('good-token'); page.click('button:text-is("Connect")')
        expect(page.locator('nav.tabs')).to_be_visible(); ok('setup connects, creates data/db.json')
        assert 'data/db.json' in page.evaluate('[...window.__gh.files.keys()]')
        assert 'good-token' not in page.evaluate('localStorage.getItem("fin.vault.v1")'); ok('token is not stored in plain text')

        # --- import the seed CSV
        page.click('nav.tabs >> text=Ledger')
        page.set_input_files('input[type=file][accept=".csv,text/csv"]', os.path.join(APP, 'seed', 'history-from-spreadsheet.csv'))
        expect(page.locator('#dlg')).to_contain_text('120 to import'); page.click('#dlg button:text-is("Import")')
        expect(page.locator('#main')).to_contain_text('120 entries'); ok('imported 120 rows from spreadsheet CSV')
        page.set_input_files('input[type=file][accept=".csv,text/csv"]', os.path.join(APP, 'seed', 'history-from-spreadsheet.csv'))
        expect(page.locator('#dlg')).to_contain_text('0 to import, 120 already'); page.click('#dlg button:text-is("Cancel")'); ok('re-import is idempotent (no duplicates)')

        # --- insights
        page.click('nav.tabs >> text=Insights'); page.select_option('#main select', 'all')
        expect(page.locator('.kpis')).to_contain_text('25,434.82'); expect(page.locator('.kpis')).to_contain_text('16,535'); ok('insights totals match the spreadsheet')
        expect(page.locator('svg.chart')).to_be_visible(); page.screenshot(path='/tmp/shot-insights.png', full_page=True)
        page.locator('.bar', has_text='iCafe').click(); expect(page.locator('#main')).to_contain_text('34 entries'); ok('category bar drills into the ledger')

        # --- scan a bill (image → stubbed OCR → parser → draft → save as unpaid)
        from PIL import Image; Image.new('RGB', (400, 300), 'white').save('/tmp/bill.png')
        page.evaluate('window.__OCR_TEXT=' + json.dumps(BILL))
        page.click('nav.tabs >> text=Add'); page.set_input_files('.drop input[type=file]', '/tmp/bill.png')
        card = page.locator('.draft'); expect(card.locator('input[type=number]')).to_have_value('352.82', timeout=10000)
        expect(card.locator('select').nth(0)).to_have_value('Mobile Recharge'); expect(card.locator('input[type=date]').nth(0)).to_have_value('2026-10-02')
        expect(card.locator('input[type=date]').nth(1)).to_have_value('2026-10-20'); expect(card.locator('input[list=vendors]')).to_have_value('Jio')
        ok('scan → draft: vendor, amount, dates, learned category, due date all filled'); page.screenshot(path='/tmp/shot-draft.png', full_page=True)
        card.locator('button:text-is("Save")').click(); expect(page.locator('nav.tabs .badge')).to_have_text('1'); ok('draft saved as unpaid bill (badge shows 1)')
        assert any(k.startswith('receipts/') for k in page.evaluate('[...window.__gh.files.keys()]')); ok('receipt image uploaded to receipts/')

        # --- bills tab, receipt viewer, mark paid
        page.click('nav.tabs >> text=Bills'); expect(page.locator('.bill')).to_have_count(1); expect(page.locator('.bill')).to_contain_text('Jio')
        page.screenshot(path='/tmp/shot-bills.png', full_page=True)
        page.click('.bill button:text-is("Receipt")'); expect(page.locator('#dlg img')).to_be_visible(); page.click('#dlg button:text-is("Close")'); ok('receipt opens from the repo')
        page.click('.bill button:text-is("Mark paid")'); page.click('#dlg button:text-is("Mark paid")')
        expect(page.locator('#main')).to_contain_text('Nothing unpaid'); ok('mark paid moves it out of Bills')

        # --- manual entry + validation
        page.click('nav.tabs >> text=Add'); page.click('button:text-is("Save entry")'); expect(page.locator('#toast')).to_contain_text('store or vendor'); ok('manual form validates')
        page.locator('section:has-text("Add by hand") input[list=vendors]').fill('Lidl'); page.locator('section:has-text("Add by hand") input[type=number]').fill('12.5')
        page.click('button:text-is("Save entry")'); expect(page.locator('#toast')).to_contain_text('Saved'); ok('manual entry saved')

        # --- lock / unlock
        page.click('button:text-is("Lock")'); page.fill('input[type=password]', 'nope'); page.click('button:has-text("Unlock")')
        expect(page.locator('#toast')).to_contain_text('Wrong passphrase'); page.fill('input[type=password]', 'passphrase1'); page.click('button:has-text("Unlock")')
        expect(page.locator('nav.tabs')).to_be_visible(); ok('lock/unlock with passphrase')
        page.click('nav.tabs >> text=Ledger'); page.click('button:text-is("Clear filters")'); expect(page.locator('#main')).to_contain_text('122 entries'); ok('data persisted: 120 + scanned + manual = 122')
        db = json.loads(bytes(page.evaluate('[...window.__gh.files.get("data/db.json").bytes]')).decode()); assert len(db['transactions']) == 122
        jio = [t for t in db['transactions'] if t['vendor'] == 'Jio' and t['amount'] == 352.82][0]
        assert jio['status'] == 'paid' and jio['billDate'] == '2026-10-02' and jio['dueDate'] == '2026-10-20' and jio['receipt'].startswith('receipts/'); ok('stored record is correct')

        # --- settings
        page.click('nav.tabs >> text=Settings'); page.screenshot(path='/tmp/shot-settings.png', full_page=True)
        # --- mobile layout
        m = br.new_context(viewport={'width': 390, 'height': 800}); mp = m.new_page(); m.add_init_script(path=os.path.join(ROOT, 'fake-github-browser.js'))
        mp.goto('http://localhost:8765/index.html'); mp.screenshot(path='/tmp/shot-mobile-setup.png')
        sw = mp.evaluate('document.documentElement.scrollWidth'); assert sw <= 392, sw; ok('mobile: no horizontal overflow on setup')
        br.close()
finally:
    srv.terminate()
bad = [e for e in errors if 'api.github.com' not in e and '401' not in e and '409' not in e]
print('console errors:', bad); print(f'\n{steps} e2e checks passed' if not bad else 'FAILED'); sys.exit(1 if bad else 0)

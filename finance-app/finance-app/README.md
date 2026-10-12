# Ledger — personal finance on your own website, with GitHub as the backend

No VPS, no database server, no monthly bill. The page is plain static files; your data lives in a
**private GitHub repo** that the page reads and writes through GitHub's API.

```
 sarthakthorat.com/fin/           private repo "finance-data"
 ┌──────────────────────┐  API   ┌───────────────────────────┐
 │ static HTML + JS     │ ─────▶ │ data/db.json   (all rows) │
 │ OCR runs in browser  │        │ receipts/*.jpg|pdf        │
 └──────────────────────┘        └───────────────────────────┘
```

* **Scan** photos or PDFs (many at once) → text is read **in your browser** (digital PDFs use their exact
  text layer; photos use Tesseract OCR) → a parser fills date, vendor, total, due date and a suggested
  category → you check and save. Your bills are never sent to a third-party service.
* **Bills** tab tracks unpaid bills by due date (overdue / due soon). *Mark paid* moves spending to the day you paid.
* **Ledger** tab: search, filter, edit, delete, CSV export/import. **Insights** tab: category breakdown,
  month-by-month income vs spending, top vendors, any date range. Click a category to see its entries.
* It learns: a vendor you've categorised before gets the same category next time.
* Every change is a git commit in the private repo, so history is your undo and your backup.

## One-time setup (about 10 minutes)

**1. Create the data repo.** GitHub → New repository → name `finance-data` → **Private** → tick
"Add a README file" → Create. (The app refuses to run against a public repo.)

**2. Create an access token for only that repo.** GitHub → Settings → Developer settings →
Personal access tokens → **Fine-grained tokens** → Generate new token:
* Repository access: **Only select repositories** → `finance-data`
* Permissions → Repository permissions → **Contents: Read and write** (Metadata: Read is added automatically)
* Expiration: up to a year. Put a reminder in your calendar; when it expires, make a new one and use
  *Forget this device* in Settings.

Copy the token (`github_pat_…`) — GitHub shows it once.

**3. Put the page on your site.** Copy the `fin/` folder into the repository that serves
sarthakthorat.com (GitHub Pages, Netlify and Vercel all just serve it as static files). Commit and push.
The page is then at `https://sarthakthorat.com/fin/`. Don't link to it from anywhere. It has
`noindex` set, but see *Security* below: the privacy comes from the token, not from the hidden URL.

**4. First run.** Open `/fin/`, enter your GitHub username, `finance-data`, the token, and choose a
passphrase (min 8 characters). The passphrase encrypts the token in that browser; you type it each visit.
Repeat on your phone with the same token — both devices share the same data.

**5. Bring in your spreadsheet history.** Ledger → *Import CSV* → pick `seed/history-from-spreadsheet.csv`
(120 rows from your Finance.xlsx: 106 expenses = 25,434.82, 14 income = 16,535). Re-importing is safe:
rows already present are skipped.

## Daily use
* **Add → Scan**: drop one or many bills. Check each card (the amount especially), pick *Unpaid bill*
  if it still needs paying, **Save**. The original is kept in `receipts/`.
* A bill with a due date is pre-set to *Unpaid*; a till receipt with no due date is pre-set to *Paid*.
* **Bills → Mark paid** when you pay.

## Things to know
* **Currency** defaults to INR (₹) because your sheet's numbers look like rupees. Change currency,
  number format and day/month order in Settings. For French bills choose *English + French* scan language.
* **OCR is not perfect.** Phone photos: flat, well lit, fill the frame. The app warns when a total looks
  like it lost its decimal point, and "What the scanner read" shows the raw text. Always eyeball the
  amount. Digital PDFs (e-bills from Jio, EDF, etc.) are read exactly.
* **First scan** downloads the reader (a few MB from jsDelivr / cdnjs) and caches it. Needs internet.
* Deleting an entry doesn't delete its receipt file (it stays in git history).
* Two devices editing at once is handled (automatic retry), but this is a single-user tool.
* GitHub API limit is 5,000 requests/hour, far beyond personal use. `db.json` stays comfortably
  fast into tens of thousands of rows.

## Security — honest version
* A hidden URL is **not** security. Anyone who finds `/fin/` sees only a login box and gets nothing
  without your GitHub token.
* What protects your data: the **private repo**, a token limited to **that one repo**, and the token being
  stored **encrypted** (AES-GCM, key from your passphrase via PBKDF2, 310k iterations) in the browser.
  The page auto-locks after 15 idle minutes.
* The site code is public if your site repo is; it contains no secrets. **Never commit finance data to the
  site repo.**
* Lost a phone/laptop? Revoke the token in GitHub (Developer settings) — all devices stop working until
  you create a new one.
* Use it on devices you trust; anyone with the device *and* your passphrase can open it.

## Tests
`node tests/parser.test.js` and `node tests/store.test.js` (parser, encryption, GitHub store incl. two-device
conflicts, CSV, totals). `python3 tests/e2e.py` drives the real UI in headless Chromium against a fake
GitHub (needs `pip install playwright`).

## Files
```
fin/index.html      page shell          fin/vault.js   passphrase encryption of the token
fin/app.js          all UI              fin/store.js   GitHub-backed storage (db.json + receipts)
fin/parser.js       text → date/vendor/total/category    fin/scan.js   PDF text + OCR (lazy-loaded)
fin/calc.js         totals, filters, CSV                 fin/style.css
seed/history-from-spreadsheet.csv   your 120 existing rows
```

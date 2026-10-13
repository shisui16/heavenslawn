# Update v2 — split supermarket bills into items + tax

## What's new
* Scanning a bill with several products now finds each line item, suggests a category per item, and
  finds the tax. The card shows an editable table: item · price on bill · category · recorded amount.
* **Tax becomes its own category ("Tax")**, so Insights shows *Tax paid* for any period.
* Two tax modes (auto-detected, you can flip it):
  * *Item prices already include tax* (France, Indian MRP): the tax is carved out of the items in
    proportion to their price, so items + Tax still equal what you paid.
  * *Tax is added on top*: items stay as printed and the tax is a separate entry.
* **It refuses to save if items + tax don't equal the bill total**, and offers "Add difference as a row"
  (for rounding, unreadable lines, etc.).
* A split bill saves as several entries linked by a hidden `group` id with one shared receipt. An unpaid
  split bill shows as **one** bill in the Bills tab and is paid in one click.
* Item names are searchable in the Ledger and appear under the store name. Items you've categorised
  before are remembered ("Maggi → Snacks" next time).
* Your data format is unchanged except two optional new fields (`item`, `group`). Existing entries are
  untouched, and the old version still opens the same data.

## Which files changed (replace these 5; leave the rest)
`index.html`  `app.js`  `calc.js`  `parser.js`  `style.css`
Unchanged: `store.js`, `scan.js`, `vault.js`.  (`index.html` only gained `?v=2` on each file so browsers
don't mix old and new code.)

## Safe rollout — your live /fin/ is not touched until step 4
**1. Stage it at a second URL.** In your website repo, create a folder `fin-next/` and put the *whole*
new `fin/` folder contents in it (from `fin-update-v2.zip`, which contains all 8 files). Commit and push
as you normally do. Live app: `/fin/` (still old). New app: `/fin-next/`.

**2. Test it.** Open `/fin-next/`. It's the same site, so it reuses your saved login — just enter your
passphrase. It reads and writes the *same* data, so test with care:
* Scan one real supermarket bill. Check the table, tweak anything, Save.
* Look at it in Ledger and in Insights → *Tax paid*.
* Happy? Keep it. Not happy? Click the entry's *Edit → Delete* on each row (every change is also a git
  commit in `finance-data`, so nothing is ever truly lost).
* Don't use *Forget this device* while testing — both URLs share the same saved login.

**3. (Optional) Compare.** Open `/fin/` in another tab: it still works exactly as before.

**4. Go live.** Copy the 5 changed files from `fin-next/` into `fin/` (overwrite), delete `fin-next/`,
commit, push. Hard-refresh the page once (Ctrl/Cmd+Shift+R; on a phone, close and reopen the tab).

**Rollback:** in the site repo run `git revert <the commit from step 4>` and push. Data written by v2 stays
valid: v1 shows split items as ordinary entries (without the item name).

## Honest limits
* Reading a long receipt photo is the hard part: crumpled/curved paper, small print and abbreviations
  ("CHOC NR 70%") can scramble lines. That's why the table is editable and the total check is enforced.
  Digital PDF bills are read exactly.
* When prices include tax, items carry different rates in reality (5.5% food vs 20% other in France). The
  carve-out is proportional, so *total tax is exact*, but the tax inside each individual item is approximate.
* Integer-priced items with no decimals (some Indian bills) may not be picked up; use *Add row*.
* Test the split with your real bills before relying on it. The parser is tested on synthetic English/French/
  Indian formats, not on every shop's layout.

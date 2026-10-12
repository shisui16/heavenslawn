/* store.js — GitHub-backed storage. One JSON file (data/db.json) + receipts/ in a PRIVATE repo,
   read and written through the GitHub Contents API straight from the browser. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else (root.Fin = root.Fin || {}).Store = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  const API = 'https://api.github.com';
  const DB_PATH = 'data/db.json';

  const DEFAULT_DB = () => ({
    version: 1,
    settings: { currency: 'INR', locale: 'en-IN', dateOrder: 'dmy', ocrLangs: 'eng' },
    categories: {
      expense: ['Hostel Fees', 'Mess fees', 'Debt', 'Mobile Recharge', 'Stationary', 'Clothing', 'Laundry', 'Snacks',
        'Orbiton Labs Maintenance', 'Travel Expense', 'Electronics', 'Amazon Prime', 'iCloud+', 'Spotify Premium',
        'Clubs Miscellaneous', 'Friends', 'Love', 'Flights', 'Tastys', 'Ankita', 'iCafe', 'Cake World', 'unidentified',
        'miscellaneous', 'south cafe', 'food', 'AI'],
      income: ['Mom', 'Side project', 'Part-time job', 'Expense reimbursement', 'payback'],
    },
    transactions: [],
  });

  class GitHubError extends Error {
    constructor(status, message, conflict = false) { super(message); this.status = status; this.conflict = conflict; }
  }

  function bytesToB64(bytes) {
    let s = ''; const CH = 0x8000;
    for (let i = 0; i < bytes.length; i += CH) s += String.fromCharCode.apply(null, bytes.subarray(i, i + CH));
    return btoa(s);
  }
  function b64ToBytes(b64) {
    const s = atob(b64.replace(/\s/g, '')); const out = new Uint8Array(s.length);
    for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i);
    return out;
  }
  const encPath = (p) => p.split('/').map(encodeURIComponent).join('/');

  /** Keep the file diff-friendly: one transaction per line. */
  function serialize(db) {
    const { transactions, ...rest } = db;
    const head = JSON.stringify(rest, null, 1).replace(/\n}$/, '');
    return head + ',\n "transactions": [\n' + transactions.map((t) => '  ' + JSON.stringify(t)).join(',\n') + '\n ]\n}\n';
  }
  function normalize(db) {
    const d = DEFAULT_DB();
    return {
      version: 1,
      settings: { ...d.settings, ...(db.settings || {}) },
      categories: { expense: (db.categories && db.categories.expense) || d.categories.expense, income: (db.categories && db.categories.income) || d.categories.income },
      transactions: Array.isArray(db.transactions) ? db.transactions : [],
    };
  }
  const newId = () => (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : 'id-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10));

  class Store {
    constructor({ token, owner, repo, fetchImpl }) {
      this.token = token; this.owner = owner; this.repo = repo;
      this.f = fetchImpl || ((...a) => fetch(...a));
      this.branch = null; this.sha = null; this.db = null; this.queue = Promise.resolve();
    }
    get repoPath() { return `/repos/${encodeURIComponent(this.owner)}/${encodeURIComponent(this.repo)}`; }

    async _req(method, path, { body, accept } = {}) {
      let res;
      try {
        res = await this.f(API + path, {
          method, cache: 'no-store',
          headers: { Authorization: `Bearer ${this.token}`, Accept: accept || 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28', ...(body ? { 'Content-Type': 'application/json' } : {}) },
          body: body ? JSON.stringify(body) : undefined,
        });
      } catch (e) { throw new GitHubError(0, 'Could not reach GitHub. Check your connection and try again.'); }
      return res;
    }
    async _fail(res) {
      let msg = ''; try { msg = (await res.json()).message || ''; } catch { /* ignore */ }
      if (res.status === 401) return new GitHubError(401, 'GitHub rejected the token. It may have expired — make a new one and reset this device.');
      if (res.status === 403) return new GitHubError(403, /rate limit/i.test(msg) ? 'GitHub rate limit hit. Wait a few minutes.' : 'The token is not allowed to do that. It needs Contents: read and write on this repo.');
      const conflict = res.status === 409 || (res.status === 422 && /sha/i.test(msg));
      return new GitHubError(res.status, msg || `GitHub error ${res.status}`, conflict);
    }

    /** Verify repo access, refuse public repos, pick the default branch, load (or create) the database. */
    async connect() {
      const res = await this._req('GET', this.repoPath);
      if (res.status === 401) throw await this._fail(res);
      if (res.status === 404) throw new GitHubError(404, 'Repository not found, or the token has no access to it. Check the owner, repo name, and that the token is granted this repo.');
      if (!res.ok) throw await this._fail(res);
      const info = await res.json();
      if (!info.private) throw new GitHubError(0, 'That repository is public. Finance data must live in a private repository — make it private first.');
      if (info.permissions && info.permissions.push === false) throw new GitHubError(403, 'The token can only read this repo. It needs Contents: read and write.');
      this.branch = info.default_branch || 'main';
      await this._refresh(true);
      return info;
    }

    async _getFile(path) {
      const url = `${this.repoPath}/contents/${encPath(path)}?ref=${encodeURIComponent(this.branch)}`;
      const res = await this._req('GET', url);
      if (res.status === 404) return null;
      if (!res.ok) throw await this._fail(res);
      const j = await res.json();
      if (j.content && j.encoding === 'base64') return { sha: j.sha, bytes: b64ToBytes(j.content) };
      const raw = await this._req('GET', url, { accept: 'application/vnd.github.raw+json' });
      if (!raw.ok) throw await this._fail(raw);
      return { sha: j.sha, bytes: new Uint8Array(await raw.arrayBuffer()) };
    }
    async _put(path, bytes, sha, message) {
      const body = { message, content: bytesToB64(bytes), branch: this.branch };
      if (sha) body.sha = sha;
      const res = await this._req('PUT', `${this.repoPath}/contents/${encPath(path)}`, { body });
      if (!res.ok) throw await this._fail(res);
      return (await res.json()).content.sha;
    }

    async _refresh(createIfMissing = false) {
      const file = await this._getFile(DB_PATH);
      if (!file) {
        this.db = DEFAULT_DB(); this.sha = null;
        if (createIfMissing) this.sha = await this._put(DB_PATH, new TextEncoder().encode(serialize(this.db)), null, 'Initialise finance database');
        return;
      }
      let parsed;
      try { parsed = JSON.parse(new TextDecoder().decode(file.bytes)); }
      catch { throw new GitHubError(0, `${DB_PATH} in the repo is not valid JSON. Fix or restore it from git history.`); }
      this.db = normalize(parsed); this.sha = file.sha;
    }

    /** Apply fn(db) to the newest copy and commit. Retries on write conflicts (e.g. two devices at once). */
    mutate(fn, message = 'Update finances') {
      const run = async () => {
        for (let attempt = 0; ; attempt++) {
          if (attempt > 0) await this._refresh();
          const next = JSON.parse(JSON.stringify(this.db));
          const result = fn(next);
          try {
            this.sha = await this._put(DB_PATH, new TextEncoder().encode(serialize(next)), this.sha, message);
            this.db = next;
            return result;
          } catch (e) { if (!(e.conflict && attempt < 3)) throw e; }
        }
      };
      const p = this.queue.then(run);
      this.queue = p.catch(() => {});
      return p;
    }
    reload() { return this.queue.then(() => this._refresh()); }

    addTransactions(list, message) {
      const stamped = list.map((t) => ({ ...t, id: t.id || newId(), createdAt: new Date().toISOString() }));
      return this.mutate((db) => { db.transactions.push(...stamped); return stamped; }, message || `Add ${stamped.length} transaction${stamped.length === 1 ? '' : 's'}`);
    }
    updateTransaction(id, patch) {
      return this.mutate((db) => {
        const t = db.transactions.find((x) => x.id === id);
        if (!t) throw new Error('That entry no longer exists.');
        Object.assign(t, patch, { updatedAt: new Date().toISOString() });
        return t;
      }, 'Edit transaction');
    }
    deleteTransaction(id) {
      return this.mutate((db) => { db.transactions = db.transactions.filter((x) => x.id !== id); }, 'Delete transaction');
    }

    async putReceipt(id, bytes, ext) {
      const path = `receipts/${id}.${ext}`;
      try { await this._put(path, bytes, null, 'Add receipt'); }
      catch (e) { if (!e.conflict) throw e; /* already uploaded on an earlier attempt */ }
      return path;
    }
    async getReceipt(path) {
      const res = await this._req('GET', `${this.repoPath}/contents/${encPath(path)}?ref=${encodeURIComponent(this.branch)}`, { accept: 'application/vnd.github.raw+json' });
      if (!res.ok) throw await this._fail(res);
      return new Uint8Array(await res.arrayBuffer());
    }
  }

  return { Store, GitHubError, DEFAULT_DB, serialize, normalize, newId, bytesToB64 };
});

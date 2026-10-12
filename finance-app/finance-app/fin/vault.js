/* vault.js — encrypts the GitHub token with a passphrase (PBKDF2 → AES-GCM) before it touches localStorage. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else (root.Fin = root.Fin || {}).Vault = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  const enc = new TextEncoder(), dec = new TextDecoder();
  const toB64 = (buf) => { const b = new Uint8Array(buf); let s = ''; for (const x of b) s += String.fromCharCode(x); return btoa(s); };
  const fromB64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
  const ITER = 310000;

  async function deriveKey(pass, salt, iter) {
    const base = await crypto.subtle.importKey('raw', enc.encode(pass), 'PBKDF2', false, ['deriveKey']);
    return crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: iter, hash: 'SHA-256' }, base,
      { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
  }
  async function seal(obj, pass) {
    const salt = crypto.getRandomValues(new Uint8Array(16)), iv = crypto.getRandomValues(new Uint8Array(12));
    const key = await deriveKey(pass, salt, ITER);
    const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(JSON.stringify(obj)));
    return JSON.stringify({ v: 1, it: ITER, s: toB64(salt), i: toB64(iv), c: toB64(ct) });
  }
  async function open(sealed, pass) {
    let p; try { p = JSON.parse(sealed); } catch { throw new Error('Saved login is corrupted. Reset this device and set up again.'); }
    try {
      const key = await deriveKey(pass, fromB64(p.s), p.it || ITER);
      const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: fromB64(p.i) }, key, fromB64(p.c));
      return JSON.parse(dec.decode(pt));
    } catch { throw new Error('Wrong passphrase.'); }
  }
  return { seal, open };
});

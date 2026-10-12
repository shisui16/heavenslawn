(() => {
  const files = new Map(); let n = 0;
  window.__gh = { files, calls: [] };
  const json = (s, o) => new Response(JSON.stringify(o), { status: s, headers: { 'content-type': 'application/json' } });
  const b64 = (bytes) => { let s = ''; bytes.forEach((b) => (s += String.fromCharCode(b))); return btoa(s); };
  const real = window.fetch.bind(window);
  window.fetch = async (url, opts = {}) => {
    if (!String(url).startsWith('https://api.github.com')) return real(url, opts);
    const u = new URL(url), method = opts.method || 'GET'; window.__gh.calls.push(method + ' ' + u.pathname);
    if (opts.headers.Authorization !== 'Bearer good-token') return json(401, { message: 'Bad credentials' });
    let m = u.pathname.match(/^\/repos\/([^/]+)\/([^/]+)$/);
    if (m) return m[2] === 'finance-data' ? json(200, { private: true, default_branch: 'main', permissions: { push: true } }) : json(404, { message: 'Not Found' });
    m = u.pathname.match(/^\/repos\/[^/]+\/finance-data\/contents\/(.+)$/); if (!m) return json(404, {});
    const path = decodeURIComponent(m[1]);
    if (method === 'GET') {
      const f = files.get(path); if (!f) return json(404, { message: 'Not Found' });
      if (/raw/.test(opts.headers.Accept)) return new Response(f.bytes);
      return json(200, { sha: f.sha, encoding: 'base64', content: b64(f.bytes) });
    }
    const b = JSON.parse(opts.body), cur = files.get(path);
    if (cur && (!b.sha || b.sha !== cur.sha)) return json(409, { message: 'sha mismatch' });
    const bytes = Uint8Array.from(atob(b.content), (c) => c.charCodeAt(0));
    files.set(path, { sha: 'sha' + ++n, bytes }); return json(cur ? 200 : 201, { content: { sha: 'sha' + n } });
  };
})();

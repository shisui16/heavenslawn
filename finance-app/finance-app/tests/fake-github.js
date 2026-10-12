// In-memory stand-in for the GitHub REST endpoints the app uses.
function makeFakeGitHub({ isPrivate = true, push = true } = {}) {
  const files = new Map(); let n = 0; const log = [];
  const sha = () => 'sha' + (++n);
  const json = (status, obj) => new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json' } });
  async function handler(url, opts = {}) {
    const u = new URL(url); const method = opts.method || 'GET'; log.push(method + ' ' + u.pathname);
    if (!/Bearer good-token/.test(opts.headers.Authorization)) return json(401, { message: 'Bad credentials' });
    let m = u.pathname.match(/^\/repos\/([^/]+)\/([^/]+)$/);
    if (m) return m[2] === 'finance-data' ? json(200, { private: isPrivate, default_branch: 'main', permissions: { push } }) : json(404, { message: 'Not Found' });
    m = u.pathname.match(/^\/repos\/[^/]+\/finance-data\/contents\/(.+)$/);
    if (!m) return json(404, { message: 'Not Found' });
    const path = decodeURIComponent(m[1]);
    if (method === 'GET') {
      const f = files.get(path); if (!f) return json(404, { message: 'Not Found' });
      if (/raw/.test(opts.headers.Accept)) return new Response(f.bytes, { status: 200 });
      return json(200, { sha: f.sha, encoding: 'base64', content: Buffer.from(f.bytes).toString('base64').replace(/(.{60})/g, '$1\n') });
    }
    if (method === 'PUT') {
      const b = JSON.parse(opts.body); const cur = files.get(path);
      if (cur && !b.sha) return json(422, { message: '"sha" wasn\'t supplied.' });
      if (cur && b.sha !== cur.sha) return json(409, { message: `${path} does not match ${cur.sha}` });
      if (!cur && b.sha) return json(422, { message: 'Invalid request. sha for a missing file' });
      const f = { sha: sha(), bytes: Buffer.from(b.content, 'base64') }; files.set(path, f);
      return json(cur ? 200 : 201, { content: { sha: f.sha } });
    }
    return json(405, {});
  }
  return { fetch: handler, files, log };
}
module.exports = { makeFakeGitHub };

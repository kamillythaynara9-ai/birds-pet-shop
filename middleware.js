// DERS · Prévia protegida (link que expira)
// Roda na Vercel antes de qualquer arquivo do site: sem link válido, nem a página,
// nem as fotos, nem o vídeo são entregues.
// Link da pessoa: https://SITE/?acesso=CODIGO (gerado no sistema DERS).
// O relógio começa na primeira abertura; quem confere é o Supabase (abrir_link_previa).

const SUPABASE_URL = 'https://shgvmnslmnekmgozfjtc.supabase.co';
const SUPABASE_KEY = 'sb_publishable_LH0JvrC3pToxvJ-wnpLm4Q_Bvu4FDVK'; // chave pública
// Segredo da assinatura do cookie: um diferente em cada repositório (troque ao copiar).
const SEGREDO = '-CSDClFIvsA2xNyNZ4YbVVVVW2fzCYY1N3SsSTAFv-mC';
const TITULO = 'Prévia do site · Bird Pet Shop'; // aparece na prévia do link no WhatsApp
const DESCRICAO = 'Prévia exclusiva preparada pela DERS. Toque para abrir.';
// video.mp4 é o vídeo de venda: o link dele vai na mensagem ao cliente, então fica aberto.
const LIVRES = new Set(['/video.mp4', '/og.jpg', '/favicon.png', '/favicon.ico', '/robots.txt']);
const ROBOS = /whatsapp|facebookexternalhit|facebot|telegrambot|twitterbot|slackbot|discordbot|linkedinbot|skypeuripreview|pinterest|redditbot|applebot|googlebot|bingbot|embedly|vkshare/i;
const COOKIE = 'ders_previa';
// Acesso da dona: entra uma vez com o usuário e a senha do sistema DERS e o site fica liberado
// naquele aparelho, sem tempo e sem marca d'água. Links dos clientes não são gastos por ela.
const DONOS = ['ders2026@ders.com.br'];
const DOMINIO_LOGIN = 'ders.com.br';
const COOKIE_DONA = 'ders_dona';
const DIAS_DONA = 180;

export const config = { matcher: '/:path*' };

function seguir() { return new Response(null, { headers: { 'x-middleware-next': '1' } }); }

const enc = new TextEncoder();
let chave;
async function assinar(txt) {
  chave = chave || await crypto.subtle.importKey('raw', enc.encode((typeof process !== 'undefined' && process.env && process.env.DERS_PREVIA_SEGREDO) || SEGREDO), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const s = new Uint8Array(await crypto.subtle.sign('HMAC', chave, enc.encode(txt)));
  return btoa(String.fromCharCode(...s)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function b64(txt) { return btoa(unescape(encodeURIComponent(txt))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
function deB64(txt) { return decodeURIComponent(escape(atob(txt.replace(/-/g, '+').replace(/_/g, '/')))); }
function igual(a, b) { if (a.length !== b.length) return false; let d = 0; for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i); return d === 0; }

function lerCookie(req, nome) {
  const m = (req.headers.get('cookie') || '').match(new RegExp('(?:^|;\\s*)' + nome + '=([^;]+)'));
  return m ? m[1] : null;
}

async function sessaoValida(req, host, nome) {
  const v = lerCookie(req, nome || COOKIE);
  if (!v || v.indexOf('.') < 0) return null;
  const [corpo, sig] = v.split('.');
  if (!igual(sig, await assinar(corpo))) return null;
  try {
    const d = JSON.parse(deB64(corpo));
    if (d.h !== host || !(d.e > Date.now())) return null;
    return d;
  } catch (e) { return null; }
}

function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

function pagina(status, titulo, texto, extra) {
  const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>${esc(titulo)}</title>
<style>:root{--f:#f6f4fb;--c:#fff;--t:#1d1830;--s:#6b6580;--a:#6d3fd1;--b:#e6e1f2}
@media (prefers-color-scheme:dark){:root{--f:#120f1c;--c:#1c1729;--t:#f1edfb;--s:#a9a2bd;--a:#a98bff;--b:#2c2540}}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;padding:24px 16px;background:var(--f);color:var(--t);font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
.c{max-width:420px;width:100%;background:var(--c);border:1px solid var(--b);border-radius:20px;padding:36px 28px;text-align:center}
.f{display:grid;gap:10px;margin-top:20px;text-align:left}.f label{font-size:.85rem;font-weight:600}.f input{width:100%;font:inherit;padding:12px 14px;border-radius:12px;border:1.5px solid var(--b);background:var(--f);color:var(--t)}.f button{font:inherit;font-weight:700;padding:12px;border:0;border-radius:12px;background:var(--a);color:#fff;cursor:pointer}.e{color:#d33;font-size:.9rem}
.i{width:56px;height:56px;border-radius:50%;margin:0 auto 18px;display:grid;place-items:center;background:color-mix(in srgb,var(--a) 14%,transparent);color:var(--a)}
h1{font-size:1.35rem;margin:0 0 10px}p{margin:0;color:var(--s)}small{display:block;margin-top:26px;color:var(--s);font-size:.78rem;letter-spacing:.04em}</style></head>
<body><main class="c"><div class="i"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg></div>
<h1>${esc(titulo)}</h1><p>${esc(texto)}</p>${extra || ''}<small>Prévia protegida · DERS${extra ? '' : ' · <a href="/__ders/entrar" style="color:inherit">Área da DERS</a>'}</small></main></body></html>`;
  return new Response(html, { status, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'x-robots-tag': 'noindex, nofollow' } });
}
const EXPIROU = () => pagina(410, 'Esta prévia expirou', 'O link de prévia vale só por alguns minutos. Para ver de novo, peça um novo link a quem te enviou.');
const INVALIDO = () => pagina(403, 'Prévia protegida', 'Este site só abre pelo link de prévia enviado para você.');

function telaEntrar(erro) {
  return pagina(erro ? 401 : 200, 'Área da DERS', 'Entre com o usuário e a senha do sistema DERS para ver este site sempre que quiser, neste aparelho.',
    `<form class="f" method="post" action="/__ders/entrar">${erro ? `<p class="e">${esc(erro)}</p>` : ''}
<label>Usuário<input name="usuario" autocomplete="username" autocapitalize="none" required></label>
<label>Senha<input name="senha" type="password" autocomplete="current-password" required></label>
<button type="submit">Entrar</button></form>`);
}

async function entrar(req, url, host) {
  if (req.method !== 'POST') return telaEntrar();
  let usuario = '', senha = '';
  try { const f = await req.formData(); usuario = String(f.get('usuario') || '').trim().toLowerCase(); senha = String(f.get('senha') || ''); } catch (e) { }
  const email = usuario.indexOf('@') > 0 ? usuario : usuario + '@' + DOMINIO_LOGIN;
  if (!usuario || !senha || DONOS.indexOf(email) < 0) return telaEntrar('Usuário ou senha incorretos.');
  try {
    const r = await fetch(SUPABASE_URL + '/auth/v1/token?grant_type=password', {
      method: 'POST', headers: { apikey: SUPABASE_KEY, 'content-type': 'application/json' },
      body: JSON.stringify({ email, password: senha })
    });
    const d = await r.json().catch(() => ({}));
    if (!r.ok || !d.user || String(d.user.email || '').toLowerCase() !== email) return telaEntrar('Usuário ou senha incorretos.');
  } catch (e) { return telaEntrar('Não deu para entrar agora. Tente de novo.'); }
  const seg = DIAS_DONA * 86400, corpo = b64(JSON.stringify({ h: host, e: Date.now() + seg * 1000, n: '' }));
  const h = new Headers({ location: '/', 'cache-control': 'no-store' });
  h.append('set-cookie', `${COOKIE_DONA}=${corpo}.${await assinar(corpo)}; Path=/; Max-Age=${seg}; HttpOnly; Secure; SameSite=Lax`);
  h.append('set-cookie', `ders_vis=; Path=/; Max-Age=0; Secure; SameSite=Lax`);
  return new Response(null, { status: 303, headers: h });
}

function previaRobo(url) {
  const img = url.origin + '/og.jpg';
  const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="robots" content="noindex,nofollow"><title>${esc(TITULO)}</title>
<meta property="og:type" content="website"><meta property="og:title" content="${esc(TITULO)}"><meta property="og:description" content="${esc(DESCRICAO)}"><meta property="og:image" content="${esc(img)}"><meta name="twitter:card" content="summary_large_image"></head><body></body></html>`;
  return new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'x-robots-tag': 'noindex, nofollow' } });
}

export default async function middleware(req) {
  const url = new URL(req.url), host = url.host.toLowerCase();
  if (LIVRES.has(url.pathname)) return seguir();
  const ua = req.headers.get('user-agent') || '';
  const codigo = url.searchParams.get('acesso');

  // Robôs de prévia (WhatsApp, Instagram...) só recebem título e imagem, sem gastar o tempo da pessoa.
  if (ROBOS.test(ua)) return previaRobo(url);
  if (url.pathname === '/__ders/entrar') return entrar(req, url, host);

  // A dona vê sempre, sem tempo e sem marca d'água, e não gasta o link do cliente.
  if (await sessaoValida(req, host, COOKIE_DONA)) {
    if (!codigo) return seguir();
    url.searchParams.delete('acesso');
    return new Response(null, { status: 303, headers: { location: url.pathname + url.search, 'cache-control': 'no-store' } });
  }

  if (codigo) {
    let r;
    try {
      const resp = await fetch(SUPABASE_URL + '/rest/v1/rpc/abrir_link_previa', {
        method: 'POST',
        headers: { apikey: SUPABASE_KEY, 'content-type': 'application/json' },
        body: JSON.stringify({ p_codigo: codigo, p_site: host })
      });
      if (!resp.ok) throw new Error('supabase ' + resp.status);
      r = await resp.json();
    } catch (e) {
      return pagina(503, 'Não deu para abrir agora', 'Confira a internet e tente abrir o link de novo em instantes.');
    }
    if (!r || !r.ok) return r && r.motivo === 'expirado' ? EXPIROU() : INVALIDO();
    const exp = Date.parse(r.expira), seg = Math.max(1, Math.floor((exp - Date.now()) / 1000));
    const corpo = b64(JSON.stringify({ h: host, e: exp, n: r.pessoa || '' }));
    const valor = corpo + '.' + (await assinar(corpo));
    url.searchParams.delete('acesso');
    const h = new Headers({ location: url.pathname + url.search + url.hash, 'cache-control': 'no-store', 'x-robots-tag': 'noindex, nofollow' });
    h.append('set-cookie', `${COOKIE}=${valor}; Path=/; Max-Age=${seg}; HttpOnly; Secure; SameSite=Lax`);
    h.append('set-cookie', `ders_vis=${encodeURIComponent(JSON.stringify({ n: r.pessoa || '', e: exp }))}; Path=/; Max-Age=${seg}; Secure; SameSite=Lax`);
    h.append('set-cookie', `ders_teve=1; Path=/; Max-Age=2592000; HttpOnly; Secure; SameSite=Lax`);
    return new Response(null, { status: 303, headers: h });
  }

  if (await sessaoValida(req, host)) return seguir();

  const doc = (req.headers.get('sec-fetch-dest') || '') === 'document' || /text\/html/.test(req.headers.get('accept') || '');
  if (!doc) return new Response('Prévia protegida', { status: 403, headers: { 'cache-control': 'no-store' } });
  // Quem já teve um link e o tempo acabou vê "expirou"; quem nunca teve vê "protegida".
  return lerCookie(req, 'ders_teve') ? EXPIROU() : INVALIDO();
}

/* DERS · Proteção no navegador. O modo vem do site (/__ders/modo):
   prototipo: marca d'água com o nome de quem recebeu + tempo restante + barreiras;
   portfolio: marca d'água "DERS · Portfólio" + barreiras;
   livre (site no ar ou você logada como DERS): nada.
   Barreiras: botão direito, arrastar, copiar, salvar, imprimir e a tecla Print Screen. */
(function () {
  'use strict';
  var d = document;
  var css = d.createElement('style');
  css.textContent =
    'html.ders-p body{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}' +
    'html.ders-p input,html.ders-p textarea,html.ders-p select,html.ders-p [contenteditable="true"]{-webkit-user-select:text;user-select:text}' +
    'html.ders-p img,html.ders-p video{-webkit-user-drag:none}' +
    '#ders-marca{position:fixed;inset:0;z-index:2147483646;pointer-events:none;background-repeat:repeat}' +
    '#ders-tempo{position:fixed;left:12px;bottom:12px;z-index:2147483647;pointer-events:none;font:600 12px/1 system-ui,-apple-system,sans-serif;' +
    'padding:7px 10px;border-radius:999px;background:rgba(20,16,32,.72);color:#fff;letter-spacing:.02em;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}' +
    '#ders-veu{position:fixed;inset:0;z-index:2147483647;background:#111;display:none}html.ders-veu #ders-veu{display:block}' +
    '@media print{html.ders-p body>*{display:none!important}html.ders-p body:after{content:"Conteúdo protegido · DERS";display:block;padding:40px;font:20px system-ui}}';
  (d.head || d.documentElement).appendChild(css);

  var editavel = function (el) { return el && el.closest && el.closest('input, textarea, select, [contenteditable="true"]'); };
  var ativo = function () { return d.documentElement.classList.contains('ders-p'); };

  function barreiras() {
    d.documentElement.classList.add('ders-p');
    d.addEventListener('contextmenu', function (e) { if (ativo() && !editavel(e.target)) e.preventDefault(); });
    d.addEventListener('dragstart', function (e) { if (ativo() && e.target && /^(IMG|VIDEO|A)$/.test(e.target.tagName)) e.preventDefault(); });
    d.addEventListener('copy', function (e) { if (ativo() && !editavel(e.target)) e.preventDefault(); });
    d.addEventListener('keydown', function (e) {
      var k = (e.key || '').toLowerCase();
      if ((e.ctrlKey || e.metaKey) && (k === 's' || k === 'u' || k === 'p')) e.preventDefault();
      if (k === 'printscreen') veu();
    });
    d.addEventListener('keyup', function (e) { if ((e.key || '').toLowerCase() === 'printscreen') { veu(); try { navigator.clipboard.writeText('Conteúdo protegido · DERS'); } catch (x) { } } });
    Array.prototype.forEach.call(d.querySelectorAll('video'), function (v) {
      v.setAttribute('controlsList', 'nodownload noplaybackrate'); v.setAttribute('disablePictureInPicture', '');
    });
  }
  function veu() {
    if (!d.getElementById('ders-veu')) { var v = d.createElement('div'); v.id = 'ders-veu'; d.body.appendChild(v); }
    d.documentElement.classList.add('ders-veu');
    clearTimeout(veu.t); veu.t = setTimeout(function () { d.documentElement.classList.remove('ders-veu'); }, 1200);
  }

  function marca(texto) {
    var escuro = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
    texto = String(texto).replace(/[<>&"]/g, '');
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="340" height="200"><text x="20" y="120" transform="rotate(-24 170 100)" ' +
      'font-family="system-ui,sans-serif" font-size="17" font-weight="600" fill="#808080" fill-opacity="' + (escuro ? '0.22' : '0.16') + '">' + texto + '</text></svg>';
    var fundo = 'url("data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg) + '")';
    function montar() {
      var mk = d.getElementById('ders-marca');
      if (!mk) { mk = d.createElement('div'); mk.id = 'ders-marca'; mk.setAttribute('aria-hidden', 'true'); d.body.appendChild(mk); }
      mk.style.backgroundImage = fundo;
    }
    montar();
    // Se alguém apagar a marca d'água pelo navegador, ela volta.
    new MutationObserver(function () { if (!d.getElementById('ders-marca')) montar(); }).observe(d.body, { childList: true });
  }

  function tempo(exp) {
    function tique() {
      var rest = Math.max(0, Math.floor((exp - Date.now()) / 1000));
      if (rest <= 0) { location.reload(); return; }
      var tp = d.getElementById('ders-tempo');
      if (!tp) { tp = d.createElement('div'); tp.id = 'ders-tempo'; d.body.appendChild(tp); }
      var h = Math.floor(rest / 3600), mi = Math.floor(rest % 3600 / 60), s = rest % 60;
      tp.textContent = 'Prévia · ' + (h ? h + 'h ' + (mi < 10 ? '0' : '') + mi + 'min' : mi + ':' + (s < 10 ? '0' : '') + s);
    }
    tique(); setInterval(tique, 1000);
  }

  function aplicar(m) {
    if (!m || m.modo === 'livre') return;
    barreiras();
    if (m.modo === 'portfolio') { marca('DERS · Portfólio · ders-site.vercel.app'); return; }
    marca('Prévia · ' + (m.n || 'DERS') + ' · DERS');
    if (m.e) tempo(m.e);
  }

  function iniciar() {
    fetch('/__ders/modo', { cache: 'no-store', credentials: 'same-origin' })
      .then(function (r) { return r.ok ? r.json() : null; }) // sem o middleware (site final), não faz nada
      .catch(function () { return null; })
      .then(aplicar);
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', iniciar); else iniciar();
})();

/* DERS · Prévia protegida: marca d'água com o nome de quem recebeu, tempo restante
   e barreiras leves contra copiar (botão direito, arrastar, selecionar, salvar, imprimir).
   Não atrapalha quem só está olhando. */
(function () {
  'use strict';
  var d = document, info = null;
  try {
    var m = d.cookie.match(/(?:^|;\s*)ders_vis=([^;]+)/);
    if (m) info = JSON.parse(decodeURIComponent(m[1]));
  } catch (e) { info = null; }

  // Barreiras leves
  var editavel = function (el) { return el && el.closest && el.closest('input, textarea, select, [contenteditable="true"]'); };
  d.addEventListener('contextmenu', function (e) { if (!editavel(e.target)) e.preventDefault(); });
  d.addEventListener('dragstart', function (e) { if (e.target && /^(IMG|VIDEO|A)$/.test(e.target.tagName)) e.preventDefault(); });
  d.addEventListener('copy', function (e) { if (!editavel(e.target)) e.preventDefault(); });
  d.addEventListener('keydown', function (e) {
    var k = (e.key || '').toLowerCase();
    if ((e.ctrlKey || e.metaKey) && (k === 's' || k === 'u' || k === 'p')) e.preventDefault();
  });

  var css = d.createElement('style');
  css.textContent =
    'html body{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}' +
    'input,textarea,select,[contenteditable="true"]{-webkit-user-select:text;user-select:text}' +
    'img,video{-webkit-user-drag:none}' +
    '#ders-marca{position:fixed;inset:0;z-index:2147483646;pointer-events:none;background-repeat:repeat}' +
    '#ders-tempo{position:fixed;left:12px;bottom:12px;z-index:2147483647;pointer-events:none;font:600 12px/1 system-ui,-apple-system,sans-serif;' +
    'padding:7px 10px;border-radius:999px;background:rgba(20,16,32,.72);color:#fff;letter-spacing:.02em;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}' +
    '@media print{body>*{display:none!important}body:after{content:"Prévia protegida · DERS";display:block;padding:40px;font:20px system-ui}}';
  (d.head || d.documentElement).appendChild(css);

  function videos() {
    Array.prototype.forEach.call(d.querySelectorAll('video'), function (v) {
      v.setAttribute('controlsList', 'nodownload noplaybackrate');
      v.setAttribute('disablePictureInPicture', '');
    });
  }

  if (!info) { d.addEventListener('DOMContentLoaded', videos); return; }

  // Marca d'água: nome de quem recebeu, repetido em diagonal, bem leve.
  var escuro = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
  var texto = ('Prévia · ' + (info.n || 'DERS') + ' · DERS').replace(/[<>&"]/g, '');
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="340" height="200"><text x="20" y="120" transform="rotate(-24 170 100)" ' +
    'font-family="system-ui,sans-serif" font-size="17" font-weight="600" fill="#808080" fill-opacity="' + (escuro ? '0.22' : '0.16') + '">' + texto + '</text></svg>';
  var fundo = 'url("data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg) + '")';

  function montar() {
    if (!d.body) return;
    var mk = d.getElementById('ders-marca');
    if (!mk) { mk = d.createElement('div'); mk.id = 'ders-marca'; mk.setAttribute('aria-hidden', 'true'); d.body.appendChild(mk); }
    mk.style.backgroundImage = fundo;
    var tp = d.getElementById('ders-tempo');
    if (!tp) { tp = d.createElement('div'); tp.id = 'ders-tempo'; tp.setAttribute('aria-live', 'off'); d.body.appendChild(tp); }
    return tp;
  }

  function tique() {
    var tp = montar(), rest = Math.max(0, Math.floor((info.e - Date.now()) / 1000));
    if (rest <= 0) { location.reload(); return; }
    if (tp) {
      var h = Math.floor(rest / 3600), mi = Math.floor(rest % 3600 / 60), s = rest % 60;
      tp.textContent = 'Prévia · ' + (h ? h + 'h ' + (mi < 10 ? '0' : '') + mi + 'min' : mi + ':' + (s < 10 ? '0' : '') + s);
    }
  }

  function iniciar() {
    videos(); tique(); setInterval(tique, 1000);
    // Se alguém apagar a marca d'água pelo navegador, ela volta.
    new MutationObserver(function () { if (!d.getElementById('ders-marca') || !d.getElementById('ders-tempo')) montar(); })
      .observe(d.body, { childList: true });
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', iniciar); else iniciar();
})();

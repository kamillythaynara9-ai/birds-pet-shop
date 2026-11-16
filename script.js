/* Birds Pet Shop · protótipo DERS
   Conteúdo que muda fica nos dados abaixo: troque pelos materiais do cliente sem mexer no design. */

const LOJA = {
  nome: "Birds Pet Shop",
  whatsapp: "5511977664646",
  instagram: "petshopbird",
  // EXEMPLO: confirmar o horário real com o cliente (0 = domingo)
  horario: { 1: [9, 19], 2: [9, 19], 3: [9, 19], 4: [9, 19], 5: [9, 19], 6: [9, 15] },
  horarioTexto: "Seg a sex 9h às 19h · Sáb 9h às 15h"
};

// Fotos da primeira tela (banco de imagens Pexels, licença livre). Trocar pelas fotos da loja.
const FOTOS_TOPO = [
  ["a-1316295.jpg", "Arara-canindé"], ["a-7154573.jpg", "Calopsita"], ["a-28914189.jpg", "Periquito"],
  ["a-30518529.jpg", "Agapornis"], ["a-6398822.jpg", "Canário"], ["a-15314598.jpg", "Arara-vermelha"],
  ["a-10252685.jpg", "Calopsita"], ["a-13550346.jpg", "Periquitos"], ["a-17052115.jpg", "Tiriba"],
  ["a-16147936.jpg", "Periquito"], ["a-17892832.jpg", "Arara-vermelha"], ["a-625419.jpg", "Canário"],
  ["a-8838179.jpg", "Periquito"], ["a-11961251.jpg", "Calopsita"], ["a-33953128.jpg", "Calopsitas"]
];

const ESPECIES = [
  { id: "calopsita", nome: "Calopsita", foto: "a-7154573.jpg" },
  { id: "periquito", nome: "Periquito", foto: "a-28914189.jpg" },
  { id: "canario", nome: "Canário", foto: "a-6398822.jpg" },
  { id: "agapornis", nome: "Agapornis", foto: "a-30518529.jpg" },
  { id: "papagaio", nome: "Papagaio e arara", foto: "a-1316295.jpg" },
  { id: "mandarim", nome: "Mandarim e pequenos", foto: "a-625419.jpg" }
];

const DEPARTAMENTOS = [
  { id: "alimentacao", nome: "Alimentação", texto: "Misturas de sementes, rações e petiscos certos para cada espécie.", fotos: ["p-sementes-calopsita.jpg", "a-17052115.jpg"] },
  { id: "gaiolas", nome: "Gaiolas e viveiros", texto: "Do canário ao papagaio: tamanho, grade e porta certos para cada ave.", fotos: ["p-gaiola-classica.jpg", "a-16147936.jpg"] },
  { id: "poleiros", nome: "Poleiros", texto: "Galho natural e madeira para o pé descansar e o bico gastar.", fotos: ["p-poleiro-natural.jpg", "p-poleiro-arara.jpg"] },
  { id: "ninhos", nome: "Ninhos", texto: "Caixas de madeira e ninhos para reprodução tranquila.", fotos: ["p-ninho-madeira.jpg", "a-30518529.jpg"] },
  { id: "brinquedos", nome: "Brinquedos", texto: "Balanços e brinquedos para a ave não ficar entediada.", fotos: ["p-balanco.jpg", "a-13550346.jpg"] },
  { id: "comedouros", nome: "Comedouros", texto: "Comedouros e bebedouros práticos de limpar e encher.", fotos: ["p-comedouro-tubo.jpg", "a-10502515.jpg"] }
];

// EXEMPLO: produtos e preços para mostrar o catálogo. Trocar pela lista real da loja.
const PRODUTOS = [
  { id: "sementes-calopsita", nome: "Mistura de sementes para calopsita", dep: "alimentacao", aves: ["calopsita"], preco: 24.9, foto: "p-sementes-calopsita.jpg", desc: "Girassol, painço, alpiste e aveia na medida para calopsitas.", opcoes: ["500 g", "1 kg", "5 kg"] },
  { id: "mix-premium", nome: "Mix premium de sementes", dep: "alimentacao", aves: ["periquito", "agapornis", "calopsita"], preco: 34.9, foto: "p-mix-premium.jpg", desc: "Sementes selecionadas com milho e girassol para psitacídeos pequenos e médios.", opcoes: ["1 kg", "3 kg"] },
  { id: "comedouro-tubo", nome: "Comedouro tubo pendurado", dep: "comedouros", aves: ["canario", "mandarim", "periquito"], preco: 29.9, foto: "p-comedouro-tubo.jpg", desc: "Comedouro de tubo com poleiro, fácil de encher e de limpar.", opcoes: ["Pequeno", "Médio"] },
  { id: "gaiola-classica", nome: "Gaiola clássica branca", dep: "gaiolas", aves: ["calopsita", "agapornis", "periquito"], preco: 289.9, foto: "p-gaiola-classica.jpg", desc: "Gaiola decorativa com teto em cúpula e bandeja removível.", opcoes: ["Média", "Grande"] },
  { id: "gaiola-periquito", nome: "Gaiola para periquitos", dep: "gaiolas", aves: ["periquito"], preco: 169.9, foto: "p-gaiola-periquito.jpg", desc: "Grade fina, dois poleiros e comedouros laterais.", opcoes: ["Nº 3", "Nº 4"] },
  { id: "gaiola-pequenos", nome: "Gaiola para canário e mandarim", dep: "gaiolas", aves: ["canario", "mandarim"], preco: 139.9, foto: "p-gaiola-pequenos.jpg", desc: "Leve e arejada, com espaço para voos curtos.", opcoes: ["Simples", "Com ninho"] },
  { id: "viveiro-papagaio", nome: "Viveiro para papagaio", dep: "gaiolas", aves: ["papagaio"], preco: 899.9, foto: "p-viveiro-papagaio.jpg", desc: "Viveiro reforçado com rodinhas e teto que vira poleiro.", opcoes: ["Médio", "Grande"] },
  { id: "ninho-madeira", nome: "Ninho de madeira", dep: "ninhos", aves: ["agapornis", "calopsita", "periquito"], preco: 59.9, foto: "p-ninho-madeira.jpg", desc: "Caixa-ninho de madeira com entrada redonda e tampa de inspeção.", opcoes: ["Agapornis", "Calopsita"] },
  { id: "poleiro-natural", nome: "Poleiro de galho natural", dep: "poleiros", aves: ["periquito", "canario", "mandarim", "calopsita"], preco: 19.9, foto: "p-poleiro-natural.jpg", desc: "Galho natural com espessuras variadas, bom para os pés.", opcoes: ["20 cm", "30 cm"] },
  { id: "poleiro-arara", nome: "Poleiro de madeira para arara", dep: "poleiros", aves: ["papagaio"], preco: 79.9, foto: "p-poleiro-arara.jpg", desc: "Madeira maciça e resistente para aves grandes.", opcoes: ["40 cm", "60 cm"] },
  { id: "balanco", nome: "Balanço com brinquedo", dep: "brinquedos", aves: ["agapornis", "periquito", "calopsita"], preco: 27.9, foto: "p-balanco.jpg", desc: "Balanço colorido com peças de madeira para bicar.", opcoes: ["Pequeno", "Médio"] },
  { id: "poleiro-balanco", nome: "Poleiro balanço para jandaia", dep: "brinquedos", aves: ["agapornis", "calopsita"], preco: 39.9, foto: "p-poleiro-balanco.jpg", desc: "Poleiro que balança, para exercitar e distrair.", opcoes: ["Único"] }
];

// EXEMPLO: serviços do agendamento. Confirmar com o cliente o que ele oferece.
const SERVICOS = [
  { nome: "Corte de unhas", info: "Rápido e com cuidado", tempo: "15 min" },
  { nome: "Consultoria de gaiola e alimentação", info: "A gente monta o enxoval certo para a sua ave", tempo: "30 min" },
  { nome: "Visita para conhecer as aves", info: "Venha escolher com calma", tempo: "30 min" }
];
const HORAS = ["9:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

const GALERIA = [
  ["a-1316295.jpg", "Arara-canindé"], ["a-30518529.jpg", "Casal de agapornis"], ["a-6398822.jpg", "Canário"],
  ["a-11961251.jpg", "Calopsita no viveiro"], ["a-13550346.jpg", "Periquitos"], ["a-17892832.jpg", "Arara-vermelha"],
  ["video", "Espaço para o vídeo da loja"], ["a-8838179.jpg", "Periquito na mão"]
];

/* ---------- utilidades ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reais = v => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const whats = msg => `https://wa.me/${LOJA.whatsapp}?text=${encodeURIComponent(msg)}`;
const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const guarda = {
  ler(k, padrao) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : padrao; } catch (e) { return padrao; } },
  salvar(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
const sessao = {
  ler(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
  salvar(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }
};
function toast(txt) {
  const t = $("#toast"); t.textContent = txt; t.classList.add("mostra");
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("mostra"), 2200);
}
const PENA_SVG = cor => `<svg viewBox="0 0 60 160" aria-hidden="true"><path d="M30 4C12 30 6 70 14 110c4 18 10 30 16 46 6-16 12-28 16-46 8-40 2-80-16-106z" fill="${cor}"/><path d="M30 10v146" stroke="rgba(0,0,0,.18)" stroke-width="3"/></svg>`;

/* ---------- intro: pena cai, logo pousa, asas abrem (até ~2,6 s) ---------- */
(function intro() {
  const el = $("#intro");
  if (sessao.ler("birds-intro") || semMovimento) { el.classList.add("fim"); return; }
  document.body.classList.add("travado");
  let saiu = false;
  const sair = () => {
    if (saiu) return; saiu = true;
    sessao.salvar("birds-intro", "1");
    el.classList.add("abrindo");
    document.body.classList.remove("travado");
    setTimeout(() => el.classList.add("fim"), 800);
  };
  el.addEventListener("click", sair);
  setTimeout(sair, 1800);
  setTimeout(sair, 2600); // garantia: nunca trava
})();

/* ---------- WhatsApp em todos os links data-whats ---------- */
$$("[data-whats]").forEach(a => {
  a.href = whats(a.dataset.whats); a.target = "_blank"; a.rel = "noopener";
});
$("#ano").textContent = new Date().getFullYear();

/* ---------- topo e menu ---------- */
const barra = $("#topo-barra");
const aoRolar = () => barra.classList.toggle("rolou", scrollY > 40);
addEventListener("scroll", aoRolar, { passive: true }); aoRolar();
const btnMenu = $("#btn-menu"), menu = $("#menu");
btnMenu.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  btnMenu.setAttribute("aria-expanded", aberto);
  document.body.classList.toggle("travado", aberto);
});
$$("a", menu).forEach(a => a.addEventListener("click", () => {
  menu.classList.remove("aberto"); btnMenu.setAttribute("aria-expanded", "false"); document.body.classList.remove("travado");
}));

/* ---------- botões soltam penas ao toque ---------- */
document.addEventListener("pointerdown", e => {
  const b = e.target.closest(".btn"); if (!b || semMovimento) return;
  const r = b.getBoundingClientRect();
  for (let i = 0; i < 4; i++) {
    const p = document.createElement("span"); p.className = "pluma";
    p.style.left = (e.clientX - r.left) + "px"; p.style.top = (e.clientY - r.top) + "px";
    p.style.setProperty("--dx", (Math.random() * 80 - 40) + "px");
    p.style.setProperty("--dy", (Math.random() * -50 - 10) + "px");
    p.style.setProperty("--r", (Math.random() * 180 - 90) + "deg");
    b.appendChild(p); setTimeout(() => p.remove(), 800);
  }
});

/* ---------- primeira tela: colunas de aves e penas flutuando ---------- */
(function colunas() {
  const box = $("#hero-colunas");
  const embaralhado = [...FOTOS_TOPO].sort(() => Math.random() - .5);
  for (let c = 0; c < 3; c++) {
    const col = document.createElement("div"); col.className = "coluna";
    const trilha = document.createElement("div"); trilha.className = "coluna-trilha";
    const fotos = embaralhado.filter((_, i) => i % 3 === c);
    const html = fotos.map(([src, nome], i) =>
      `<figure><img src="${src}" alt="${nome}" ${c === 1 && i === 0 ? "" : 'loading="lazy"'} width="300" height="400"><figcaption>${nome}</figcaption></figure>`).join("");
    trilha.innerHTML = html + html; // duas vezes para o laço sem emenda
    col.appendChild(trilha); box.appendChild(col);
    col.addEventListener("pointerdown", () => col.classList.add("pausada"));
    col.addEventListener("pointerup", () => col.classList.remove("pausada"));
    col.addEventListener("pointerleave", () => col.classList.remove("pausada"));
  }
  if (!semMovimento) {
    const penas = $("#penas"), cores = ["#fdce02", "#9be05a", "#ffffff", "#f39a0c"];
    for (let i = 0; i < 9; i++) {
      const w = document.createElement("div");
      w.innerHTML = PENA_SVG(cores[i % 4]);
      const s = w.firstChild; const tam = 12 + Math.random() * 16;
      s.style.width = tam + "px"; s.style.left = (Math.random() * 100) + "%";
      s.style.animationDuration = (14 + Math.random() * 14) + "s";
      s.style.animationDelay = (-Math.random() * 20) + "s";
      penas.appendChild(s);
    }
  }
})();

/* ---------- espécies: filtram a loja ---------- */
let aveFiltro = null;
(function especies() {
  const lista = $("#especies-lista");
  lista.innerHTML = ESPECIES.map(e => {
    const n = PRODUTOS.filter(p => p.aves.includes(e.id)).length;
    return `<button class="especie" data-ave="${e.id}"><span class="bola"><img src="${e.foto}" alt="${e.nome}" loading="lazy" width="150" height="150"></span>${e.nome}<small>${n} produtos</small></button>`;
  }).join("");
  lista.addEventListener("click", ev => {
    const b = ev.target.closest(".especie"); if (!b) return;
    aveFiltro = aveFiltro === b.dataset.ave ? null : b.dataset.ave;
    $$(".especie").forEach(x => x.classList.toggle("ativa", x.dataset.ave === aveFiltro));
    desenharLoja();
    if (aveFiltro) $("#loja").scrollIntoView({ behavior: semMovimento ? "auto" : "smooth" });
  });
})();

/* ---------- corredores: rolagem vertical vira voo horizontal ---------- */
(function corredores() {
  const trilho = $("#corredores-trilho");
  trilho.innerHTML = DEPARTAMENTOS.map((d, i) => `
    <article class="corredor">
      <div>
        <span class="corredor-num">0${i + 1}</span>
        <h3>${d.nome}</h3>
        <p>${d.texto}</p>
        <button class="btn btn-sol" data-dep="${d.id}">Ver ${d.nome.toLowerCase()}</button>
      </div>
      <div class="corredor-fotos"><img src="${d.fotos[0]}" alt="${d.nome}" loading="lazy" width="500" height="600"><img src="${d.fotos[1]}" alt="" loading="lazy" width="300" height="300"></div>
    </article>`).join("");
  trilho.addEventListener("click", e => {
    const b = e.target.closest("[data-dep]"); if (!b) return;
    depFiltro = b.dataset.dep; desenharPilulas(); desenharLoja();
    $("#loja").scrollIntoView({ behavior: semMovimento ? "auto" : "smooth" });
  });
  if (semMovimento) return;
  const sec = $("#corredores"), ave = $("#voo-ave"), voo = $(".voo");
  let pedido = false;
  const mover = () => {
    pedido = false;
    const r = sec.getBoundingClientRect();
    const total = sec.offsetHeight - innerHeight;
    const p = Math.min(1, Math.max(0, -r.top / total));
    const max = trilho.scrollWidth - innerWidth;
    trilho.style.transform = `translate3d(${-p * max}px,0,0)`;
    const largura = voo.clientWidth - 44;
    const sobe = Math.sin(p * Math.PI * 6) * 6;
    ave.style.transform = `translate(${p * largura}px, ${sobe}px) rotate(${Math.cos(p * Math.PI * 6) * 12}deg)`;
  };
  addEventListener("scroll", () => { if (!pedido) { pedido = true; requestAnimationFrame(mover); } }, { passive: true });
  addEventListener("resize", mover); mover();
})();

/* ---------- loja ---------- */
let depFiltro = "todos", busca = "";
function desenharPilulas() {
  const deps = [{ id: "todos", nome: "Tudo" }, ...DEPARTAMENTOS];
  $("#pilulas").innerHTML = deps.map(d => `<button class="pilula ${d.id === depFiltro ? "ativa" : ""}" data-dep="${d.id}" aria-pressed="${d.id === depFiltro}"><span>${d.nome}</span></button>`).join("");
}
$("#pilulas").addEventListener("click", e => {
  const b = e.target.closest(".pilula"); if (!b) return;
  depFiltro = b.dataset.dep; desenharPilulas(); desenharLoja();
});
$("#busca").addEventListener("input", e => { busca = e.target.value.trim().toLowerCase(); desenharLoja(); });
const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

function desenharLoja() {
  const lista = PRODUTOS.filter(p =>
    (depFiltro === "todos" || p.dep === depFiltro) &&
    (!aveFiltro || p.aves.includes(aveFiltro)) &&
    (!busca || norm(p.nome + " " + p.desc).includes(norm(busca))));
  const nomeAve = aveFiltro && ESPECIES.find(e => e.id === aveFiltro).nome;
  const fa = $("#filtro-ave");
  fa.hidden = !aveFiltro;
  if (aveFiltro) fa.innerHTML = `Mostrando para: ${nomeAve} <button type="button" id="limpa-ave">limpar ×</button>`;
  $("#grade").innerHTML = lista.map(p => {
    const dep = DEPARTAMENTOS.find(d => d.id === p.dep).nome;
    return `<article class="produto" data-id="${p.id}" tabindex="0" aria-label="${p.nome}">
      <div class="produto-foto"><img src="${p.foto}" alt="${p.nome}" loading="lazy" width="400" height="400"><span class="selo-ave">${p.aves.map(a => ESPECIES.find(e => e.id === a).nome.split(" ")[0]).slice(0, 2).join(" · ")}</span></div>
      <div class="produto-info"><small>${dep}</small><h3>${p.nome}</h3>
        <div class="produto-linha"><span class="preco">${reais(p.preco)}</span><button class="add-rapido" data-add="${p.id}" aria-label="Adicionar ${p.nome}">+</button></div>
      </div></article>`;
  }).join("");
  $("#vazio").hidden = lista.length > 0;
  $$(".produto").forEach((el, i) => setTimeout(() => el.classList.add("visivel"), 40 * i));
}
document.addEventListener("click", e => {
  if (e.target.id === "limpa-ave") { aveFiltro = null; $$(".especie").forEach(x => x.classList.remove("ativa")); desenharLoja(); }
});
$("#grade").addEventListener("click", e => {
  const add = e.target.closest("[data-add]");
  if (add) { e.stopPropagation(); const p = PRODUTOS.find(x => x.id === add.dataset.add); adicionar(p, p.opcoes[0], 1, add); return; }
  const card = e.target.closest(".produto"); if (card) abrirProduto(card.dataset.id);
});
$("#grade").addEventListener("keydown", e => {
  const card = e.target.closest(".produto"); if (card && (e.key === "Enter" || e.key === " ") && !e.target.closest("button")) { e.preventDefault(); abrirProduto(card.dataset.id); }
});

/* ---------- produto aberto ---------- */
let atual = null, qtd = 1, opcao = null, ultimoFoco = null;
function abrirProduto(id) {
  atual = PRODUTOS.find(p => p.id === id); qtd = 1; opcao = atual.opcoes[0]; ultimoFoco = document.activeElement;
  $("#mp-img").src = atual.foto; $("#mp-img").alt = atual.nome;
  $("#mp-dep").textContent = DEPARTAMENTOS.find(d => d.id === atual.dep).nome;
  $("#mp-nome").textContent = atual.nome; $("#mp-desc").textContent = atual.desc;
  $("#mp-ideal").textContent = "Ideal para: " + atual.aves.map(a => ESPECIES.find(e => e.id === a).nome).join(", ");
  desenharOpcoes(); atualizarModal();
  $("#modal-produto").hidden = false; document.body.classList.add("travado");
  $("#modal-produto .fechar").focus();
}
function desenharOpcoes() {
  $("#mp-opcoes").innerHTML = atual.opcoes.map(o => `<button type="button" class="${o === opcao ? "ativa" : ""}" data-op="${o}">${o}</button>`).join("");
}
function atualizarModal() { $("#mp-qtd").textContent = qtd; $("#mp-preco").textContent = reais(atual.preco * qtd); }
function fecharProduto() {
  $("#modal-produto").hidden = true; document.body.classList.remove("travado");
  if (ultimoFoco) ultimoFoco.focus();
}
$("#mp-opcoes").addEventListener("click", e => { const b = e.target.closest("[data-op]"); if (b) { opcao = b.dataset.op; desenharOpcoes(); } });
$("#mp-menos").addEventListener("click", () => { qtd = Math.max(1, qtd - 1); atualizarModal(); });
$("#mp-mais").addEventListener("click", () => { qtd++; atualizarModal(); });
$("#mp-add").addEventListener("click", e => { adicionar(atual, opcao, qtd, e.currentTarget); fecharProduto(); });
$$("[data-fechar]").forEach(b => b.addEventListener("click", fecharProduto));
// Lupa: a foto do produto acompanha o dedo ou o mouse
const mpFoto = $("#mp-img");
mpFoto.addEventListener("pointermove", e => {
  const r = mpFoto.getBoundingClientRect();
  mpFoto.style.transformOrigin = `${(e.clientX - r.left) / r.width * 100}% ${(e.clientY - r.top) / r.height * 100}%`;
  mpFoto.style.transform = "scale(1.8)";
});
mpFoto.addEventListener("pointerleave", () => { mpFoto.style.transform = ""; });

/* ---------- carrinho ---------- */
let carrinho = guarda.ler("birds-carrinho", []);
function adicionar(p, op, q, origem) {
  const chave = p.id + "|" + op;
  const ja = carrinho.find(i => i.chave === chave);
  if (ja) ja.qtd += q; else carrinho.push({ chave, id: p.id, op, qtd: q });
  salvarCarrinho(); voarPena(origem);
  toast(`${p.nome} no pedido`);
}
function salvarCarrinho() { guarda.salvar("birds-carrinho", carrinho); desenharCarrinho(); }
function voarPena(origem) {
  const alvo = $("#abrir-carrinho");
  if (!origem || semMovimento) { alvo.classList.add("pulou"); setTimeout(() => alvo.classList.remove("pulou"), 600); return; }
  const a = origem.getBoundingClientRect(), b = alvo.getBoundingClientRect();
  const el = document.createElement("div"); el.className = "pena-voando"; el.innerHTML = PENA_SVG("#fdce02");
  el.style.left = a.left + a.width / 2 - 11 + "px"; el.style.top = a.top + a.height / 2 - 23 + "px";
  document.body.appendChild(el);
  const dx = b.left + b.width / 2 - (a.left + a.width / 2), dy = b.top + b.height / 2 - (a.top + a.height / 2);
  el.animate([
    { transform: "translate(0,0) rotate(0) scale(1)" },
    { transform: `translate(${dx * .35 - 60}px, ${dy * .5}px) rotate(-60deg) scale(1.3)`, offset: .4 },
    { transform: `translate(${dx * .7 + 40}px, ${dy * .85}px) rotate(40deg) scale(1)`, offset: .75 },
    { transform: `translate(${dx}px, ${dy}px) rotate(0) scale(.3)`, opacity: .2 }
  ], { duration: 900, easing: "cubic-bezier(.22,1,.36,1)" }).onfinish = () => {
    el.remove(); alvo.classList.add("pulou"); setTimeout(() => alvo.classList.remove("pulou"), 600);
  };
}
function desenharCarrinho() {
  const n = carrinho.reduce((s, i) => s + i.qtd, 0);
  const cont = $("#contador"); cont.hidden = n === 0; cont.textContent = n;
  const total = carrinho.reduce((s, i) => s + PRODUTOS.find(p => p.id === i.id).preco * i.qtd, 0);
  $("#total").textContent = reais(total); $("#pg-total").textContent = reais(total);
  $("#carrinho-pe").hidden = n === 0;
  $("#carrinho-itens").innerHTML = n === 0
    ? `<div class="carrinho-vazio"><img src="logo.png" alt="" width="120" height="120">Seu pedido está vazio.<br>Escolha algo na loja.</div>`
    : carrinho.map(i => {
      const p = PRODUTOS.find(x => x.id === i.id);
      return `<div class="item"><img src="${p.foto}" alt=""><div><h4>${p.nome}</h4><small>${i.op} · ${reais(p.preco * i.qtd)}</small></div>
        <div class="qtd"><button data-menos="${i.chave}" aria-label="Menos">−</button><span>${i.qtd}</span><button data-mais="${i.chave}" aria-label="Mais">+</button></div></div>`;
    }).join("");
}
$("#carrinho-itens").addEventListener("click", e => {
  const m = e.target.closest("[data-menos]"), p = e.target.closest("[data-mais]");
  if (m) { const i = carrinho.find(x => x.chave === m.dataset.menos); i.qtd--; if (i.qtd <= 0) carrinho = carrinho.filter(x => x !== i); salvarCarrinho(); }
  if (p) { carrinho.find(x => x.chave === p.dataset.mais).qtd++; salvarCarrinho(); }
});
$("#abrir-carrinho").addEventListener("click", () => {
  $("#carrinho").hidden = false; $("#pagamento").hidden = true; document.body.classList.add("travado");
  $("#carrinho .fechar").focus();
});
const fecharCarrinho = () => { $("#carrinho").hidden = true; document.body.classList.remove("travado"); };
$$("[data-fechar-c]").forEach(b => b.addEventListener("click", fecharCarrinho));
$("#enviar-pedido").addEventListener("click", () => {
  const nome = $("#c-nome").value.trim();
  const entrega = $("input[name=entrega]:checked").value;
  const linhas = carrinho.map(i => { const p = PRODUTOS.find(x => x.id === i.id); return `• ${i.qtd}x ${p.nome} (${i.op}) = ${reais(p.preco * i.qtd)}`; });
  const total = $("#total").textContent;
  const msg = `Olá, Birds! Quero fazer um pedido pelo site:\n\n${linhas.join("\n")}\n\nTotal: ${total}\nComo receber: ${entrega}${nome ? `\nNome: ${nome}` : ""}`;
  window.open(whats(msg), "_blank", "noopener");
});
$("#pagar-online").addEventListener("click", () => { $("#carrinho-pe").hidden = true; $("#pagamento").hidden = false; });
$("#voltar-pedido").addEventListener("click", () => { $("#pagamento").hidden = true; $("#carrinho-pe").hidden = false; });
$$(".pg-abas button").forEach(b => b.addEventListener("click", () => {
  $$(".pg-abas button").forEach(x => x.classList.toggle("ativa", x === b));
  $("#pg-pix").hidden = b.dataset.pg !== "pix"; $("#pg-cartao").hidden = b.dataset.pg !== "cartao";
}));

/* ---------- agendamento ---------- */
let ag = { servico: 0, dia: null, hora: null };
(function agenda() {
  $("#servicos").innerHTML = SERVICOS.map((s, i) => `<button type="button" class="opcao ${i === 0 ? "ativa" : ""}" data-s="${i}"><span>${s.nome}<small>${s.info}</small></span><small>${s.tempo}</small></button>`).join("");
  const dias = []; const d = new Date();
  while (dias.length < 8) { d.setDate(d.getDate() + 1); if (LOJA.horario[d.getDay()]) dias.push(new Date(d)); }
  const sem = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
  $("#dias").innerHTML = dias.map((x, i) => `<button type="button" class="dia" data-d="${x.toISOString().slice(0, 10)}" data-dow="${x.getDay()}"><small>${sem[x.getDay()]}</small>${x.getDate()}/${x.getMonth() + 1}</button>`).join("");
  const desenharHoras = dow => {
    const [ini, fim] = LOJA.horario[dow] || [9, 19];
    const horas = HORAS.filter(h => { const n = parseInt(h, 10); return n >= ini && n < fim; });
    $("#horas").innerHTML = horas.map(h => `<button type="button" class="hora" data-h="${h}">${h}</button>`).join("");
  };
  desenharHoras(dias[0].getDay());
  $("#servicos").addEventListener("click", e => { const b = e.target.closest("[data-s]"); if (!b) return; ag.servico = +b.dataset.s; $$(".opcao").forEach(x => x.classList.toggle("ativa", x === b)); });
  $("#dias").addEventListener("click", e => { const b = e.target.closest("[data-d]"); if (!b) return; ag.dia = b.textContent.replace(/^\D+/, ""); ag.diaSem = b.querySelector("small").textContent; $$(".dia").forEach(x => x.classList.toggle("ativa", x === b)); desenharHoras(+b.dataset.dow); ag.hora = null; });
  $("#horas").addEventListener("click", e => { const b = e.target.closest("[data-h]"); if (!b) return; ag.hora = b.dataset.h; $$(".hora").forEach(x => x.classList.toggle("ativa", x === b)); });
  $("#form-agendar").addEventListener("submit", e => {
    e.preventDefault();
    if (!ag.dia || !ag.hora) { toast("Escolha o dia e o horário"); return; }
    const msg = `Olá, Birds! Quero agendar pelo site:\n\nServiço: ${SERVICOS[ag.servico].nome}\nDia: ${ag.diaSem} ${ag.dia}\nHorário: ${ag.hora}\nNome: ${$("#ag-nome").value.trim()}${$("#ag-ave").value.trim() ? `\nAve: ${$("#ag-ave").value.trim()}` : ""}`;
    window.open(whats(msg), "_blank", "noopener");
  });
})();

/* ---------- galeria com foto ampliada ---------- */
(function galeria() {
  $("#galeria-grade").innerHTML = GALERIA.map(([src, alt]) => src === "video"
    ? `<button class="video-vaga" type="button" aria-label="${alt}"><span><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="rgba(255,255,255,.25)"/><path d="M10 8l6 4-6 4z" fill="#fff"/></svg>${alt}</span></button>`
    : `<button type="button" data-foto="${src}" aria-label="Ampliar: ${alt}"><img src="${src}" alt="${alt}" loading="lazy" width="400" height="400"></button>`).join("");
  $("#galeria-grade").addEventListener("click", e => {
    const b = e.target.closest("[data-foto]"); if (!b) { if (e.target.closest(".video-vaga")) toast("Aqui entra o vídeo da loja"); return; }
    $("#lb-img").src = b.dataset.foto; $("#lb-img").alt = b.getAttribute("aria-label").replace("Ampliar: ", "");
    $("#lightbox").hidden = false; $("#lb-fechar").focus();
  });
  const fechar = () => { $("#lightbox").hidden = true; };
  $("#lb-fechar").addEventListener("click", fechar);
  $("#lightbox").addEventListener("click", e => { if (e.target.id === "lightbox") fechar(); });
})();

/* ---------- contato ---------- */
$("#form-contato").addEventListener("submit", e => {
  e.preventDefault();
  const msg = `Olá, Birds! Sou ${$("#ct-nome").value.trim()}.\nAssunto: ${$("#ct-assunto").value}\n\n${$("#ct-msg").value.trim()}`;
  window.open(whats(msg), "_blank", "noopener");
});
(function horario() {
  $("#horario-texto").textContent = LOJA.horarioTexto;
  const agora = new Date(), h = LOJA.horario[agora.getDay()], hora = agora.getHours() + agora.getMinutes() / 60;
  const aberto = h && hora >= h[0] && hora < h[1];
  const el = $("#aberto"); el.textContent = aberto ? "Aberto agora" : "Fechado agora"; el.className = "aberto " + (aberto ? "sim" : "nao");
})();

/* ---------- Esc fecha o que estiver aberto ---------- */
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (!$("#lightbox").hidden) $("#lightbox").hidden = true;
  else if (!$("#modal-produto").hidden) fecharProduto();
  else if (!$("#carrinho").hidden) fecharCarrinho();
});

/* ---------- entrada das seções ao rolar ---------- */
(function revelar() {
  const alvos = [...$$(".cabeca"), ...$$(".agendar-texto, .agendar-form, .sobre-foto, .sobre-texto, .contato-info, .contato-form, .especie")];
  alvos.forEach(el => el.classList.add("revela"));
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("visivel"); io.unobserve(en.target); }
  }), { threshold: .15 });
  alvos.forEach(el => io.observe(el));
  const ioG = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { $$("button", en.target).forEach((b, i) => setTimeout(() => b.classList.add("visivel"), 70 * i)); ioG.unobserve(en.target); }
  }), { threshold: .1 });
  ioG.observe($("#galeria-grade"));
})();

/* ---------- cookies ---------- */
if (!guarda.ler("birds-cookies", false)) $("#cookies").hidden = false;
$("#cookies-ok").addEventListener("click", () => { guarda.salvar("birds-cookies", true); $("#cookies").hidden = true; });

desenharPilulas(); desenharLoja(); desenharCarrinho();

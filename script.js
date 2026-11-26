/* Bird Pet Shop & Avicultura · protótipo DERS
   Conteúdo que muda fica nos dados abaixo (e o catálogo em produtos.js): troque pelos materiais do cliente sem mexer no design.
   Dados reais tirados do site birdpetshop.com.br em 25/11/2026. */

const LOJA = {
  nome: "Bird Pet Shop & Avicultura",
  curto: "Bird",
  // WhatsApp do site atual da loja (birdpetshop.com.br). Só o WhatsApp aparece no site.
  whatsapp: "5511960358956",
  whatsappTexto: "(11) 96035-8956",
  telefone: "(11) 96035-8956",
  email: "petshopbird@gmail.com",
  instagram: "petshopbird",
  cnpj: "40.830.252/0001-62",
  razao: "Distribuidora Bird Pet Shop e Avicultura Ltda",
  entrega: "Delivery para toda a cidade de São Paulo, região do ABCD e arredores",
  // EXEMPLO: confirmar o horário real com o cliente (0 = domingo)
  horario: { 1: [9, 19], 2: [9, 19], 3: [9, 19], 4: [9, 19], 5: [9, 19], 6: [9, 15] },
  horarioTexto: "Seg a sex 9h às 19h · Sáb 9h às 15h"
};

// As duas lojas reais. O endereço exato entra quando o cliente mandar (o mapa busca pelo nome e bairro).
// Endereços de cadastros públicos da empresa (CNPJ matriz e filial). CONFIRMAR com o cliente:
// o número da loja do Ipiranga aparece como 115 no CNPJ e 120 em um guia.
const UNIDADES = [
  { nome: "Ipiranga", endereco: "Rua Almirante Mariath, 115 · Ipiranga", mapa: "Rua Almirante Mariath, 115, Ipiranga, São Paulo SP" },
  { nome: "Vila Independência", endereco: "Rua Aída, 288 · Vila Independência", mapa: "Rua Aída, 288, Vila Independência, São Paulo SP" }
];

// Animais vivos do site atual (preço e texto reais), só para conhecer e levar na loja.
// grupo: aves, pequenos ou peixes. kit = o que abre na loja em "Montar o enxoval".
// CONFIRMAR com o cliente se as duas lojas têm os mesmos animais.
const GRUPOS_ANIMAIS = [
  { id: "aves", nome: "Aves" },
  { id: "pequenos", nome: "Roedores e coelhos" },
  { id: "peixes", nome: "Peixes" }
];
const ANIMAIS = [
  { id: "calopsita-comum", grupo: "aves", nome: "Calopsita", foto: "a-7154573.jpg", pos: "50% 8%",
    frase: "Dócil, inteligente e muito companheira. Com carinho, aprende assobios e pequenos sons.",
    tracos: ["Dócil", "Assobia", "Para a família"], come: "Ração extrusada para calopsita, sementes e frutas permitidas.", kit: { busca: "calopsita" } },
  { id: "agapornis", grupo: "aves", nome: "Agapórnis", foto: "a-30518529.jpg",
    frase: "Pequeno, colorido e cheio de personalidade. Sociável, curioso e muito ativo.",
    tracos: ["Colorido", "Curioso", "Pequeno porte"], come: "Ração extrusada para psitacídeos pequenos, sementes, frutas e verduras.", kit: { busca: "agapor" } },
  { id: "periquito-australiano", grupo: "aves", nome: "Periquito australiano", foto: "a-28914189.jpg",
    frase: "Alegre, sociável e fácil de cuidar. Ótima primeira ave para a família.",
    tracos: ["Alegre", "Fácil de cuidar", "Pequeno porte"], come: "Ração extrusada para periquitos, sementes, frutas e verduras.", kit: { busca: "periquito" } },
  { id: "mini-coelho", grupo: "pequenos", nome: "Mini coelho", foto: "viva-mini-coelho.jpg",
    frase: "Dócil, carinhoso e tranquilo. Se adapta muito bem ao convívio da casa.",
    tracos: ["Dócil", "Tranquilo", "Carinhoso"], come: "Feno à vontade, ração para coelhos, verduras e legumes permitidos.", kit: { dep: "roedores" } },
  { id: "hamster-sirio-ou-chines", grupo: "pequenos", nome: "Hamster sírio ou chinês", foto: "viva-hamster-sirio-ou-chines.jpg",
    frase: "Curioso e ativo, adora explorar e correr. Fácil de cuidar com o ambiente certo.",
    tracos: ["Curioso", "Ativo", "Pouco espaço"], come: "Ração para hamster e alimentos permitidos para a espécie.", kit: { busca: "hamster" } },
  { id: "peixe-betta", grupo: "peixes", nome: "Peixe betta", foto: "viva-peixe-betta.jpg",
    frase: "Cores vibrantes e nadadeiras lindas. Vive bem em aquário individual bem cuidado.",
    tracos: ["Colorido", "Aquário individual", "Água doce"], come: "Ração própria para betta, em pouca quantidade.", kit: { busca: "betta" } }
];

// Fotos da primeira tela: aves (Pexels, licença livre) e os animais da própria loja (site atual).
const FOTOS_TOPO = [
  ["a-1316295.jpg", "Arara-canindé"], ["a-13550346.jpg", "Periquitos"], ["a-28914189.jpg", "Periquito"],
  ["a-30518529.jpg", "Agapornis"], ["pet-cao.jpg", "Cães"], ["a-6398822.jpg", "Canário"],
  ["viva-mini-coelho.jpg", "Mini coelho"], ["a-10252685.jpg", "Calopsita"], ["pet-gato.jpg", "Gatos"],
  ["a-16147936.jpg", "Periquito"], ["a-8838179.jpg", "Periquito"], ["a-625419.jpg", "Canário"],
  ["viva-hamster-sirio-ou-chines.jpg", "Hamster"], ["a-11961251.jpg", "Calopsita"], ["a-33953128.jpg", "Calopsitas"]
];

// "Qual é o seu pet?": cada um filtra a loja pelo departamento.
const PETS = [
  { id: "aves", nome: "Aves", foto: "a-7154573.jpg" },
  { id: "caes", nome: "Cães", foto: "pet-cao.jpg" },
  { id: "gatos", nome: "Gatos", foto: "pet-gato.jpg" },
  { id: "roedores", nome: "Roedores e coelhos", foto: "viva-mini-coelho.jpg" },
  { id: "peixes", nome: "Peixes", foto: "viva-peixe-betta.jpg" },
  { id: "repteis", nome: "Jabutis e tartarugas", foto: "prod-alcon-club-repteis-jabuti-300g.jpg" }
];

// Departamentos da loja (pílulas do catálogo). "vivos" fica fora: animais vivos só na loja física.
const DEPARTAMENTOS = [
  { id: "aves", nome: "Pássaros" },
  { id: "gaiolas", nome: "Gaiolas" },
  { id: "caes", nome: "Cães" },
  { id: "gatos", nome: "Gatos" },
  { id: "roedores", nome: "Roedores" },
  { id: "peixes", nome: "Peixes" },
  { id: "repteis", nome: "Répteis" }
];

// Corredores (rolagem horizontal): atalhos para a loja. filtro = departamento ou "torneio".
const CORREDORES = [
  { nome: "Alimentação das aves", texto: "Misturas, extrusados e farinhadas Nutripássaros, Sellecta e Alcon, além de minerais e vitaminas Avitrin.", filtro: "aves", fotos: ["prod-sellecta-extrusado-calopsita-natural-com-frutas-50.jpg", "a-17052115.jpg"] },
  { nome: "Linha torneio", texto: "Para o passarinheiro: curió, coleiro, trinca-ferro, bicudo e azulão. Alimento de torneio, ninhos e gaiolas de madeira.", filtro: "torneio", fotos: ["prod-alcon-club-curio-325gr.jpg", "prod-gaiola-amansadeira-torneio.jpg"] },
  { nome: "Gaiolas", texto: "Madeira, arame zincado e epóxi: do canário ao coelho, com 20 modelos para escolher.", filtro: "gaiolas", fotos: ["prod-gaiola-amansadeira-torneio.jpg", "a-16147936.jpg"] },
  { nome: "Cães", texto: "Rações Golden, Premier, Special Dog e mais, sachês, petiscos, antipulgas, higiene e brinquedos.", filtro: "caes", fotos: ["pet-cao.jpg", "galeria-cao.jpg"] },
  { nome: "Gatos", texto: "Rações para castrados e filhotes, sachês Whiskas, areia e higiene, antipulgas e brinquedos.", filtro: "gatos", fotos: ["pet-gato.jpg", "galeria-gato.jpg"] },
  { nome: "Pequenos pets", texto: "Roedores, coelhos, peixes, jabutis e tartarugas: ração, forração, aquário e acessórios.", filtro: "roedores", fotos: ["viva-mini-coelho.jpg", "viva-hamster-sirio-ou-chines.jpg"] }
];

const GALERIA = [
  ["a-1316295.jpg", "Arara-canindé"], ["a-30518529.jpg", "Casal de agapornis"], ["galeria-cao.jpg", "Cachorro feliz depois do banho"],
  ["a-11961251.jpg", "Calopsita no viveiro"], ["galeria-gato.jpg", "Gatinho"], ["a-17892832.jpg", "Arara-vermelha"],
  ["video", "Espaço para o vídeo da loja"], ["galeria-cao2.jpg", "Cachorro descansando"]
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
  document.body.classList.toggle("menu-aberto", aberto);
});
$$("a", menu).forEach(a => a.addEventListener("click", () => {
  menu.classList.remove("aberto"); btnMenu.setAttribute("aria-expanded", "false"); document.body.classList.remove("travado", "menu-aberto");
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

/* ---------- qual é o seu pet: filtra a loja pelo departamento ---------- */
const LOJA_ITENS = PRODUTOS.filter(p => p.dep !== "vivos");
(function pets() {
  const lista = $("#especies-lista");
  const itens = PETS.map(e => {
    const n = LOJA_ITENS.filter(p => p.dep === e.id || (e.id === "aves" && p.dep === "gaiolas")).length;
    return `<button class="especie" data-pet="${e.id}"><span class="bola"><img src="${e.foto}" alt="${e.nome}" loading="lazy" width="150" height="150"></span>${e.nome}<small>${n} produtos</small></button>`;
  }).join("");
  // carrossel: a lista vai duas vezes para girar sem emenda (a cópia fica escondida do leitor de tela)
  lista.innerHTML = itens + `<div class="especies-copia" aria-hidden="true">${itens.replace(/<button /g, '<button tabindex="-1" ')}</div>`;
  if (!semMovimento) {
    let parado = false, volta = null, pos = 0;
    const pausar = () => { parado = true; clearTimeout(volta); };
    const seguir = () => { clearTimeout(volta); volta = setTimeout(() => { parado = false; pos = lista.scrollLeft; }, 2500); };
    lista.addEventListener("pointerenter", e => { if (e.pointerType === "mouse") pausar(); });
    lista.addEventListener("pointerleave", seguir);
    lista.addEventListener("pointerdown", pausar);
    lista.addEventListener("pointerup", seguir);
    lista.addEventListener("touchstart", pausar, { passive: true });
    lista.addEventListener("touchend", seguir, { passive: true });
    lista.addEventListener("focusin", pausar);
    lista.addEventListener("focusout", seguir);
    const girar = () => {
      const metade = lista.scrollWidth / 2;
      if (!parado && metade > 0) {
        pos += .45;
        if (pos >= metade) pos -= metade;
        lista.scrollLeft = pos;
      } else if (parado && lista.scrollLeft >= metade) { lista.scrollLeft -= metade; }
      requestAnimationFrame(girar);
    };
    requestAnimationFrame(girar);
  }
  lista.addEventListener("click", ev => {
    const b = ev.target.closest(".especie"); if (!b) return;
    irParaLoja(b.dataset.pet);
  });
})();
function irParaLoja(filtro) {
  depFiltro = filtro; subFiltro = null; limite = POR_PAGINA;
  $$(".especie").forEach(x => x.classList.toggle("ativa", x.dataset.pet === filtro));
  desenharPilulas(); desenharLoja();
  $("#loja").scrollIntoView({ behavior: semMovimento ? "auto" : "smooth" });
}

/* ---------- corredores: rolagem vertical vira voo horizontal ---------- */
(function corredores() {
  const trilho = $("#corredores-trilho");
  trilho.innerHTML = CORREDORES.map((d, i) => `
    <article class="corredor">
      <div>
        <span class="corredor-num">0${i + 1}</span>
        <h3>${d.nome}</h3>
        <p>${d.texto}</p>
        <button class="btn btn-sol" data-dep="${d.filtro}">Ver ${d.nome.toLowerCase()}</button>
      </div>
      <div class="corredor-fotos"><img src="${d.fotos[0]}" alt="${d.nome}" loading="lazy" width="500" height="600"><img src="${d.fotos[1]}" alt="" loading="lazy" width="300" height="300"></div>
    </article>`).join("");
  trilho.addEventListener("click", e => {
    const b = e.target.closest("[data-dep]"); if (b) irParaLoja(b.dataset.dep);
  });
  if (semMovimento) return;
  const sec = $("#corredores"), ave = $("#voo-ave"), voo = $(".voo"), feito = $("#voo-feito"), dica = $("#voo-dica");
  // o corredor desliza para o lado (dedo, mouse ou trackpad) e a página segue rolando normal para baixo
  const livre = () => true;
  let pedido = false, ultimo = null, frente = 1, calma = null;
  const progresso = () => {
    if (livre()) {
      const max = trilho.scrollWidth - trilho.clientWidth;
      return { p: max > 0 ? Math.min(1, Math.max(0, trilho.scrollLeft / max)) : 0 };
    }
    const total = sec.offsetHeight - innerHeight;
    return { total, p: Math.min(1, Math.max(0, -sec.getBoundingClientRect().top / total)) };
  };
  const mover = () => {
    pedido = false;
    const { p } = progresso();
    if (!livre()) trilho.style.transform = `translate3d(${-p * (trilho.scrollWidth - innerWidth)}px,0,0)`;
    const largura = voo.clientWidth - ave.offsetWidth;
    // voa para o lado em que a pessoa está indo, batendo as asas mais rápido enquanto anda
    if (ultimo !== null && Math.abs(p - ultimo) > .0005) {
      frente = p > ultimo ? 1 : -1;
      ave.classList.add("voando");
      clearTimeout(calma); calma = setTimeout(() => ave.classList.remove("voando"), 260);
    }
    ultimo = p;
    const sobe = Math.sin(p * Math.PI * 6) * 8;
    const inclina = Math.cos(p * Math.PI * 6) * 8 * frente;
    ave.style.transform = `translate(${p * largura}px, ${sobe}px) rotate(${inclina}deg) scaleX(${frente})`;
    feito.style.width = (p * 100) + "%";
    if (p > .04) dica.classList.add("some");
  };
  const pedir = () => { if (!pedido) { pedido = true; requestAnimationFrame(mover); } };
  const aplicarModo = () => {
    sec.classList.toggle("corredores-livre", livre());
    if (livre()) trilho.style.transform = "";
    mover();
  };
  addEventListener("scroll", pedir, { passive: true });
  trilho.addEventListener("scroll", pedir, { passive: true });
  addEventListener("resize", pedir);
  aplicarModo();
  // no computador dá para arrastar os corredores com o mouse
  let arrasto = null;
  trilho.addEventListener("dragstart", e => e.preventDefault());
  trilho.addEventListener("pointerdown", e => {
    if (e.pointerType !== "mouse" || e.button !== 0 || e.target.closest("button, a")) return;
    arrasto = { x: e.clientX, sl: trilho.scrollLeft };
    trilho.style.scrollSnapType = "none"; trilho.style.scrollBehavior = "auto";
  });
  addEventListener("pointermove", e => {
    if (!arrasto) return;
    const dx = e.clientX - arrasto.x;
    if (Math.abs(dx) > 4) trilho.classList.add("arrastando");
    trilho.scrollLeft = arrasto.sl - dx;
  });
  addEventListener("pointerup", e => {
    if (!arrasto) return;
    const dx = e.clientX - arrasto.x, inicio = arrasto.sl;
    arrasto = null; trilho.classList.remove("arrastando");
    // solta no próximo corredor na direção do arrasto
    const pad = parseFloat(getComputedStyle(trilho).scrollPaddingLeft) || 0;
    const pontos = $$(".corredor", trilho).map(c => c.offsetLeft - trilho.offsetLeft - pad);
    let alvo = trilho.scrollLeft;
    if (dx < -40) alvo = pontos.find(x => x > inicio + 5) ?? pontos[pontos.length - 1];
    else if (dx > 40) alvo = [...pontos].reverse().find(x => x < inicio - 5) ?? 0;
    trilho.style.scrollBehavior = "";
    trilho.scrollTo({ left: alvo, behavior: "smooth" });
    setTimeout(() => { trilho.style.scrollSnapType = ""; }, 600);
  });
  // arrastar o passarinho (dedo ou mouse) leva a pessoa pelos corredores
  let pega = null;
  ave.addEventListener("pointerdown", e => {
    e.preventDefault();
    const r = ave.getBoundingClientRect();
    pega = { id: e.pointerId, dx: e.clientX - r.left };
    ave.setPointerCapture(e.pointerId);
    document.documentElement.style.scrollBehavior = "auto";
    trilho.style.scrollSnapType = "none"; trilho.style.scrollBehavior = "auto";
  });
  ave.addEventListener("pointermove", e => {
    if (!pega || e.pointerId !== pega.id) return;
    const caixa = voo.getBoundingClientRect();
    const largura = caixa.width - ave.offsetWidth;
    const f = Math.min(1, Math.max(0, (e.clientX - caixa.left - pega.dx) / largura));
    if (livre()) { trilho.scrollLeft = f * (trilho.scrollWidth - trilho.clientWidth); return; }
    scrollTo(0, sec.getBoundingClientRect().top + scrollY + f * progresso().total);
  });
  const soltar = () => {
    pega = null; document.documentElement.style.scrollBehavior = "";
    trilho.style.scrollSnapType = ""; trilho.style.scrollBehavior = "";
  };
  ave.addEventListener("pointerup", soltar);
  ave.addEventListener("pointercancel", soltar);
})();

/* ---------- animais vivos: escolher o grupo e a loja, conhecer e levar ---------- */
(function vivos() {
  let grupo = "aves", loja = 0;
  const preco = id => (PRODUTOS.find(p => p.id === id) || {}).preco;
  const desenharGrupos = () => {
    $("#vivos-grupos").innerHTML = GRUPOS_ANIMAIS.map(g => {
      const n = ANIMAIS.filter(a => a.grupo === g.id).length;
      return `<button type="button" class="${g.id === grupo ? "ativa" : ""}" data-g="${g.id}" aria-pressed="${g.id === grupo}">${g.nome}<small>${n}</small></button>`;
    }).join("");
    $("#vivos-lojas").innerHTML = UNIDADES.map((u, i) => `<button type="button" class="${i === loja ? "ativa" : ""}" data-l="${i}" aria-pressed="${i === loja}">${u.nome}</button>`).join("");
  };
  const desenhar = () => {
    const unidade = UNIDADES[loja].nome;
    $("#vivos-lista").innerHTML = ANIMAIS.filter(a => a.grupo === grupo).map((a, i) => `
      <article class="vivo" style="--i:${i}">
        <div class="vivo-foto"><img src="${a.foto}" alt="${a.nome}" loading="lazy" width="500" height="500"${a.pos ? ` style="object-position:${a.pos}"` : ""}><span class="vivo-preco">${reais(preco(a.id))}</span></div>
        <div class="vivo-corpo">
          <h3>${a.nome}</h3>
          <p>${a.frase}</p>
          <ul class="vivo-tracos">${a.tracos.map(t => `<li>${t}</li>`).join("")}</ul>
          <p class="vivo-come"><strong>Alimentação:</strong> ${a.come}</p>
          <div class="vivo-acoes">
            <a class="btn btn-sol" href="${whats(`Olá, ${LOJA.curto}! Vi no site: ${a.nome}. Tem disponível na loja ${unidade}? Quero ir conhecer.`)}" target="_blank" rel="noopener">Quero conhecer</a>
            <button type="button" class="btn btn-linha" data-kit="${a.id}">Montar o enxoval</button>
          </div>
        </div>
      </article>`).join("");
  };
  $("#vivos-grupos").addEventListener("click", e => { const b = e.target.closest("[data-g]"); if (!b) return; grupo = b.dataset.g; desenharGrupos(); desenhar(); });
  $("#vivos-lojas").addEventListener("click", e => { const b = e.target.closest("[data-l]"); if (!b) return; loja = +b.dataset.l; desenharGrupos(); desenhar(); });
  $("#vivos-lista").addEventListener("click", e => {
    const b = e.target.closest("[data-kit]"); if (!b) return;
    const k = ANIMAIS.find(a => a.id === b.dataset.kit).kit;
    if (k.dep) { busca = ""; $("#busca").value = ""; irParaLoja(k.dep); return; }
    depFiltro = "todos"; subFiltro = null; limite = POR_PAGINA; busca = k.busca; $("#busca").value = k.busca;
    $$(".especie").forEach(x => x.classList.remove("ativa")); desenharPilulas(); desenharLoja();
    $("#loja").scrollIntoView({ behavior: semMovimento ? "auto" : "smooth" });
  });
  desenharGrupos(); desenhar();
})();

/* ---------- loja ---------- */
const POR_PAGINA = 24;
let depFiltro = "todos", subFiltro = null, busca = "", limite = POR_PAGINA;
const nomeFiltro = id => id === "todos" ? "Tudo" : id === "torneio" ? "Linha torneio" : (DEPARTAMENTOS.find(d => d.id === id) || {}).nome || id;
function desenharPilulas() {
  const deps = [{ id: "todos", nome: "Tudo" }, ...DEPARTAMENTOS, { id: "torneio", nome: "Linha torneio" }];
  $("#pilulas").innerHTML = deps.map(d => `<button class="pilula ${d.id === depFiltro ? "ativa" : ""}" data-dep="${d.id}" aria-pressed="${d.id === depFiltro}"><span>${d.nome}</span></button>`).join("");
  // subcategorias do departamento escolhido
  const subs = [...new Set(LOJA_ITENS.filter(p => p.dep === depFiltro && p.sub).map(p => p.sub))].sort();
  const box = $("#subpilulas");
  box.hidden = subs.length < 2;
  box.innerHTML = subs.map(s => `<button class="sub ${s === subFiltro ? "ativa" : ""}" data-sub="${s}" aria-pressed="${s === subFiltro}">${s}</button>`).join("");
}
$("#pilulas").addEventListener("click", e => {
  const b = e.target.closest(".pilula"); if (!b) return;
  depFiltro = b.dataset.dep; subFiltro = null; limite = POR_PAGINA;
  $$(".especie").forEach(x => x.classList.toggle("ativa", x.dataset.pet === depFiltro));
  desenharPilulas(); desenharLoja();
});
$("#subpilulas").addEventListener("click", e => {
  const b = e.target.closest(".sub"); if (!b) return;
  subFiltro = subFiltro === b.dataset.sub ? null : b.dataset.sub; limite = POR_PAGINA;
  desenharPilulas(); desenharLoja();
});
$("#busca").addEventListener("input", e => { busca = e.target.value.trim().toLowerCase(); limite = POR_PAGINA; desenharLoja(); });
$("#ver-mais").addEventListener("click", () => { limite += POR_PAGINA; desenharLoja(true); });
const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const nomeDep = id => (DEPARTAMENTOS.find(d => d.id === id) || {}).nome || "";

function filtrados() {
  return LOJA_ITENS.filter(p =>
    (depFiltro === "todos" || (depFiltro === "torneio" ? p.torneio : p.dep === depFiltro)) &&
    (!subFiltro || p.sub === subFiltro) &&
    (!busca || norm(p.nome + " " + p.marca + " " + p.sub + " " + nomeDep(p.dep)).includes(norm(busca))));
}
function desenharLoja(maisItens) {
  const todos = filtrados(), lista = todos.slice(0, limite);
  const fa = $("#filtro-ave");
  fa.hidden = false;
  fa.innerHTML = `${todos.length} ${todos.length === 1 ? "produto" : "produtos"}${depFiltro !== "todos" ? ` em ${nomeFiltro(depFiltro)}${subFiltro ? " · " + subFiltro : ""}` : ""}${depFiltro !== "todos" || busca ? ` <button type="button" id="limpa-ave">limpar ×</button>` : ""}`;
  const ja = maisItens ? $$(".produto").length : 0;
  const html = lista.slice(ja).map(p => `<article class="produto" data-id="${p.id}" tabindex="0" aria-label="${p.nome}">
      <div class="produto-foto"><img src="${p.foto}" alt="${p.nome}" loading="lazy" width="400" height="400"><span class="selo-ave">${p.sub || nomeDep(p.dep)}</span></div>
      <div class="produto-info"><small>${nomeDep(p.dep)}${p.marca ? " · " + p.marca : ""}</small><h3>${p.nome}</h3>
        <span class="estoque-mini${p.estoque === "pronta" ? " pronta" : ""}">${p.estoque === "pronta" ? "Pronta entrega" : "Sob encomenda"}</span>
        <div class="produto-linha"><span class="preco">${reais(p.preco)}</span><button class="add-rapido" data-add="${p.id}" aria-label="Adicionar ${p.nome}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg></button></div>
      </div></article>`).join("");
  if (maisItens) $("#grade").insertAdjacentHTML("beforeend", html); else $("#grade").innerHTML = html;
  $("#vazio").hidden = todos.length > 0;
  $("#ver-mais").hidden = lista.length >= todos.length;
  $("#ver-mais").textContent = `Ver mais ${Math.min(POR_PAGINA, todos.length - lista.length)} produtos`;
  $$(".produto:not(.visivel)").forEach((el, i) => setTimeout(() => el.classList.add("visivel"), 40 * Math.min(i, 12)));
}
document.addEventListener("click", e => {
  if (e.target.id === "limpa-ave") {
    depFiltro = "todos"; subFiltro = null; busca = ""; $("#busca").value = ""; limite = POR_PAGINA;
    $$(".especie").forEach(x => x.classList.remove("ativa")); desenharPilulas(); desenharLoja();
  }
});
const acharProduto = id => PRODUTOS.find(x => x.id === id);
$("#grade").addEventListener("click", e => {
  const add = e.target.closest("[data-add]");
  if (add) { e.stopPropagation(); adicionar(acharProduto(add.dataset.add), 1, add); return; }
  const card = e.target.closest(".produto"); if (card) abrirProduto(card.dataset.id);
});
$("#grade").addEventListener("keydown", e => {
  const card = e.target.closest(".produto"); if (card && (e.key === "Enter" || e.key === " ") && !e.target.closest("button")) { e.preventDefault(); abrirProduto(card.dataset.id); }
});

/* ---------- produto aberto ---------- */
let atual = null, qtd = 1, ultimoFoco = null;
function abrirProduto(id) {
  atual = acharProduto(id); qtd = 1; ultimoFoco = document.activeElement;
  $("#mp-img").src = atual.foto; $("#mp-img").alt = atual.nome;
  $("#mp-nome").textContent = atual.nome; $("#mp-desc").textContent = atual.desc || "Fale com a gente no WhatsApp para saber mais sobre este produto.";
  $("#mp-ideal").innerHTML = `<span>${nomeDep(atual.dep)}${atual.sub ? " · " + atual.sub : ""}</span>${atual.marca ? `<span>Marca: <strong>${atual.marca}</strong></span>` : ""}<span>Cód. ${atual.cod}</span><span class="estoque ${atual.estoque}">${atual.estoque === "pronta" ? "Pronta entrega" : "Sob encomenda · 3 dias úteis"}</span>`;
  atualizarModal();
  $("#modal-produto").hidden = false; document.body.classList.add("travado");
  $("#modal-produto .fechar").focus();
}
function atualizarModal() { $("#mp-qtd").textContent = qtd; $("#mp-preco").textContent = reais(atual.preco * qtd); }
function fecharProduto() {
  $("#modal-produto").hidden = true; document.body.classList.remove("travado");
  if (ultimoFoco) ultimoFoco.focus();
}
$("#mp-menos").addEventListener("click", () => { qtd = Math.max(1, qtd - 1); atualizarModal(); });
$("#mp-mais").addEventListener("click", () => { qtd++; atualizarModal(); });
$("#mp-add").addEventListener("click", e => { adicionar(atual, qtd, e.currentTarget); fecharProduto(); });
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
let carrinho = guarda.ler("bird-carrinho", []).filter(i => acharProduto(i.id));
function adicionar(p, q, origem) {
  const ja = carrinho.find(i => i.id === p.id);
  if (ja) ja.qtd += q; else carrinho.push({ id: p.id, qtd: q });
  salvarCarrinho(); voarPena(origem);
  toast(`${p.nome} no pedido`);
}
function salvarCarrinho() { guarda.salvar("bird-carrinho", carrinho); desenharCarrinho(); }
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
  const total = carrinho.reduce((s, i) => s + acharProduto(i.id).preco * i.qtd, 0);
  $("#total").textContent = reais(total); $("#pg-total").textContent = reais(total);
  $("#carrinho-pe").hidden = n === 0;
  $("#carrinho-itens").innerHTML = n === 0
    ? `<div class="carrinho-vazio"><img src="logo.png" alt="" width="120" height="120">Seu pedido está vazio.<br>Escolha algo na loja.</div>`
    : carrinho.map(i => {
      const p = acharProduto(i.id);
      return `<div class="item"><img src="${p.foto}" alt=""><div><h4>${p.nome}</h4><small>${reais(p.preco)} cada · ${reais(p.preco * i.qtd)}</small></div>
        <div class="qtd"><button data-menos="${i.id}" aria-label="Menos">−</button><span>${i.qtd}</span><button data-mais="${i.id}" aria-label="Mais">+</button></div></div>`;
    }).join("");
}
$("#carrinho-itens").addEventListener("click", e => {
  const m = e.target.closest("[data-menos]"), p = e.target.closest("[data-mais]");
  if (m) { const i = carrinho.find(x => x.id === m.dataset.menos); i.qtd--; if (i.qtd <= 0) carrinho = carrinho.filter(x => x !== i); salvarCarrinho(); }
  if (p) { carrinho.find(x => x.id === p.dataset.mais).qtd++; salvarCarrinho(); }
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
  const linhas = carrinho.map(i => { const p = acharProduto(i.id); return `• ${i.qtd}x ${p.nome} (cód. ${p.cod}) = ${reais(p.preco * i.qtd)}`; });
  const total = $("#total").textContent;
  const msg = `Olá, ${LOJA.curto}! Quero fazer um pedido pelo site:\n\n${linhas.join("\n")}\n\nTotal: ${total}\nComo receber: ${entrega}${nome ? `\nNome: ${nome}` : ""}`;
  window.open(whats(msg), "_blank", "noopener");
});
$("#pagar-online").addEventListener("click", () => { $("#carrinho-pe").hidden = true; $("#pagamento").hidden = false; });
$("#voltar-pedido").addEventListener("click", () => { $("#pagamento").hidden = true; $("#carrinho-pe").hidden = false; });
$$(".pg-abas button").forEach(b => b.addEventListener("click", () => {
  $$(".pg-abas button").forEach(x => x.classList.toggle("ativa", x === b));
  $("#pg-pix").hidden = b.dataset.pg !== "pix"; $("#pg-cartao").hidden = b.dataset.pg !== "cartao";
}));

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
  const msg = `Olá, ${LOJA.curto}! Sou ${$("#ct-nome").value.trim()}.\nAssunto: ${$("#ct-assunto").value}\n\n${$("#ct-msg").value.trim()}`;
  window.open(whats(msg), "_blank", "noopener");
});
(function horario() {
  $("#horario-texto").textContent = LOJA.horarioTexto;
  $("#entrega-texto").textContent = LOJA.entrega;
  $("#whats-texto").textContent = LOJA.whatsappTexto;
  $("#email-texto").textContent = LOJA.email; $("#email-texto").href = "mailto:" + LOJA.email;
  // abas das duas lojas: trocam o mapa
  const abas = $("#unidades"), mapa = $("#mapa-frame");
  const mostrar = i => {
    $$("button", abas).forEach((b, j) => { b.classList.toggle("ativa", i === j); b.setAttribute("aria-pressed", i === j); });
    mapa.src = "https://maps.google.com/maps?q=" + encodeURIComponent(UNIDADES[i].mapa) + "&z=16&output=embed";
    $("#endereco-texto").textContent = UNIDADES[i].endereco;
    mapa.title = "Mapa da loja " + UNIDADES[i].nome;
  };
  abas.innerHTML = UNIDADES.map((u, i) => `<button type="button" data-u="${i}">Loja ${u.nome}</button>`).join("");
  abas.addEventListener("click", e => { const b = e.target.closest("[data-u]"); if (b) mostrar(+b.dataset.u); });
  mostrar(0);
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

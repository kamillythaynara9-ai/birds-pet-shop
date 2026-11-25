# Bird Pet Shop & Avicultura · Site com Catálogo (protótipo DERS)

Conceito: "abrir as asas". Uma pena cai, vira a logo e o site se abre como duas asas. Céu azul da logo, verde e amarelo do papagaio, penas flutuando.

Em 25/11/2026 o protótipo recebeu os dados reais do site atual da loja (birdpetshop.com.br): ver `analise-site-original.md` e a pasta `site-original/` no projeto.

## O que é real
- Nome (Bird Pet Shop & Avicultura), razão social e CNPJ, logo, Instagram @petshopbird, e-mail, telefone (11) 96035-8956.
- Duas lojas: Ipiranga e Vila Independência (o mapa busca pelo nome e bairro).
- Banho e tosa; delivery em São Paulo, ABCD e arredores.
- Catálogo completo: 250 produtos com nome, código, marca, preço, estoque e descrição (`produtos.js`) e as fotos do próprio site (`prod-*.jpg`).
- Animais vivos (calopsita, agapórnis, periquito, mini coelho, hamster, betta) com preço, só para conhecer na loja (`viva-*.jpg`).
- Linha torneio (curió, coleiro, trinca-ferro, bicudo, azulão) marcada nos produtos.

## O que é exemplo e precisa confirmar ou trocar
- WhatsApp: o formulário trouxe (11) 97766-4646 e o site atual mostra (11) 96035-8956. Hoje o botão usa o do formulário (LOJA.whatsapp).
- Horário de funcionamento (LOJA.horario e LOJA.horarioTexto).
- Endereços (UNIDADES): vieram de cadastros públicos (CNPJ). Ipiranga, Rua Almirante Mariath 115 (um guia diz 120), e Vila Independência, Rua Aída 288. Confirmar.
- Fotos de cães, gatos, banho e tosa e das aves no topo: banco Pexels (licença livre). Trocar pelas fotos das lojas.
- Vídeo da galeria (espaço marcado) e depoimentos (espaço marcado).
- Pagamento online: tela de exemplo.

## Onde mexer
- Catálogo: `produtos.js` (dep = departamento, sub = subcategoria, estoque = "pronta" ou "encomenda", torneio = linha torneio).
- Conteúdo: LOJA, UNIDADES, FOTOS_TOPO, PETS, DEPARTAMENTOS, CORREDORES, GALERIA no topo do `script.js`.
- Cores e fontes: variáveis no :root do `styles.css` (com versão para modo escuro).
- Link: https://birds-pet-shop.vercel.app (repositório kamillythaynara9-ai/birds-pet-shop).
- Agendamento de banho e tosa: tirado (o site atual não tem). Pode entrar depois como proposta de sistema.
- Animais vivos (ANIMAIS no script.js): mesmos 6 do site atual, por grupo, com escolha da loja. Confirmar se as duas lojas têm os mesmos animais e se há outros (canário, mandarim, peixes etc.).

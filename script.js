/* ==========================================================================
   CASAL DOS MIMOS - CATÁLOGO DE PRODUTOS & LÓGICA DO SITE
   ========================================================================== */

/**
 * PARA ADICIONAR UM NOVO PRODUTO:
 * Copie um dos blocos abaixo e cole no final da lista 'produtosCasalMimos'.
 * Garanta que o 'id' seja um número único.
 */
const produtosCasalMimos = [
    /* ================= BOLOS DECORADOS ================= */
    {
        id: 1,
        nome: "Bolo de Chocolate Vulcânico (Tamanho 20)",
        categoria: "bolos",
        descricao: "Delicioso bolo de chocolate molhadinho tamanho 20 com bastante cobertura cremosa de brigadeiro gourmet.",
        precoBase: 850,
        imagens: ["img/bolocase.jpeg", "img/bolocase1.jpeg"],
        opcoes: {
            tamanhos: [
                { nome: "Tamanho 20 (Tradicional)", preco: 850 },
                { nome: "Tamanho 22 (Extra Recheio)", preco: 1200 }
            ]
        }
    },
    {
        id: 2,
        nome: "Bolo Temático Personalizado",
        categoria: "bolos",
        descricao: "Bolos de aniversário e infantis decorados com chantilly ou pasta de açúcar (Minnie, Aniversário Adulto, etc.).",
        precoBase: 1200,
        imagens: ["img/bolo3andares.jpeg", "imagens/boloaniver.jpeg"],
        opcoes: {
            tamanhos: [
                { nome: "Forma P (10 a 15 Pessoas)", preco: 1200 },
                { nome: "Forma M (15 a 25 Pessoas)", preco: 2000 },
                { nome: "Forma G (2 Andares / Especial)", preco: 3200 }
            ],
            sabores: ["Chocolate", "Baunilha", "Red Velvet", "Morango"]
        }
    },
    {
        id: 6,
        nome: "Bolo no Pote",
        categoria: "bolos",
        descricao: "Delicioso bolo no pote individual com recheio cremoso e sabor inigualável.",
        precoBase: 100,
        imagens: ["img/bolopote1.jpeg", "img/bolopote2.jpeg"]
    },
    {
        id: 7,
        nome: "Bolo Sexy para Casados",
        categoria: "bolos",
        descricao: "Bolo temático divertido e personalizado para comemorações a dois e momentos especiais.",
        precoBase: 350,
        imagens: ["img/casa.jpeg"]
    },
    {
        id: 8,
        nome: "Bolo Simples / Padrão",
        categoria: "bolos",
        descricao: "Bolo tradicional fofinho, perfeito para encontros simples e lanches em família.",
        precoBase: 550,
        imagens: ["img/bolo12.jpeg"],
        opcoes: {
            tamanhos: [
                { nome: "Tamanho Mini (550 MT)", preco: 550 },
                { nome: "Tamanho Pequeno (1.000 MT)", preco: 1000 },
                { nome: "Tamanho Médio Padrão (1.100 MT)", preco: 1100 },
                { nome: "Tamanho Médio Plus (1.500 MT)", preco: 1500 },
                { nome: "Tamanho Grande (1.800 MT)", preco: 1800 },
                { nome: "Tamanho Extra Grande (2.000 MT)", preco: 2000 }
            ]
        }
    },
    {
        id: 9,
        nome: "Bolos de Graduações",
        categoria: "bolos",
        descricao: "Bolo decorado especialmente para celebrar momentos inesquecíveis de graduação e conquistas acadêmicas.",
        precoBase: 600,
        imagens: ["img/grad.jpeg", "img/grand1.jpeg"],
        opcoes: {
            tamanhos: [
                { nome: "Tamanho Pequeno (600 MT)", preco: 600 },
                { nome: "Tamanho Médio (1.200 MT)", preco: 1200 }
            ]
        }
    },
    {
        id: 10,
        nome: "Bolo Floresta Negra (T18)",
        categoria: "bolos",
        descricao: "Clássico bolo Floresta Negra tamanho 18 com raspas de chocolate e recheio especial.",
        precoBase: 750,
        imagens: ["imagens/florestanegra.jpeg"]
    },
    {
        id: 11,
        nome: "Bolo Caseiro",
        categoria: "bolos",
        descricao: "Bolo caseiro quentinho, macio e fofinho, feito com receita tradicional.",
        precoBase: 850,
        imagens: ["imagens/bolocaseiro.jpeg"]
    },
    {
        id: 12,
        nome: "Bolo Mini 3 Andares",
        categoria: "bolos",
        descricao: "Elegante bolo em miniatura de 3 andares, lindo para fotos e momentos exclusivos.",
        precoBase: 1500,
        imagens: ["img/bolo15.jpeg","img/bolo1_5.jpeg"]
    },
    {
        id: 13,
        nome: "Bolo Tamanho 16",
        categoria: "bolos",
        descricao: "Bolo tamanho 16 decorado ao seu gosto, ideal para pequenas reuniões de aniversário.",
        precoBase: 2000,
        imagens: ["img/bolo1.jpeg"]
    },
  
    {
        id: 15,
        nome: "Bolo Quadrado",
        categoria: "bolos",
        descricao: "Bolo de grande dimensão em formato quadrado, rende muitas fatias para grandes festas.",
        precoBase: 7000,
        imagens: ["img/boloqua.jpeg","img/boloqua1.jpeg"]
    },

    /* ================= KITS, MIMOS E COMBOS ================= */
    {
        id: 3,
        nome: "Cabaz Surpresa Especial de Mimos",
        categoria: "cabazes",
        descricao: "Cabaz romântico ou matinal completo com frutas de época, espumante/vinho, bolo caseiro, chocolates e salgados.",
        precoBase: 1500,
        imagens: ["img/mimo2.jpeg", "img/mimo2.jpeg","img/bandeja2.jpeg"],
        opcoes: {
            tamanhos: [
                { nome: "Cabaz Mimo Simples", preco: 1500 },
                { nome: "Cabaz Mimo Premium c/ Vinho e Bolo", preco: 2500 },
                { nome: "Cabaz Mimo Luxo Super Completo", preco: 3800 }
            ]
        }
    },
    {
        id: 16,
        nome: "Buquê de Flores / Mimos",
        categoria: "cabazes",
        descricao: "Lindo buquê preparado com todo o carinho para surpreender e encantar quem você ama.",
        precoBase: 550,
        imagens: ["img/buq.jpeg"]
    },
    {
        id: 17,
        nome: "Kit Jackpot (Promoção)",
        categoria: "cabazes",
        descricao: "Combo promocional completo: inclui 2 bolos deliciosos, 1 pizza bem recheada e 8 salgados crocantes.",
        precoBase: 950,
        imagens: ["img/mimopiz.jpeg"]
    },
    {
        id: 18,
        nome: "Combo Bolo + Buquê",
        categoria: "cabazes",
        descricao: "Combinação perfeita contendo um bolo especial acompanhado de um lindo buquê presenteável.",
        precoBase: 1350,
        imagens: ["img/boque+bolo.jpeg"]
    },
    {
        id: 19,
        nome: "Bolos & Salgados (Final de Ano)",
        categoria: "cabazes",
        descricao: "Combo festivo de final de ano reunindo a combinação ideal de bolo decorado e salgados variados.",
        precoBase: 1500,
        imagens: ["img/finalano.jpeg"]
    },
    {
        id: 20,
        nome: "Mimos (Kits variados)",
        categoria: "cabazes",
        descricao: "Kits de mimos personalizados com chocolates, doces e pequenos presentes decorados.",
        precoBase: 300,
        imagens: ["img/mimo.jpeg"],
        opcoes: {
            tamanhos: [
                { nome: "Kit Mimo Simples (300 MT)", preco: 300 },
                { nome: "Kit Mimo Especial (550 MT)", preco: 550 },
                { nome: "Kit Mimo Plus (850 MT)", preco: 850 },
                { nome: "Kit Mimo Super Luxo (1.200 MT)", preco: 1200 }
            ]
        }
    },
    /* ================= SALGADOS & PIZZAS ================= */
    {
        id: 4,
        nome: "Salgados Variados (Dúzia)",
        categoria: "salgados",
        descricao: "Salgados crocantes e quentinhos. Escolha entre Chamuças de carne/frango, Ressóis de camarão e Coxinhas.",
        precoBase: 350,
        imagens: ["img/salg13.jpeg"],
        opcoes: {
            tamanhos: [
                { nome: "Chamuças de Carne (Dúzia)", preco: 350 },
                { nome: "Ressóis de Camarão (Dúzia)", preco: 400 },
                { nome: "Coxinhas de Frango (Dúzia)", preco: 350 },
                { nome: "Combo Variado (24 Salgados)", preco: 700 }
            ]
        }
    },
    {
        id: 5,
        nome: "Pizzas Artesanais Mimos",
        categoria: "salgados",
        descricao: "Pizzas bem recheadas com queijo derretido e molho de tomate caseiro especial do Casal dos Mimos.",
        precoBase: 450,
        imagens: ["img/minipizza.webp"],
        opcoes: {
            tamanhos: [
                { nome: "Pizza Média de Frango e Queijo", preco: 450 },
                { nome: "Pizza Média de Calabreza", preco: 450 },
                { nome: "Pizza Grande Especial Maura's", preco: 650 }
            ]
        }
    }
];

/* ==========================================================================
   ESTADO GLOBAL DA APLICAÇÃO
   ========================================================================== */
let categoriaAtual = 'todos';
let carrinho = [];
let produtoSelecionadoTemp = null;
let precoCalculadoTemp = 0;
let ultimoCalculoEvento = null;

const IMG_FALLBACK = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop";

/* ==========================================================================
   INICIALIZAÇÃO & EVENTOS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    renderizarProdutos(produtosCasalMimos);
});

function tratarErroImagem(imgElement) {
    imgElement.onerror = null;
    imgElement.src = IMG_FALLBACK;
}

function abrirZoom(src) {
    const modal = document.getElementById('modalZoom');
    const img = document.getElementById('imgModalZoom');
    if (img && modal) {
        img.src = src;
        modal.classList.remove('hidden');
    }
}

function fecharZoom() {
    const modal = document.getElementById('modalZoom');
    if (modal) modal.classList.add('hidden');
}

/* ==========================================================================
   RENDERIZAÇÃO & FILTROS DE PRODUTOS
   ========================================================================== */
function renderizarProdutos(lista) {
    const container = document.getElementById('lista-produtos');
    if (!container) return;

    container.innerHTML = "";

    if (!lista || lista.length === 0) {
        container.innerHTML = `<p class="col-span-full text-center text-gray-400 italic py-12 text-sm">Nenhum produto encontrado nesta categoria.</p>`;
        return;
    }

    lista.forEach(p => {
        const fotosArray = p.imagens && p.imagens.length > 0 ? p.imagens : [IMG_FALLBACK];
        const pId = p.id;

        const card = document.createElement('div');
        card.className = "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 flex flex-col justify-between transition-all duration-300 group";

        card.innerHTML = `
            <div>
                <div class="relative overflow-hidden aspect-[4/3] bg-gray-50">
                    <img id="img-slide-${pId}" src="${fotosArray[0]}" onerror="tratarErroImagem(this)" onclick="abrirZoom(this.src)" alt="${p.nome}" class="img-fade w-full h-full object-cover group-hover:scale-105 cursor-zoom-in">
                    <span class="absolute top-3 right-3 bg-mimos text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider z-10 border border-mimos-gold">${p.categoria}</span>
                </div>
                <div class="p-4 sm:p-5 space-y-1.5">
                    <h3 class="text-base font-bold text-gray-900 group-hover:text-mimos transition-colors">${p.nome}</h3>
                    <p class="text-gray-500 text-xs leading-relaxed line-clamp-3">${p.descricao}</p>
                </div>
            </div>
            <div class="p-4 sm:p-5 pt-0 flex items-center justify-between mt-2">
                <div>
                    <span class="text-[10px] text-gray-400 block">Preço</span>
                    <span class="text-base sm:text-lg font-extrabold text-mimos">${parseFloat(p.precoBase).toLocaleString('pt-MZ')} Mt</span>
                </div>
                <button onclick="abrirModalOpcoes(${p.id})" class="bg-mimos hover:bg-mimos-dark text-white px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl font-semibold text-xs transition duration-300 flex items-center gap-2 shadow-sm">
                    <i class="fa-solid fa-plus"></i> Opções
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

function filtrarCategoria(categoria, btnElement) {
    categoriaAtual = categoria;
    const campoBusca = document.getElementById('campo-busca');
    if (campoBusca) campoBusca.value = "";

    document.querySelectorAll('.btn-cat').forEach(b => {
        b.className = "btn-cat shrink-0 px-4 py-2 rounded-xl font-medium text-gray-500 hover:text-mimos text-xs sm:text-sm transition";
    });

    if (btnElement) {
        btnElement.className = "btn-cat shrink-0 px-4 py-2 rounded-xl font-bold bg-mimos text-white text-xs sm:text-sm transition shadow-sm";
    }

    filtrarProdutos();
}

function filtrarProdutos() {
    const campoBusca = document.getElementById('campo-busca');
    const termo = campoBusca ? campoBusca.value.toLowerCase().trim() : "";
    let dados = produtosCasalMimos;

    if (categoriaAtual !== 'todos') {
        dados = dados.filter(p => p.categoria.toLowerCase() === categoriaAtual.toLowerCase());
    }

    if (termo !== "") {
        dados = dados.filter(p => 
            p.nome.toLowerCase().includes(termo) || 
            p.descricao.toLowerCase().includes(termo)
        );
    }

    renderizarProdutos(dados);
}

/* ==========================================================================
   MODAL DE PERSONALIZAÇÃO
   ========================================================================== */
function abrirModalOpcoes(idProduto) {
    const produto = produtosCasalMimos.find(p => p.id === idProduto);
    if (!produto) return;

    produtoSelecionadoTemp = JSON.parse(JSON.stringify(produto));
    document.getElementById('modalOpcoesTitulo').innerText = produto.nome;
    const corpo = document.getElementById('modalOpcoesCorpo');
    corpo.innerHTML = "";

    if (produto.opcoes && produto.opcoes.tamanhos) {
        let htmlGrupo = `<div class="space-y-2">
            <label class="block text-xs font-bold text-mimos uppercase tracking-wider">Escolha a Opção / Tamanho:</label>
            <div class="space-y-2">`;
        
        produto.opcoes.tamanhos.forEach((op, idx) => {
            const checked = idx === 0 ? 'checked' : '';
            htmlGrupo += `
                <label class="flex items-center justify-between p-3 border rounded-xl cursor-pointer hover:border-mimos transition bg-white">
                    <div class="flex items-center gap-2.5">
                        <input type="radio" name="opcaoPrincipal" value="${op.nome}" data-preco="${op.preco}" ${checked} onchange="atualizarPrecoModal()" class="accent-mimos w-4 h-4">
                        <span class="text-xs sm:text-sm font-semibold text-gray-700">${op.nome}</span>
                    </div>
                    <span class="text-xs sm:text-sm font-bold text-mimos">${op.preco.toLocaleString('pt-MZ')} Mt</span>
                </label>
            `;
        });
        htmlGrupo += `</div></div>`;
        corpo.innerHTML += htmlGrupo;
    }

    corpo.innerHTML += `
        <div class="space-y-2 pt-1">
            <label class="block text-xs font-bold text-mimos uppercase tracking-wider">Mensagem para o Cartão / Detalhes:</label>
            <textarea id="obsProduto" rows="2" placeholder="Ex: Escrever 'Parabéns Maria!' no bolo..." class="w-full p-3 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-mimos"></textarea>
        </div>
    `;

    atualizarPrecoModal();
    document.getElementById('modalOpcoes').classList.remove('hidden');
}

function fecharModalOpcoes() {
    document.getElementById('modalOpcoes').classList.add('hidden');
}

function atualizarPrecoModal() {
    const radioSelecionado = document.querySelector('input[name="opcaoPrincipal"]:checked');
    if (radioSelecionado) {
        precoCalculadoTemp = parseFloat(radioSelecionado.getAttribute('data-preco'));
    } else {
        precoCalculadoTemp = produtoSelecionadoTemp.precoBase;
    }
    document.getElementById('modalOpcoesPreco').innerText = `${precoCalculadoTemp.toLocaleString('pt-MZ')} Mt`;
}

function confirmarAdicaoCarrinho() {
    const radioSelecionado = document.querySelector('input[name="opcaoPrincipal"]:checked');
    const obsElement = document.getElementById('obsProduto');
    const obs = obsElement ? obsElement.value.trim() : "";

    let detalhes = [];
    if (radioSelecionado) detalhes.push(radioSelecionado.value);
    if (obs) detalhes.push(`Obs: ${obs}`);

    const itemParaCarrinho = {
        idCart: Date.now(),
        id: produtoSelecionadoTemp.id,
        nome: produtoSelecionadoTemp.nome,
        detalhes: detalhes.join(' | '),
        preco: precoCalculadoTemp,
        qtd: 1
    };

    carrinho.push(itemParaCarrinho);
    fecharModalOpcoes();
    atualizarCarrinho();
    toggleCarrinho(true);
}

/* ==========================================================================
   GERENCIAMENTO DO CARRINHO DE COMPRAS
   ========================================================================== */
function adicionarPromoAoCarrinho(nomePromo, preco, detalhes) {
    const itemPromo = {
        idCart: Date.now(),
        id: 999,
        nome: `🎁 ${nomePromo}`,
        detalhes: detalhes,
        preco: preco,
        qtd: 1
    };
    carrinho.push(itemPromo);
    atualizarCarrinho();
    toggleCarrinho(true);
}

function removerItemCarrinho(idCart) {
    carrinho = carrinho.filter(i => i.idCart !== idCart);
    atualizarCarrinho();
}

function alterarQuantidade(idCart, delta) {
    const item = carrinho.find(i => i.idCart === idCart);
    if (item) {
        item.qtd += delta;
        if (item.qtd <= 0) {
            removerItemCarrinho(idCart);
            return;
        }
    }
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const container = document.getElementById('itens-carrinho');
    const headerCount = document.getElementById('cart-count-header');
    const floatCounts = document.querySelectorAll('#cart-count-float');

    if (!container) return;

    container.innerHTML = "";
    let totalItens = 0;

    if (carrinho.length === 0) {
        container.innerHTML = `<div class="text-center py-12 text-gray-400">
            <i class="fa-solid fa-gift text-4xl mb-3 block text-mimos/40"></i>
            <p class="text-xs sm:text-sm">Seu carrinho de mimos está vazio.</p>
        </div>`;
    } else {
        carrinho.forEach(item => {
            const subtotal = item.preco * item.qtd;
            totalItens += item.qtd;

            const itemDiv = document.createElement('div');
            itemDiv.className = "bg-gray-50 p-3 rounded-xl border border-gray-100 space-y-2 relative group";
            itemDiv.innerHTML = `
                <div class="flex items-start justify-between pr-6">
                    <div>
                        <h4 class="font-bold text-gray-800 text-xs sm:text-sm">${item.nome}</h4>
                        <p class="text-[10px] sm:text-xs text-mimos font-medium leading-snug">${item.detalhes}</p>
                    </div>
                    <span class="font-bold text-mimos text-xs">${subtotal.toLocaleString('pt-MZ')} Mt</span>
                </div>
                
                <button onclick="removerItemCarrinho(${item.idCart})" title="Remover item" class="absolute top-2.5 right-2.5 text-red-400 hover:text-red-600 p-1 text-xs">
                    <i class="fa-solid fa-trash-can"></i>
                </button>

                <div class="flex items-center justify-between border-t border-gray-200/60 pt-2">
                    <span class="text-[10px] text-gray-400">${item.preco.toLocaleString('pt-MZ')} Mt un.</span>
                    <div class="flex items-center border border-gray-200 rounded-lg bg-white overflow-hidden">
                        <button onclick="alterarQuantidade(${item.idCart}, -1)" class="px-2 py-0.5 text-gray-600 hover:bg-gray-100 text-xs font-bold">-</button>
                        <span class="px-2 text-xs font-bold text-gray-800">${item.qtd}</span>
                        <button onclick="alterarQuantidade(${item.idCart}, 1)" class="px-2 py-0.5 text-gray-600 hover:bg-gray-100 text-xs font-bold">+</button>
                    </div>
                </div>
            `;
            container.appendChild(itemDiv);
        });
    }

    if (headerCount) headerCount.innerText = totalItens;
    floatCounts.forEach(fc => fc.innerText = totalItens);
    atualizarTotalCarrinho();
}

function atualizarTotalCarrinho() {
    let subtotal = 0;
    carrinho.forEach(item => subtotal += (item.preco * item.qtd));

    const subtotalEl = document.getElementById('subtotal-carrinho');
    const totalEl = document.getElementById('total-carrinho');

    if (subtotalEl) subtotalEl.innerText = `${subtotal.toLocaleString('pt-MZ')} Mt`;
    if (totalEl) totalEl.innerText = `${subtotal.toLocaleString('pt-MZ')} Mt`;
}

function toggleCarrinho(forcarAbertura = false) {
    const modal = document.getElementById('carrinho-modal');
    if (!modal) return;

    if (forcarAbertura || modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
    }
}

function enviarPedidoWhatsApp() {
    if (carrinho.length === 0) {
        alert("O seu carrinho está vazio.");
        return;
    }

    const telefone = "258849311226";
    const opcaoEntrega = document.querySelector('input[name="opcaoEntrega"]:checked')?.value || 'retirada';

    let mensagem = "👋 Olá, Casal Dos Mimos! Gostaria de encomendar os seguintes produtos:\n\n";

    let subtotal = 0;
    carrinho.forEach(item => {
        const sub = item.preco * item.qtd;
        subtotal += sub;
        mensagem += `• *${item.nome}* (${item.detalhes})\n  *Qtd:* ${item.qtd}x | *Subtotal:* ${sub.toLocaleString('pt-MZ')} Mt\n\n`;
    });

    mensagem += `─────────────\n`;
    mensagem += `💰 *Total do Pedido:* ${subtotal.toLocaleString('pt-MZ')} Mt\n`;
    mensagem += `🚚 *Entrega:* ${opcaoEntrega === 'delivery' ? 'Entrega / Txopela (A combinar taxa)' : 'Levantamento no local'}\n\n`;
    mensagem += `💳 *Método de Pagamento:* M-Pesa (84 931 1226)\n\n`;
    mensagem += `Por favor, confirmem o meu pedido. Obrigado!`;

    window.open(`https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`, '_blank');
}

/* ==========================================================================
   CALCULADORA DE EVENTOS
   ========================================================================== */
function calcularEvento(e) {
    e.preventDefault();
    const pessoas = parseInt(document.getElementById('calcPessoas').value);
    const tipo = document.getElementById('calcTipo').value;

    if (!pessoas || pessoas < 1) return;

    const salgadosDuzias = Math.ceil((pessoas * 6) / 12);
    let boloSugerido = "Bolo Tamanho 20 (850 Mt)";

    if (pessoas > 15 && pessoas <= 25) boloSugerido = "Bolo Temático M (2.000 Mt)";
    else if (pessoas > 25) boloSugerido = "Bolo de 2 Andares (3.200 Mt)";

    document.getElementById('resSalgados').innerText = `${salgadosDuzias} dúzias`;
    document.getElementById('resBolo').innerText = boloSugerido;

    ultimoCalculoEvento = { pessoas, tipo, salgadosDuzias, boloSugerido };
    document.getElementById('resultadoCalculadora').classList.remove('hidden');
}

function enviarCalculoWhatsApp() {
    if (!ultimoCalculoEvento) return;
    const telefone = "258849311226";
    
    let msg = `👋 Olá, Casal Dos Mimos!\n\nFiz uma simulação no site para a minha festa e gostaria de pedir um orçamento:\n\n`;
    msg += `👥 *Nº de Convidados:* ${ultimoCalculoEvento.pessoas}\n`;
    msg += `🎉 *Tipo de Evento:* ${ultimoCalculoEvento.tipo}\n\n`;
    msg += `📌 *Recomendação:*\n`;
    msg += `• *Salgados:* ${ultimoCalculoEvento.salgadosDuzias} dúzias\n`;
    msg += `• *Bolo:* ${ultimoCalculoEvento.boloSugerido}\n\n`;
    msg += `Gostaria de confirmar a disponibilidade!`;

    window.open(`https://wa.me/${telefone}?text=${encodeURIComponent(msg)}`, '_blank');
}
// --- CONFIGURAÇÕES ---
// URL DO GOOGLE APPS SCRIPT (Você vai gerar essa URL na Aula Básica e colar aqui)
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbx66vWYj5cL5cwWgzVe2gqKDQZVzEKOX0WHU_LmpMDPS3RjB3MttH4suBWsAfOMaFYT/exec"; 
const WHATSAPP_NOIVA = "558193149580";

// --- DADOS DOS PRESENTES ---
const giftsData = [
    // COZINHA
    { id: 1, name: "Assadeira", category: "Cozinha", linkShopee: "https://shopee.com.br/product/1548697431/58218412904", linkML: "", icon: "🥘" },
    { id: 2, name: "Boleira", category: "Cozinha", linkShopee: "https://shopee.com.br/product/664761873/23697485404", linkML: "", icon: "🎂" },
    { id: 3, name: "Cuscuzeira", category: "Cozinha", linkShopee: "https://shopee.com.br/product/1690327967/58211736985", linkML: "", icon: "🍲" },
    { id: 4, name: "Escorredor de arroz", category: "Cozinha", linkShopee: "https://shopee.com.br/product/1415619904/58264153844", linkML: "", icon: "🍚" },
    { id: 5, name: "Escorredor de louças", category: "Cozinha", linkShopee: "https://shopee.com.br/product/346235717/7667837195", linkML: "", icon: "🍽️" },
    { id: 6, name: "Escorredor de macarrão", category: "Cozinha", linkShopee: "https://shopee.com.br/product/570456386/22033658928", linkML: "", icon: "🍝" },
    { id: 7, name: "Espátula para bolo", category: "Cozinha", linkShopee: "https://shopee.com.br/product/1398321074/58201876118", linkML: "", icon: "🔪" },
    { id: 8, name: "Forma de bolo", category: "Cozinha", linkShopee: "https://shopee.com.br/product/724958348/49411509350", linkML: "", icon: "🧁" },
    { id: 9, name: "Garrafa para geladeira", category: "Cozinha", linkShopee: "https://shopee.com.br/product/385241875/22697143547", linkML: "", icon: "🧊" },
    { id: 10, name: "Garrafa térmica", category: "Cozinha", linkShopee: "https://shopee.com.br/product/1507897984/22098416609", linkML: "", icon: "☕" },
    { id: 11, name: "Jarra", category: "Cozinha", linkShopee: "https://shopee.com.br/product/1794268079/58258864542", linkML: "", icon: "🫖" },
    { id: 12, name: "Jogo de copos", category: "Cozinha", linkShopee: "https://shopee.com.br/product/561341313/22099317741", linkML: "", icon: "🥛" },
    { id: 13, name: "Jogo de potes", category: "Cozinha", linkShopee: "", linkML: "", icon: "🥡" },
    { id: 14, name: "Jogo de pratos", category: "Cozinha", linkShopee: "", linkML: "", icon: "🍽️" },
    { id: 15, name: "Lixeira de pia", category: "Cozinha", linkShopee: "", linkML: "", icon: "🗑️" },
    { id: 16, name: "Panela de pressão", category: "Cozinha", linkShopee: "", linkML: "", icon: "🍲" },
    { id: 17, name: "Peneira", category: "Cozinha", linkShopee: "", linkML: "", icon: "🍳" },
    { id: 18, name: "Ralador", category: "Cozinha", linkShopee: "", linkML: "", icon: "🧀" },
    { id: 19, name: "Travessa de vidro", category: "Cozinha", linkShopee: "", linkML: "", icon: "🥗" },
    { id: 20, name: "Jogo de medidores", category: "Cozinha", linkShopee: "", linkML: "", icon: "🥄" },
    
    // QUARTO
    { id: 21, name: "Edredom", category: "Quarto", linkShopee: "", linkML: "", icon: "🛌" },
    { id: 22, name: "Jogo de lençóis e fronhas", category: "Quarto", linkShopee: "", linkML: "", icon: "🛏️" },
    { id: 23, name: "Travesseiros", category: "Quarto", linkShopee: "", linkML: "", icon: "😴" },

    // BANHEIRO
    { id: 24, name: "Cesto para roupa suja", category: "Banheiro", linkShopee: "", linkML: "", icon: "🧺" },
    { id: 25, name: "Jogo de banheiro", category: "Banheiro", linkShopee: "", linkML: "", icon: "🚿" },
    { id: 26, name: "Jogo de toalhas", category: "Banheiro", linkShopee: "", linkML: "", icon: "🧖‍♀️" },
    { id: 27, name: "Mop", category: "Banheiro", linkShopee: "", linkML: "", icon: "🧹" },
    { id: 28, name: "Potes para higiene", category: "Banheiro", linkShopee: "", linkML: "", icon: "🧴" },
    { id: 29, name: "Varal de chão", category: "Banheiro", linkShopee: "", linkML: "", icon: "👕" },

    // SALA
    { id: 30, name: "Almofadas", category: "Sala", linkShopee: "", linkML: "", icon: "🛋️" },
    { id: 31, name: "Tapete", category: "Sala", linkShopee: "", linkML: "", icon: "🧶" },

    // ELETROPORTÁTEIS
    { id: 32, name: "Aspirador de pó (Preto)", category: "Eletroportáteis", linkShopee: "", linkML: "", icon: "🔌" },
    { id: 33, name: "Batedeira (Preto)", category: "Eletroportáteis", linkShopee: "", linkML: "", icon: "🥣" },
    { id: 34, name: "Cafeteira (Preto)", category: "Eletroportáteis", linkShopee: "", linkML: "", icon: "☕" },
    { id: 35, name: "Ferro de passar (Preto)", category: "Eletroportáteis", linkShopee: "", linkML: "", icon: "👔" },
    { id: 36, name: "Filtro de água (Preto)", category: "Eletroportáteis", linkShopee: "", linkML: "", icon: "🚰" },
    { id: 37, name: "Sanduicheira/Grill (Preto)", category: "Eletroportáteis", linkShopee: "", linkML: "", icon: "🥪" },
    { id: 38, name: "Ventilador (Preto)", category: "Eletroportáteis", linkShopee: "", linkML: "", icon: "🌬️" },
];

let reservedItemIds = []; // Guardará os IDs que já foram reservados

// --- FUNÇÕES DE ANIMAÇÃO INICIAL ---
function openEnvelope() {
    document.querySelector('.envelope').style.display = 'none';
    document.getElementById('letter-content').classList.remove('hidden');
}

function enterSite() {
    document.getElementById('envelope-screen').style.display = 'none';
    document.getElementById('main-content').classList.remove('hidden');
    loadReservedItems(); // Carrega os dados do Google Sheets
}

// --- INTEGRAÇÃO COM GOOGLE SHEETS ---
async function loadReservedItems() {
    if(GOOGLE_SHEETS_URL === "SUA_URL_DO_WEB_APP_AQUI") {
        renderGifts('Todos'); // Renderiza normal se não tiver URL ainda
        return;
    }
    try {
        const response = await fetch(GOOGLE_SHEETS_URL);
        const data = await response.json();
        reservedItemIds = data.reservedIds || [];
        renderGifts('Todos');
    } catch (error) {
        console.error("Erro ao carregar reservas:", error);
        renderGifts('Todos');
    }
}

// --- RENDERIZAÇÃO DOS PRESENTES ---
function renderGifts(category) {
    const grid = document.getElementById('gift-grid');
    grid.innerHTML = '';

    const filtered = category === 'Todos' ? giftsData : giftsData.filter(g => g.category === category);

    filtered.forEach(gift => {
        const isReserved = reservedItemIds.includes(gift.id);
        const card = document.createElement('div');
        card.className = 'gift-card';
        
        let buttonHtml = `<button class="btn-presentear" onclick="openModal(${gift.id})">Presentear</button>`;
        if(isReserved) {
            buttonHtml = `<button class="btn-presentear" disabled>Já foi presenteado</button>`;
        }

        card.innerHTML = `
            <div class="gift-icon">${gift.icon}</div>
            <h3 class="gift-title">${gift.name}</h3>
            ${buttonHtml}
        `;
        grid.appendChild(card);
    });
}

function filterCategory(category) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderGifts(category);
}

// --- LÓGICA DO MODAL DE RESERVA ---
let currentGift = null;

function openModal(giftId) {
    currentGift = giftsData.find(g => g.id === giftId);
    document.getElementById('modal-gift-name').innerText = currentGift.name;
    document.getElementById('gift-id').value = currentGift.id;
    
    // Reseta o modal
    document.querySelector('.purchase-options').classList.remove('hidden');
    document.getElementById('reservation-form').classList.add('hidden');
    document.getElementById('success-message').classList.add('hidden');
    
    document.getElementById('reservation-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('reservation-modal').classList.add('hidden');
}

function selectOption(option) {
    document.getElementById('selected-option').value = option;
    document.querySelector('.purchase-options').classList.add('hidden');
    document.getElementById('reservation-form').classList.remove('hidden');
}

document.getElementById('reservation-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const btn = document.getElementById('submit-btn');
    btn.innerText = "Registrando...";
    btn.disabled = true;

    const data = {
        giftId: document.getElementById('gift-id').value,
        giftName: currentGift.name,
        guestName: document.getElementById('guest-name').value,
        guestPhone: document.getElementById('guest-phone').value,
        option: document.getElementById('selected-option').value
    };

    // Enviar para o Google Sheets
    if(GOOGLE_SHEETS_URL !== "SUA_URL_DO_WEB_APP_AQUI") {
        try {
            await fetch(GOOGLE_SHEETS_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
        } catch(e) {
            console.error(e);
        }
    }

    // Marca como reservado localmente para atualizar a tela
    reservedItemIds.push(parseInt(data.giftId));
    renderGifts(document.querySelector('.cat-btn.active').innerText);

    showSuccess(data);
    
    btn.innerText = "Confirmar Presente";
    btn.disabled = false;
});

function showSuccess(data) {
    document.getElementById('reservation-form').classList.add('hidden');
    document.getElementById('success-message').classList.remove('hidden');

    // Configurar o link da loja, se houver
    const storeContainer = document.getElementById('store-link-container');
    const storeLink = document.getElementById('store-link');
    
    if(data.option === 'Shopee' && currentGift.linkShopee) {
        storeLink.href = currentGift.linkShopee;
        storeContainer.classList.remove('hidden');
    } else if (data.option === 'Mercado Livre' && currentGift.linkML) {
        storeLink.href = currentGift.linkML;
        storeContainer.classList.remove('hidden');
    } else {
        storeContainer.classList.add('hidden');
    }

    // Configurar o link do WhatsApp para o convidado avisar a noiva
    const waText = encodeURIComponent(`Olá Rayana! Sou ${data.guestName}. Acabei de escolher o presente "${data.giftName}" na sua lista de casamento!`);
    document.getElementById('wa-link').href = `https://wa.me/${WHATSAPP_NOIVA}?text=${waText}`;
}

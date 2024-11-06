let bannerIndex = 0;
showBanners(bannerIndex);


function changeBanner(n) {
    showBanners(bannerIndex += n);
}


function showBanners(n) {
    const banners = document.querySelectorAll(".banner");
    if (n >= banners.length) { bannerIndex = 0; }
    if (n < 0) { bannerIndex = banners.length - 1; }
    banners.forEach((banner, index) => {
        banner.classList.remove("active");
        if (index === bannerIndex) {
            banner.classList.add("active");
        }
    });
}


// Função para atualizar o preço total de um item
function atualizarPrecoTotal() {
    const linhas = document.querySelectorAll('tbody tr'); // Pega todas as linhas do carrinho
    let totalCarrinho = 0; // Variável para o total do carrinho


    linhas.forEach(linha => {
        // Pega a quantidade e o preço unitário
        const quantidade = linha.querySelector('.quantidade').value;
        const precoUnitario = parseFloat(linha.querySelector('.preço-unitario').textContent.replace('R$', '').replace(',', '.'));


        // Calcula o preço total do item (preço unitário * quantidade)
        const precoTotal = precoUnitario * quantidade;


        // Atualiza o preço total na linha
        linha.querySelector('.preço-total').textContent = 'R$ ' + precoTotal.toFixed(2).replace('.', ',');


        // Adiciona o preço total do item ao total geral do carrinho
        totalCarrinho += precoTotal;
    });


    // Atualiza o total final no HTML
    document.getElementById('total-final').textContent = 'R$ ' + totalCarrinho.toFixed(2).replace('.', ',');
}


// Função para remover um item do carrinho
function removerItem(event) {
    const linha = event.target.closest('tr'); // Encontra a linha do item clicado
    linha.remove(); // Remove o item da tabela
    atualizarPrecoTotal(); // Atualiza o total depois de remover um item
}


// Função para configurar os eventos de mudança de quantidade e de remover
function configurarEventos() {
    // Adiciona um evento para quando a quantidade mudar
    const quantidades = document.querySelectorAll('.quantidade');
    quantidades.forEach(input => {
        input.addEventListener('input', atualizarPrecoTotal); // Atualiza o preço sempre que a quantidade mudar
    });


    // Adiciona um evento para quando o botão de remover for clicado
    const botoesRemover = document.querySelectorAll('.remover-produto');
    botoesRemover.forEach(botao => {
        botao.addEventListener('click', removerItem); // Remove o item quando clicado
    });
}


// Chama a função para configurar os eventos e calcular o total inicial ao carregar a página
window.onload = function() {
    configurarEventos();
    atualizarPrecoTotal(); // Calcula o total inicial quando a página for carregada
};

document.addEventListener("DOMContentLoaded", async () => {
    const restauranteAtual = "Bonsai Sushibar";
    const cards = document.querySelectorAll(".produto-card");

    try {
        const response = await fetch("https://tech4japa.fly.dev/produtos");
        const produtos = await response.json();

        const meusProdutos = produtos.filter(p => p.restaurante === restauranteAtual);

        meusProdutos.forEach((produto, index) => {
            if (cards[index]) {
                const card = cards[index];
                card.querySelector("img").src = produto.imagem;
                card.querySelector("img").alt = produto.nome;
                card.querySelector("h3").textContent = produto.nome;
                card.querySelector("p").textContent = produto.descricao;
                card.querySelector("a").href = `/detalhes/detalhes.html#${produto.produto}`;
            }
        });
    } catch (error) {
        console.error("Erro ao carregar produtos da API:", error);
    }
});
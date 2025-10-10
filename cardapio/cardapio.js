function getIdentidade() {
  return {
    nome: "Matheus E",
    restaurante: "Bonsai Sushibar"
  };
}

const container = document.querySelector(".produtos");
const autor = document.querySelector(".autor");
const tituloRestaurante = document.querySelector(".titulo-restaurante");

const { nome, restaurante } = getIdentidade();

if (autor) autor.textContent = `Criado por ${nome}`;
if (tituloRestaurante) tituloRestaurante.textContent = restaurante;

fetch("https://tech4japa.fly.dev/produtos")
  .then(response => response.json())
  .then(produtos => {
    const meusProdutos = produtos.filter(p => p.nome === nome);

    if (meusProdutos.length === 0) {
      container.innerHTML = "<p>Nenhum produto encontrado para este restaurante.</p>";
      return;
    }

    meusProdutos.forEach(produto => {
      const card = document.createElement("div");
      card.className = "produto-card";
      card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.produto}">
        <h3>${produto.produto}</h3>
        <p>${produto.descricao}</p>
        <a href="../detalhes/detalhes.html#${produto.id}" class="btn-detalhes">Ver Detalhes</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Erro ao buscar produtos da API:", error);
    container.innerHTML = "<p>Erro ao carregar os produtos.</p>";
  });
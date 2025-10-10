const cardapio = [
  {
    id: "produto1",
    nome: "Sushi de Salmão",
    descricao: "Deliciosos sushis de salmão com molho especial.",
    imagem: "https://www.diadepeixe.com.br/extranet/thumbnail/crop/550x360/Receita/shutterstock_2105735288_1746448515362.jpg",
    detalhesUrl: "/detalhes/detalhes.html#produto1"
  },
  {
    id: "produto2",
    nome: "Sushi de Atum",
    descricao: "Sushi com atum fresco e abacate.",
    imagem: "https://static.vecteezy.com/ti/fotos-gratis/p2/49087884-fresco-sushi-rolos-com-atum-e-abacate-preparado-para-uma-delicioso-refeicao-gratis-foto.jpeg",
    detalhesUrl: "/detalhes/detalhes.html#produto2"
  },
  {
    id: "produto3",
    nome: "Hot roll",
    descricao: "Hot roll com cream cheese.",
    imagem: "https://catracalivre.com.br/wp-content/uploads/2023/08/istock-181993404-scaled.jpg",
    detalhesUrl: "/detalhes/detalhes.html#produto3"
  },
  {
    id: "produto4",
    nome: "Sushi de Peixe Branco",
    descricao: "Sushi de peixe branco com molho de soja.",
    imagem: "https://img.freepik.com/fotos-gratis/rolos-de-sushi-de-peixe-cru-com-molho-de-soja_23-2148502526.jpg",
    detalhesUrl: "/detalhes/detalhes.html#produto4"
  },
  {
    id: "produto5",
    nome: "Temaki de Salmão",
    descricao: "Temaki de salmão com cream cheese e cebolinha.",
    imagem: "https://static.itdg.com.br/images/1200-675/e0975c8cd8b36b8a5a4a2dd3ce040e51/344587-original.jpg",
    detalhesUrl: "/detalhes/detalhes.html#produto5"
  },
  {
    id: "produto6",
    nome: "Combinado de Sushi",
    descricao: "Combinado de sushis variados com arroz e algas frescas.",
    imagem: "https://panelaterapia.com/wp-content/uploads/2013/10/combinado-sushi-620x363.jpg",
    detalhesUrl: "/detalhes/detalhes.html#produto6"
  }
];

const container = document.querySelector(".produtos");

const meuRestaurante = "Bonsai Sushibar"; 

fetch("https://tech4japa.fly.dev/produtos")
  .then(response => response.json())
  .then(produtos => {
    const meusProdutos = produtos.filter(p => p.restaurante === meuRestaurante);

    meusProdutos.forEach(produto => {
      const card = document.createElement("div");
      card.className = "produto-card";
      card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <a href="/detalhes/detalhes.html#${produto.produto}" class="btn-detalhes">Ver Detalhes</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Erro ao buscar produtos da API:", error);
  });
document.addEventListener("DOMContentLoaded", async () => {
  const produtoId = window.location.hash.replace("#", "");
  const produtoSection = document.getElementById(produtoId)?.closest(".produto-detalhes");

  if (produtoSection) {
    try {
      const response = await fetch("https://tech4japa.fly.dev/produtos");
      const produtos = await response.json();
      const produto = produtos.find(p => p.produto === produtoId);

      if (produto) {
        produtoSection.querySelector("img").src = produto.imagem;
        produtoSection.querySelector("img").alt = produto.nome;
        produtoSection.querySelector("h2").textContent = produto.nome;
        produtoSection.querySelector("p").textContent = produto.descricao;
      }
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    }
  }

  // Validação dos formulários
  const formularios = document.querySelectorAll(".promo-form");

  formularios.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const emailInput = form.querySelector("input[type='email']");
      const checkbox = form.querySelector("input[type='checkbox']");
      const successMessage = form.querySelector(".sucesso-menssagem");

      let email = emailInput.value.trim();

      if (!email) {
        email = prompt("Por favor, digite seu e-mail:");
        if (!email) {
          alert("Erro: e-mail não informado.");
          return;
        }
        emailInput.value = email;
      }

      const isEmailValid = (
        email.length >= 10 &&
        email.includes("@") &&
        email.indexOf("@") === email.lastIndexOf("@") &&
        email.split("@")[1]?.includes(".")
      );

      if (!isEmailValid) {
        alert("E-mail inválido. Verifique o formato.");
        return;
      }

      if (!checkbox.checked) {
        checkbox.parentElement.style.backgroundColor = "#ffcccc";
        let aviso = form.querySelector(".aviso-termos");
        if (!aviso) {
          aviso = document.createElement("div");
          aviso.className = "aviso-termos";
          aviso.textContent = "Você precisa aceitar os termos de uso";
          aviso.style.color = "red";
          aviso.style.marginTop = "5px";
          form.appendChild(aviso);
        }
        return;
      }

      successMessage.textContent = `E-mail “${email}” cadastrado com sucesso!`;
      successMessage.style.display = "block";
    });
  });
});
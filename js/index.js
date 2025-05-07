// Seleciona todos os cards da primeira coluna
const cards = document.querySelectorAll(".card-hover");

// Adiciona os eventos de animação e clique para cada card
cards.forEach((card) => {
  // Animação ao passar o mouse
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)"; // Aumenta o tamanho do card
    card.style.transition = "transform 0.3s ease"; // Suaviza a transição
    card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)"; // Adiciona sombra
    card.style.cursor = "pointer"; // Exibe a mão ao passar o mouse
  });

  // Remove a animação ao tirar o mouse
  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)"; // Volta ao tamanho original
    card.style.boxShadow = "none"; // Remove a sombra
  });

  // Exibe um popup ao clicar no card
  card.addEventListener("click", () => {
    alert("Essa funcionalidade ainda será implementada.");
  });
});

// Botão "Voltar ao Topo"
const backToTopButton = document.getElementById("backToTop");

// Exibe o botão quando o usuário rolar para baixo
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Rola para o topo ao clicar no botão
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Barra de pesquisa
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); // Evita o comportamento padrão do formulário
  alert("Essa funcionalidade ainda será implementada.");
});

// Botão "Comprar"
const comprarButtons = document.querySelectorAll(".btn-primary");
comprarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Adicionado ao carrinho!");
  });
});

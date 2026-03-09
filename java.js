// Seleciona o botão "Voltar ao Topo" pelo ID
const btnTopo = document.getElementById('btn-topo');

// Função chamada sempre que o usuário rola a página
window.onscroll = function () {
  mostrarOuOcultarBotaoTopo();
};

/**
 * Exibe o botão "Voltar ao Topo" quando a rolagem for maior que 200px
 * Oculta o botão se a rolagem for menor que isso
 */
function mostrarOuOcultarBotaoTopo() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop > 200) {
    btnTopo.style.display = "block"; // Mostra o botão
  } else {
    btnTopo.style.display = "none"; // Esconde o botão
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.2 // Mostra quando 20% da seção aparecer
  });

  const elementos = document.querySelectorAll('.hidden');
  elementos.forEach(el => observador.observe(el));
});




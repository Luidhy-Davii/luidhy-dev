export function initHabilidadesInteraction() {
  const techCards = document.querySelectorAll('.tech-card');
  const descriptionText = document.getElementById('tech-description');
  const defaultText = "* Passe o mouse sobre os cards para ler sobre cada tecnologia *";

  // Se não houver cards ou texto na página, encerra a função
  if (!techCards.length || !descriptionText) return;

  techCards.forEach(card => {
    // Mouse entra
    card.addEventListener('mouseenter', () => {
      const texto = card.getAttribute('data-desc');
      descriptionText.innerText = texto;
      descriptionText.classList.add('ativo');
    });

    // Mouse sai
    card.addEventListener('mouseleave', () => {
      descriptionText.innerText = defaultText;
      descriptionText.classList.remove('ativo');
    });
  });
}
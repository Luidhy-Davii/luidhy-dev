export function initMenuMobile() {
  const mobileMenu = document.getElementById('mobile-menu');
  const navList = document.querySelector('.nav--list');
  const navLinks = document.querySelectorAll('.nav--list__links');

  // Proteção: Se não achar o menu, não executa nada para evitar erros
  if (!mobileMenu || !navList) return;

  function toggleMenu() {
    mobileMenu.classList.toggle('active');
    navList.classList.toggle('active');
    // Acessibilidade
    const isActive = mobileMenu.classList.contains('active');
    mobileMenu.setAttribute('aria-expanded', isActive);
  }

  mobileMenu.addEventListener('click', toggleMenu);

  // Acessibilidade: Teclado (Enter ou Espaço)
  mobileMenu.addEventListener('keydown', (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMenu();
    }
  });

  // Fecha ao clicar em um link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      navList.classList.remove('active');
    });
  });

  // Fecha ao rolar a tela
  window.addEventListener('scroll', () => {
    if (navList.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      navList.classList.remove('active');
      mobileMenu.setAttribute('aria-expanded', 'false');
    }
  });

  // Fecha com ESC
  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
      mobileMenu.classList.remove('active');
      navList.classList.remove('active');
    }
  });
}
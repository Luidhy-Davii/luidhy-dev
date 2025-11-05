import './scss/style.scss';

// menu hamburguer
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav--list');

function toggleMenu() {
  mobileMenu.classList.toggle('active');
  navList.classList.toggle('active');
}

mobileMenu.addEventListener('click', toggleMenu);

mobileMenu.addEventListener('keydown', (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleMenu();
  }
});

const navLinks = document.querySelectorAll('.nav--list__links');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navList.classList.remove('active');
  });
});

window.addEventListener('scroll', () => {
  if (navList.classList.contains('active')) {
    mobileMenu.classList.remove('active');
    navList.classList.remove('active');
    mobileMenu.setAttribute('aria-expanded', 'false');
  }
});

// Fecha o menu quando apertar ESC
document.addEventListener('keydown', (event) => {
  if (event.key === "Escape") {
    mobileMenu.classList.remove('active');
    navList.classList.remove('active');
  }
});

// Animação do título
document.addEventListener('mousemove', (e) => {
  const titulo = document.querySelector('[data-tilt]');
  if (!titulo) return;

  const { clientX, clientY } = e;
  const { innerWidth, innerHeight } = window;

  // Centro da tela
  const centerX = innerWidth / 2;
  const centerY = innerHeight / 2;

  // Distância do centro (em %)
  const moveX = (clientX - centerX) / centerX;
  const moveY = (clientY - centerY) / centerY;

  // Movimento suave (max 20px)
  const x = moveX * 10;
  const y = moveY * 10;

  titulo.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});

// Reset ao sair da tela
document.addEventListener('mouseleave', () => {
  const titulo = document.querySelector('[data-tilt]');
  if (titulo) titulo.style.transform = 'translate3d(0, 0, 0)';
});


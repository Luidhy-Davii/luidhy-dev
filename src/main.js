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
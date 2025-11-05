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

// Efeito máquina de esccrever
function maquinaDeEscrever(element) {
  const text = element.textContent;
  element.textContent = '';
  let i = 0;
  const baseSpeed = 70; // Velocidade base mais rápida
  const randomVariation = 50; // Variação aleatória para naturalidade
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  element.appendChild(cursor);

  function type() {
    if (i < text.length) {
      const charSpan = document.createElement('span');
      charSpan.className = 'char-fade';
      charSpan.textContent = text.charAt(i);
      element.insertBefore(charSpan, cursor);

      const speed = baseSpeed + Math.random() * randomVariation;
      i++;
      setTimeout(type, speed);
    } else {
      cursor.classList.add('active');
    }
  }
  type();
}

window.onload = function () {
  const title = document.querySelector('.sessao--apresentacao__subtitulo');
  //anima o subtítulo
  maquinaDeEscrever(title);
};























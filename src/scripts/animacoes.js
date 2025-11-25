// --- EFEITO TILT (Título se move com o mouse) ---
export function initTiltEffect() {
  const titulo = document.querySelector('[data-tilt]');
  if (!titulo) return;

  document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;

    const moveX = (clientX - centerX) / centerX;
    const moveY = (clientY - centerY) / centerY;

    // Multiplicador de intensidade (10px)
    const x = moveX * 10;
    const y = moveY * 10;

    titulo.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });

  // Reset ao sair da tela
  document.addEventListener('mouseleave', () => {
    titulo.style.transform = 'translate3d(0, 0, 0)';
  });
}

// --- MÁQUINA DE ESCREVER ---
export function initTypeWriter() {
  const element = document.querySelector('.sessao--apresentacao__subtitulo');
  if (!element) return;

  const text = element.textContent;
  element.textContent = '';
  let i = 0;
  
  // Cria o cursor
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  element.appendChild(cursor);

  function type() {
    if (i < text.length) {
      const charSpan = document.createElement('span');
      charSpan.className = 'char-fade';
      charSpan.textContent = text.charAt(i);
      element.insertBefore(charSpan, cursor);

      const baseSpeed = 70; 
      const randomVariation = 50;
      const speed = baseSpeed + Math.random() * randomVariation;
      
      i++;
      setTimeout(type, speed);
    } else {
      cursor.classList.add('active');
    }
  }
  
  type();
}
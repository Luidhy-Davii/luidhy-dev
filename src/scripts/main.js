import '../scss/style.scss';

// Importa as funções dos outros arquivos
import { initMenuMobile } from './menu.js';
import { initTiltEffect, initTypeWriter } from './animacoes.js';
import { initScrollTop } from './scroll.js';
import { initHabilidadesInteraction } from './habilidades.js';

document.addEventListener('DOMContentLoaded', () => {  
  initMenuMobile();
  initTiltEffect();
  initTypeWriter();
  initScrollTop();
  initHabilidadesInteraction();
});
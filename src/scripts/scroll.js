export function initScrollTop() {
  const btnScrollTop = document.getElementById("btnScrollTop");

  if (!btnScrollTop) return;

  function toggleBotaoScroll() {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    // Mostra o botão apenas após 200px de scroll
    if (scrollPosition > 200) {
      btnScrollTop.classList.add("show");
    } else {
      btnScrollTop.classList.remove("show");
    }
  }

  window.addEventListener("scroll", toggleBotaoScroll);
}
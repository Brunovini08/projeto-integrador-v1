document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 1;
    const totalSlides = 3;
    const intervalTime = 2000; // 2 segundos
  
    // Função para trocar de slide
    function changeSlide() {
      // Desmarcar o slide atual
      document.getElementById(`slide${currentSlide}`).checked = false;
  
      // Incrementa o slide atual
      currentSlide++;
      if (currentSlide > totalSlides) {
        currentSlide = 1; // Volta para o primeiro slide
      }
  
      // Marcar o novo slide
      document.getElementById(`slide${currentSlide}`).checked = true;
    }
  
    // Inicia o intervalo para mudar de slide
    setInterval(changeSlide, intervalTime);
  });
  
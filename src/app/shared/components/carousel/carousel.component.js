document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 1;
  const totalSlides = 3;
  const intervalTime = 2000; // 2 segundos

  // Função para trocar de slide
  function changeSlide() {
      // Desmarcar o slide atual
      const currentSlideElement = document.getElementById(`slide${currentSlide}`);
      if (currentSlideElement) {
          currentSlideElement.checked = false;
      }

      // Incrementa o slide atual
      currentSlide++;
      if (currentSlide > totalSlides) {
          currentSlide = 1; // Volta para o primeiro slide
      }

      // Marcar o novo slide
      const nextSlideElement = document.getElementById(`slide${currentSlide}`);
      if (nextSlideElement) {
          nextSlideElement.checked = true;
      }
  }

  // Inicia o intervalo para mudar de slide
  setInterval(changeSlide, intervalTime);
});

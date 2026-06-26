window.addEventListener("DOMContentLoaded", () => {
  const subtitle = document.getElementById("subtitle");

  // Mostrar "PORTFOLIO" después de la última letra
  setTimeout(() => {
    subtitle.style.opacity = "1";
  }, 2600); // Última letra + animación

  // Esperar 2 segundos más antes de la transición
  setTimeout(() => {
    const intro = document.getElementById("intro");
    const main = document.getElementById("main-content");

    intro.style.opacity = "0";

    setTimeout(() => {
      intro.style.display = "none";
      main.style.display = "block";
      setTimeout(() => {
        main.style.opacity = "1";
      }, 50);
    }, 1000); // duración del fade-out
  }, 4000); // 2600 + 2000ms de lecturaS
});
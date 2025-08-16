let lenis;

function initLenis() {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    if (lenis) {
      lenis.raf(time);
    }
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

initLenis();
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("exampleModal");

  modal.addEventListener("show.bs.modal", function () {
    if (lenis) {
      lenis.destroy();
      lenis = null;
    }
  });

  modal.addEventListener("hidden.bs.modal", function () {
    setTimeout(() => {
      initLenis();
    }, 100);
  });
});

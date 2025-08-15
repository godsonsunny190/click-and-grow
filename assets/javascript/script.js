/* ===================================== */
/*          MARQUEE SLIDER JS            */
/* ===================================== */

class Marquee {
  constructor(element) {
    this.marquee = element;
    this.wrapper = element.querySelector(".marquee_wrapper");
    this.items = Array.from(element.querySelectorAll(".marquee_item"));

    this.speed = 0.4;
    this.isPaused = false;
    this.currentPosition = 0;
    this.animationId = null;

    this.init();
  }

  init() {
    this.items.forEach((item) => {
      const clone = item.cloneNode(true);
      this.wrapper.appendChild(clone);
    });

    this.itemsWidth = this.items.reduce((total, item) => {
      return total + item.offsetWidth;
    }, 0);

    this.marquee.addEventListener("mouseenter", () => this.pause());
    this.marquee.addEventListener("mouseleave", () => this.resume());
    this.animate();
  }

  animate() {
    if (!this.isPaused) {
      this.currentPosition -= this.speed;

      if (Math.abs(this.currentPosition) >= this.itemsWidth) {
        this.currentPosition = 0;
      }

      this.wrapper.style.transform = `translateX(${this.currentPosition}px)`;
    }

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  pause() {
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    this.marquee.removeEventListener("mouseenter", () => this.pause());
    this.marquee.removeEventListener("mouseleave", () => this.resume());
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const marqueeElement = document.getElementById("marquee");
  const marqueeInstance = new Marquee(marqueeElement);
});

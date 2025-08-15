/* ===================================== */
/*        PLANT CARDS SLIDER JS          */
/* ===================================== */

var swiper = new Swiper(".plantblock_slider", {
  slidesPerView: 6,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    1400: {
      slidesPerView: 6,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },

    991: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    320: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

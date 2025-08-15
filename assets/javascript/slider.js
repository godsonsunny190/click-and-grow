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

/* ===================================== */
/*       FEATURES CARDS SLIDER JS        */
/* ===================================== */

var swiper = new Swiper(".features_slider", {
  slidesPerView: 3,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    991: {
      slidesPerView: 3,
      spaceBetween: 16,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },

    630: {
      slidesPerView: 2,
      spaceBetween: 16,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
  },
});

/* ===================================== */
/*           SOCIAL SLIDER JS            */
/* ===================================== */

var swiper = new Swiper(".social_slider", {
  slidesPerView: 4.3,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    991: {
      slidesPerView: 4.3,
      spaceBetween: 16,
    },

    768: {
      slidesPerView: 3.3,
      spaceBetween: 16,
    },

    578: {
      slidesPerView: 2.3,
      spaceBetween: 16,
    },

    320: {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },
  },
});

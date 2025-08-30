/* ===================================== */
/*        PLANT CARDS SLIDER JS          */
/* ===================================== */

var swiper = new Swiper(".plantblock_slider", {
  slidesPerView: 6,
  spaceBetween: 20,
  loop: true,
  speed: 1000,
  // autoplay: {
  //   delay: 1000,
  //   disableOnInteraction: false,
  //   pauseOnHover: false,
  // },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 3,
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
      spaceBetween: 4,
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
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    pauseOnHover: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 3,
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

/* ===================================== */
/*           CLIENT SLIDER JS            */
/* ===================================== */

jQuery(document).ready(function ($) {
  $(".marquee_wrapper").slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
});

/* ===================================== */
/*            THUMB SLIDER JS            */
/* ===================================== */

$(".slider-content").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  infinite: true,
  speed: 1000,
  asNavFor: ".slider-thumb",
  arrows: true,
});

$(".slider-thumb").slick({
  slidesToShow: 6,
  slidesToScroll: 4,
  asNavFor: ".slider-content",
  dots: false,
  centerMode: true,
  focusOnSelect: true,

  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});

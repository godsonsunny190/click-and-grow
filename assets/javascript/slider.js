// BANNER SLIDER SCRIPT
var swiper = new Swiper(".homeBanner_slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  speed: 1000,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

// WHAT WE DO SLIDER SCRIPT
var swiper = new Swiper(".whatWeDo_slider", {
  slidesPerView: 1.3,
  spaceBetween: 25,
  loop: true,
  speed: 1000,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 25,
    },
    600: {
      slidesPerView: 1.5,
      spaceBetween: 25,
    },
  },
});

// OUR PROJECT SLIDER
var swiper = new Swiper(".ourProjects_slider", {
  slidesPerView: 2.2,
  spaceBetween: 40,
  loop: true,
  speed: 1000,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },

  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },

    1600: {
      slidesPerView: 3.2,
      spaceBetween: 30,
    },
  },
});

// OUR TEAM SLIDER
var swiper = new Swiper(".team_slider", {
  slidesPerView: 4,
  spaceBetween: 35,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },

  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },

    600: {
      slidesPerView: 2.2,
      spaceBetween: 16,
    },

    1024: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },

    1280: {
      slidesPerView: 4,
      spaceBetween: 35,
    },
  },
});

// GALLERY  SLIDER
// var swiper = new Swiper(".slider-1", {
//     spaceBetween: 10,
//     slidesPerView: 4,
//     freeMode: true,
//     watchSlidesProgress: true,
//     loop: true,
// });

//   var swiper2 = new Swiper(".slider-2", {
//     spaceBetween: 10,
//     loop: true,

//     thumbs: {
//       swiper: swiper,
//     },
//   });

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});

$(".slider-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  centerPadding: "30px",
  asNavFor: ".slider-for",
  focusOnSelect: true,
  prevArrow: false,
  nextArrow: false,
});

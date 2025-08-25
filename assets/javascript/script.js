/* ===================================== */
/*         FILTER PROJECT JS             */
/* ===================================== */
$(window).on("load", function () {
  if ($(".blogs_grid").length) {
    var $grid = $(".blogs_grid").isotope({
      itemSelector: ".blogs_item",
      layoutMode: "fitRows",
      fitRows: {
        gutter: 0,
      },
    });

    var $filterButtons = $(".blogs_nav li a");
    $filterButtons.on("click", function (e) {
      e.preventDefault();

      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });

      $filterButtons.removeClass("active-btn");
      $(this).addClass("active-btn");
    });
    $grid.isotope({ filter: "*" });
  }
});

/* ===================================== */
/*            PLANT FILTER JS            */
/* ===================================== */

$(window).on("load", function () {
  if ($(".plantfilter_grid").length) {
    var $grid = $(".plantfilter_grid").isotope({
      itemSelector: ".plantfilter_item",
      layoutMode: "fitRows",
      fitRows: {
        gutter: 0,
      },
    });

    var $filterButtons = $(".plantfilter_nav li a");
    $filterButtons.on("click", function (e) {
      e.preventDefault();

      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });

      $filterButtons.removeClass("active-btn");
      $(this).addClass("active-btn");
    });
    $grid.isotope({ filter: "*" });
  }
});

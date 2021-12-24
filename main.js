$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    // autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $(".header").addClass("header-fixed");
    } else {
      $(".header").removeClass("header-fixed");
    }
  });

  $(".header__menu").click(function () {
    $(".header-mobile").toggleClass("header-mobile__active");
  });
});

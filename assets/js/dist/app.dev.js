"use strict";

jQuery(document).ready(function ($) {
  //Swiper
  var galleryTitle = new Swiper(".product-description", {
    direction: "vertical",
    spaceBetween: 30,
    height: 150,
    loop: true,
    //slidesPerView: 1,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      1024: {
        height: 242
      }
    }
  });
  var galleryThumbs = new Swiper(".product-title__slide", {
    direction: "vertical",
    spaceBetween: 10,
    height: 40,
    loop: true,
    //slidesPerView: 1,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    thumbs: {
      swiper: galleryTitle
    }
  });
  var galleryTop = new Swiper(".swiper-container", {
    direction: "horizontal",
    initialSlide: 0,
    loop: true,
    grabCursor: true,
    preventClicks: true,
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev'
    },
    thumbs: {
      swiper: galleryThumbs,
      multipleActiveThumbs: true
    }
  }); // Smooth scroll

  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function () {
        window.location.hash = hash;
      });
    }
  }); // Parollex

  $(".replace-image, [data-paroller-factor]").paroller(); //Background Opacity

  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    $('.main-header-background').css({
      opacity: function opacity() {
        var elementHeight = $(this).height(),
            opacity = (1 - (elementHeight - scrollTop) / elementHeight) * 0.8;
        return opacity;
      }
    }); //

    if ($(window).scrollTop() > 100) $(".home-page-video").css({
      "background-color": "rgba(0,0,0,.5)"
    });else $(".home-page-video").css({
      "background-color": "rgba(0,0,0,1)"
    });
  });
});
$(document).ready(function () {
    var galleryTitle = new Swiper(".product-description", {
        direction: "vertical",
        spaceBetween: 30,
        height: 150,
        loop: true,
        //slidesPerView: 1,
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
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
            swiper: galleryTitle,
        },
    });
    var galleryTop = new Swiper(".swiper-container", {
        direction: "horizontal",
        spaceBetween: 10,
        loop: true,
        grabCursor: true,
        preventClicks: true,
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
            multipleActiveThumbs: true,
        },
    });
});

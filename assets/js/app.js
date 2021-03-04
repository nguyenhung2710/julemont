$(document).ready(function () {
    var galleryThumbs = new Swiper(".product-title__slide", {
        direction: "vertical",
        spaceBetween: 10,
        height: 40,
        //slidesPerView: 1,
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        
    });
    var galleryTop = new Swiper(".swiper-container", {
        direction: "horizontal",
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
});

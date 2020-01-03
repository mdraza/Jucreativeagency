/****  Sticky Navbar  ****/
$(document).ready(function () {
    $(window).on("scroll", function () {
        var t = $(".navbar");
        $(window).scrollTop() >= t.height() ? t.addClass("nav-scroll") : t.removeClass("nav-scroll")
    })
});



/****  Owl Carousel  ****/
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: false,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})
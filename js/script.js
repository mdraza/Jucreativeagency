/****  Sticky Navbar  ****/
$(document).ready(function () {
    $(window).on("scroll", function () {
        var t = $(".navbar");
        $(window).scrollTop() >= t.height() ? t.addClass("nav-scroll") : t.removeClass("nav-scroll")
    })
});

/****  Preloader  ****/
// $("#status").fadeOut();
$("#preloader")
  .delay(550)
  .fadeOut("slow");
$("body")
  .delay(550)
  .css({ overflow: "visible" });
  

/****  Brands Carousel  ****/
$('.owl-carouselOne').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: false,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});
/****  Services Carousel  ****/
$('.owl-carouselTwo').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
/****  Testimonial Carousel  ****/
$('.owl-carouselThree').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["<i class='icofont-long-arrow-left'></i>","<i class='icofont-long-arrow-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

/****  Scroll Top  ****/
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 600) {
      $(".scroll-top").fadeIn(600);
    } else {
      $(".scroll-top").fadeOut(600);
    }
  });
  $(".scroll-top").on("click", function() {
    $("html,body").animate(
      {
        scrollTop: 0
      },
      500
    );
    return false;
  });
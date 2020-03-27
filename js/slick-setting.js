$(document).ready(function(){
    $('.slider__items').slick({
        fade: true,
        autoplaySpeed: 4000,
        autoplay: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
  });
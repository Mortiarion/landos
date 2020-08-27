$(function () {

  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true,
  });

  $('.slider__for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 300,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });

  $('.header__log-register').on('click', function () {
    $('.header__log-acc').toggleClass('active');
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  });

  var mixer = mixitup('.products__inner-box')

});
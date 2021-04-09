$(function () {
  let headerHeight = $('.header').outerHeight();
  let sliderOffset = $('.slider').outerHeight();

  $(window).scroll(function () {
    if ($(window).scrollTop() >= headerHeight) {
      $('.header').removeClass('trans');

      //////sectionslidein
      $('.section-about').addClass('show');
    } else if ($(window).scrollTop() < headerHeight) {
      $('.header').addClass('trans');
    }

    if ($(window).scrollTop() >= sliderOffset + headerHeight) {
      $('.products .text-center').addClass('show');
      $('.products .container').addClass('show');
    }
  });
});

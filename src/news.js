$(function () {
  $('.section-news__item').click(function () {
    $(this).toggleClass('active').siblings();
    $(this).find('.section-news__item-back').stop().slideToggle();
  });

  ///////lazy load
  $('.lazy').lazyload({
    effect: 'fadeIn',
  });
});

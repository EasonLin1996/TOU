$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
      $('.totop').stop().fadeIn();
    } else {
      $('.totop').stop().fadeOut();
    }
  });

  $('.totop').click(function () {
    $('html,body').stop().animate({ scrollTop: 0 }, 500, 'linear');
  });

  ///////lazy load
  if (typeof lazyload === 'function') {
    $('.lazy').lazyload({
      effect: 'fadeIn',
    });
  }
});

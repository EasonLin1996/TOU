$(function () {
  $('.tab-item').click(function (e) {
    e.preventDefault();
    $(this)
      .addClass('active')
      .parent()
      .siblings()
      .children()
      .removeClass('active');

    let index = $(this).children().attr('href');

    let headerheight = $('.header').outerHeight();
    let height = $(`#${index}`).offset().top - headerheight;

    $('html,body').stop().animate({ scrollTop: height }, 500, 'linear');
  });

  $('.section-products__item').mouseenter(function () {
    $(this)
      .addClass('boop')
      .bind('animationend', function () {
        $(this).removeClass('boop');
      });
  });
});

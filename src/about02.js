$(function () {
  let headerHeight = $('.header').outerHeight();
  let secheadingHeight = $('.section-heading').outerHeight();
  let timer;

  for (let i = 0; i < 3; i++) {
    $('.timeline-item').eq(i).addClass('show');
  }

  $(window).scroll(function () {
    window.clearTimeout(timer);

    timer = window.setTimeout(function () {
      if ($(window).scrollTop() >= headerHeight) {
        $('.timeline-item').eq(3).addClass('show');
      }
      if ($(window).scrollTop() >= secheadingHeight) {
        $('.timeline-item').eq(4).addClass('show');
      }
      if (
        $(window).scrollTop() >=
        $('.timeline-item').eq(0).offset().top - 200
      ) {
        $('.timeline-item').eq(5).addClass('show');
      }
      if (
        $(window).scrollTop() >=
        $('.timeline-item').eq(1).offset().top - 200
      ) {
        $('.timeline-item').eq(6).addClass('show');
      }
      if (
        $(window).scrollTop() >=
        $('.timeline-item').eq(2).offset().top - 200
      ) {
        $('.timeline-item').eq(7).addClass('show');
      }
      if (
        $(window).scrollTop() >=
        $('.timeline-item').eq(3).offset().top - 200
      ) {
        $('.timeline-item').eq(8).addClass('show');
      }
      if (
        $(window).scrollTop() >=
        $('.timeline-item').eq(4).offset().top - 200
      ) {
        $('.timeline-item').eq(9).addClass('show');
      }
      if (
        $(window).scrollTop() >=
        $('.timeline-item').eq(5).offset().top - 200
      ) {
        $('.timeline-item').eq(10).addClass('show');
      }
      if (
        $(window).scrollTop() >=
        $('.timeline-item').eq(6).offset().top - 200
      ) {
        $('.timeline-item').eq(11).addClass('show');
      }
      if (
        $(window).scrollTop() >=
        $('.timeline-item').eq(7).offset().top - 200
      ) {
        $('.timeline-item').eq(12).addClass('show');
      }
      if (
        $(window).scrollTop() >=
        $('.timeline-item').eq(8).offset().top - 200
      ) {
        $('.timeline-item').eq(13).addClass('show');
      }
      if (
        $(window).scrollTop() >=
        $('.timeline-item').eq(9).offset().top - 200
      ) {
        $('.timeline-item').eq(14).addClass('show');
      }
      if (
        $(window).scrollTop() >=
        $('.timeline-item').eq(10).offset().top - 200
      ) {
        $('.timeline-item').eq(15).addClass('show');
      }
      if (
        $(window).scrollTop() >=
        $('.timeline-item').eq(11).offset().top - 200
      ) {
        $('.timeline-item').eq(16).addClass('show');
      }
      if (
        $(window).scrollTop() >=
        $('.timeline-item').eq(12).offset().top - 200
      ) {
        $('.timeline-item').eq(17).addClass('show');
      }
      if (
        $(window).scrollTop() >=
        $('.timeline-item').eq(13).offset().top - 200
      ) {
        $('.timeline-item').eq(18).addClass('show');
      }
      if (
        $(window).scrollTop() >=
        $('.timeline-item').eq(14).offset().top - 200
      ) {
        $('.timeline-item').eq(19).addClass('show');
      }
      if (
        $(window).scrollTop() >=
        $('.timeline-item').eq(15).offset().top - 200
      ) {
        $('.timeline-item').eq(20).addClass('show');
      }
      if (
        $(window).scrollTop() >=
        $('.timeline-item').eq(16).offset().top - 200
      ) {
        $('.timeline-item').eq(21).addClass('show');
      }
      if ($(window).scrollTop() >= $('.timeline-item').eq(17).offset().top) {
        $('.timeline-item').eq(22).addClass('show');
      }
      if ($(window).scrollTop() >= $('.timeline-item').eq(18).offset().top) {
        $('.timeline-item').eq(23).addClass('show');
      }
    }, 100);
  });
});

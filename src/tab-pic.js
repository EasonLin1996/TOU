$(function () {
  $('.section-products-item__tabbox img').click(function () {
    let picsrc = $(this).attr('src');

    $('.section-products-item__showbox img').attr('src', picsrc);
  });
});

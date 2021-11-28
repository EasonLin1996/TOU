$(function () {
  //////////第一個slider
  const activeSlider = () => {
    let count = 0;
    timer = setInterval(() => {
      //開啟定時器
      //讓圖片的索引值次序加1，這樣就可以實現順序輪播圖片
      count++;
      if (count > $('.slider__item').length - 1) {
        count = 0;
      }
      $('.slider__dot')
        .eq(count)
        .css('backgroundColor', '#fff')
        .siblings()
        .css('backgroundColor', '#555');
      $('.slider__item').eq(count).stop().fadeIn().siblings().fadeOut(); //模擬觸發數字按鈕的click事件
    }, 5000); //5000為輪播的時間
  };
  activeSlider();

  ////////products owl
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    nav: false,
    dotsEach: false,
    // responsive: {
    //   0: {
    //     // margin: 5,
    //     items: 1,
    //   },
    //   600: {
    //     items: 1,
    //   },
    //   1000: {
    //     items: 1,
    //   },
    // },
  });
  // Go to the next item
  $('.owl-next').click(function () {
    owl.trigger('next.owl.carousel', [300]);
  });
  // Go to the previous item
  $('.owl-prev').click(function () {
    owl.trigger('prev.owl.carousel', [300]);
  });

  ///////lazy load
  $('.lazy').lazyload({
    effect: 'fadeIn',
  });

  ///////////loading
  $('.loader').fadeOut(function () {
    $(this).remove();
  });
});

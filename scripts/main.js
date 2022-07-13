const news = new Swiper('.news-slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  // width: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

$(function () {
  /* Полоски в хедере */
  function headerStripWidth() {
    if ($(window).width() <= 1350) {
      $('.header-bottom__img img').css(
        'width',
        $('.header-bottom .container').width() - $('.header-bottom__nav').width() + 80,
      );
    }
    if ($(window).width() <= 1245) {
      $('.header-top__img img').css(
        'width',
        $('.header-top .container').width() -
          $('.header-top__logo').width() -
          $('.header-top__title').width() +
          30,
      );
    }
  }

  /* Синие полоски на главное у заголовков */

  function blueStripPosition() {
    const UNIT = -(5 / 33);
    let UNITplus = 0;
    let calc = (1920 - $(window).width()) * UNIT;
    if ($(window).width() < 750) {
      UNITplus = -130;
    }
    if ($(window).width() < 1920) {
      $('.areas h2').css('background-position-x', calc <= -200 ? -200 : calc);
      $('.about h2').css('background-position-x', calc + UNITplus);
    }
  }

  $(window).resize(function () {
    headerStripWidth();
    blueStripPosition();
  });
  headerStripWidth();
  blueStripPosition();
});

/* Меню в хедере */
$(function () {
  $('.header-top .header-menu').on('click', function () {
    $('.header-bottom').toggle(function () {
      $('.header-bottom').toggleClass('active');
    });

    $('body').toggleClass('overflow');
  });
});

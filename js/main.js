$(function () {


  const items = $('.dashboard__list .dashboard__item').slice(1);

  const itemsOnPage = 8;

  if (items.length < 1000) {

    $('#list-length').html(items.length);

  } else if (items.length >= 1000) {

    $('#list-length').html(Math.floor(itemsLength / 1000) + 'K');

  }


  showPage(1);

  $('.pagination').pagination({
    items: items.length,
    itemsOnPage,
    edges: 1,
    prevText: '<',
    nextText: '>',
    ellipsePageSet: false,
    displayedPages: 4,
    cssStyle: 'light-theme',

    onPageClick: function (pageNumber) {

      showPage(pageNumber);

    },


  });



  function showPage(pageNumber) {

    items.hide();

    items.removeClass('active-item');

    let start = (pageNumber - 1) * itemsOnPage;

    let end = start + itemsOnPage;

    items.slice(start, end).show();

    items.slice(start, end).addClass('active-item');

    const activeItemIndexs = [];

    items.each((i, el) => {

      if ($(el).hasClass('active-item')) {

        activeItemIndexs.push(i + 1);

      }

    });


    $('#first-item').html(activeItemIndexs[0]);

    $('#last-item').html(activeItemIndexs[activeItemIndexs.length - 1]);


  }





  $('.burger-btn').on('click', function () {

    $('.burger-btn').toggleClass('burger-btn--active');

    $('.nav__menu-inner').toggleClass('nav__menu-inner--active');

    $('body').toggleClass('disable-scroll');

  })

  $('.nav__menu-link, .logo').on('click', function () {

    $('.nav__menu-inner').removeClass('nav__menu-inner--active');

    $('body').removeClass('disable-scroll');

    $('.burger-btn').removeClass('burger-btn--active');

  });

})
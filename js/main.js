$(function () {

  // const customers = $('.dashboard__item');

  // const customersQnt = customers.length;

  // const pagesQnt = Math.ceil(customersQnt / 8);


  $('.pagination').pagination({
    pages: 40,
    itemsOnPage: 6,
    displayedPages: 4,
    edges: 1,
    prevText: '<',
    nextText: '>',
    cssStyle: 'light-theme',
  });



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
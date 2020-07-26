AOS.init();


// 漢堡選單
$(function () {
  $('.menu').on('click', function () {
    $(this).toggleClass('active');
  });

});


// 作品及篩選器----待修正
 var $container = $('.my-works').isotope({});

  $('.works-nav li a').click(function(){
        $('.works-nav .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        console.log(selector);
        $container.isotope({
            filter: selector,
            layoutMode: 'fitRows'
         });
         return false;
    });


// back-to-top
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  $('#back-to-top').tooltip('show');

});

$(document).ready(function () {

  $(window).scroll(function () {

    if ($(this).scrollTop() > 50) {

      $('#back-to-top').tooltip();

      $('#back-to-top').fadeIn();

    } else {

      $('#back-to-top').fadeOut();

      $('#back-to-top').tooltip('hide');

    }

  });

  // scroll body to 0px on click

  $('#back-to-top').click(function () {

    $('body,html').animate({

      scrollTop: 0

    }, 800);

    return false;

  });

});
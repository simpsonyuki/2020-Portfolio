AOS.init();


// 漢堡選單
$(function () {
  $('.menu').on('click', function () {
    $(this).toggleClass('active');
  });

});


// 作品集篩選器
 var $container = $('.my-works').isotope({});

  $('.works-nav li a').click(function(){
        $('.works-nav .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            layoutMode: 'fitRows'
         });
         return false;
    });


// back-to-top

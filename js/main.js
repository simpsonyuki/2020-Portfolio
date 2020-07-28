AOS.init();


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




 
// back-to-top--未完成




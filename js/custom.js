$('.sl').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1,
    dots: true
});


$('.flowing-scroll').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
            scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 1000 // скорость прокрутки
        );
    }
    return false;
});

//  $(window).scroll(function() {
//         if ($(this).scrollTop() > 300) {
//             $('.scrollToTop').fadeIn();
//         } else {
//             $('.scrollToTop').fadeOut();
//         }
//     });
//     //Click event to scroll to top
//     $('.scrollToTop').click(function() {
//         $('html, body').animate({
//             scrollTop: 0
//         }, 800);
//         return false;
//     });
//     $('.tootlip').tooltip();
//     $("ul#ticker01").liScroll();

// wow = new WOW({
//     animateClass: 'animated',
//     offset: 100
// });
// wow.init();

// jQuery(window).load(function() { // makes sure the whole site is loaded
//     $('#status').fadeOut(); // will first fade out the loading animation
//     $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
//     $('body').delay(100).css({
//         'overflow': 'visible'
//     });
// })
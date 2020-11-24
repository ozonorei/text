$(document).ready(function () {
    $('.dropdown').click(function (e) { 
        e.preventDefault();
        $('.dropdown').toggleClass('active');
        $('.dropdown-open').slideToggle();
    });

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
            delay: 3000,
          },
          effect : 'cube',
          keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        speed:5000,
        
      
        
      })

      $('.top a').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },2000)
    });
});
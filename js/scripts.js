$(document).ready(function(){

    $('.scnd-link').on('click', () => {
        $('.scnd-link').toggleClass('link-active');
        $('.frst-link').removeClass('link-active');
    })

    $('.frst-link').on('click', () => {
        $('.frst-link').toggleClass('link-active');
        $('.scnd-link').removeClass('link-active');
    })

    $('.burger-icon-wrapper').on('click', () => {
        $('.mobile-navigation').toggleClass('mobile-hidden');
        $('.hamburger').toggleClass('is-active');
    })

    $('.video-icon').on('click', () => {
        $('.video-icon').toggleClass('video-img');
        $('.video-overlay').toggleClass('video-img');
    })

    $('.video-overlay').on('click', () => {
        $('.video-icon').toggleClass('video-img');
        $('.video-overlay').toggleClass('video-img');
    })

    function checkWidth() {
        var windowWidth = $('body').innerWidth(),
            elem = $('.video-icon');
            elem1 = $('.support-link-request');
            elem2 = $('.contact-link');
            elem3 = $('.footer-nav-item a');
            elem4 = $('.frst-link');
            elem5 = $('.scnd-link');
            elem6 = $('.nav-item');
            elem7 = $('.subscribe-button');
                                        
        if(windowWidth < 1025){
          elem.removeClass('video-icon-hover');
          elem1.removeClass('hover-support-link-request');
          elem2.removeClass('hover-class-link');
          elem3.removeClass('hover-footer-nav-item');
          elem4.removeClass('hover-link');
          elem5.removeClass('hover-link');
          elem6.removeClass('hover-nav-item');
          elem7.removeClass('hover-subscribe-button');
        }
        else{
          elem.addClass('video-icon-hover');
          elem1.addClass('hover-support-link-request');
          elem2.addClass('hover-class-link');
          elem3.addClass('hover-footer-nav-item');
          elem4.addClass('hover-link');
          elem5.addClass('hover-link');
          elem6.addClass('hover-nav-item');
          elem7.addClass('hover-subscribe-button');
        }
      }
    
      checkWidth(); // проверит при загрузке страницы
    
      $(window).resize(function(){
        checkWidth(); // проверит при изменении размера окна клиента
      });

});
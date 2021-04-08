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
        $("#video1")[0].src += "?autoplay=1";
        $("#video2")[0].src += "?autoplay=1";
    })

    $('.video-overlay').on('click', () => {
        $('.video-icon').toggleClass('video-img');
        $('.video-overlay').toggleClass('video-img');
        $("#video1")[0].src += "?autoplay=1";
        $("#video2")[0].src += "?autoplay=1";
    })

    


});
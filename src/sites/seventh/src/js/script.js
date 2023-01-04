$(document).ready(function(){
    // swiper slider
    let swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });
    let menuSwiper = new Swiper('.swiper-container-menu', {
        slidesPerView: 'auto',
        spaceBetween: 63,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    // video
    $('.play_yt').click(function () {
        $(this).hide('slow');
        $('.yt_video').attr('src', 'https://www.youtube.com/embed/MzI_CIYSsfQ?autoplay=1&mute=1');
    });

    // input range
    let j = jQuery; //Just a variable for using jQuery without conflicts
    let addInput = '#qty'; //This is the id of the input you are changing
    let n = 1; //n is equal to 1

    //Set default value to n (n = 1)
    j(addInput).val(n + 'шт');

    //On click add 1 to n
    j('.plus').on('click', function(){
        j(addInput).val(++n + 'шт');
    })

    $('#reg-btn').click(function () {
        $('#login').hide('slow');
        $('.modal-backdrop').toggleClass('modal-backdrop');
    })

    $('.forgot_pass').click(function () {
        $('#login').hide('slow');
        $('.modal-backdrop').toggleClass('modal-backdrop');
    })

    j('.min').on('click', function(){
        //If n is bigger or equal to 1 subtract 1 from n
        if (n >= 1) {
            j(addInput).val(--n + 'шт');
        } else {
            //Otherwise do nothing
        }
    });

    // slider review
    //bootstrap
    $('.rev-swiper').on('shown.bs.tab', function (e) {
        let swiperReviews = new Swiper('.slider-reviews', {
            slidesPerView: 2,
            spaceBetween: 16,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    })

    $('.navbar-toggler').on('click', function () {
        $(this).toggleClass('change-button')
    });
    $('.mobile-bottom-menu_a').on('click', function () {
        $('.mobile-bottom-menu_a').removeClass('active');
        $(this).toggleClass('active');
    });
});
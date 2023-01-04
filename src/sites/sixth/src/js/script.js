$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: true,
        speed: 1000,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-1.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-2.png" alt=""></button>',
        fade: true,
        autoplay: true,
        autoplaySpeed: 8000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }]
    });

    // preloader
    $(window).load(function() {
        $('#status').fadeOut();
        $('#preloader').delay(500).fadeOut('slow');
    });

    // flight to the basket
    $(".to-cart").on("click",function(){
        if ($(window).width() > 575) {
            id = $(this).attr("for");
            $("#product"+id)
                .clone()

                .css({'position' : 'absolute', 'z-index' : '9998', top: $(this).offset().top-0, left:$(this).offset().left-(-100)})
                .appendTo("body")
                .animate({opacity: 0.5,
                    left: $(".fl-outicons-shopping-cart13").offset()['left'],
                    top: $(".fl-outicons-shopping-cart13").offset()['top'],
                    width: 100}, 1000, function() {
                    $(this).fadeOut('slow');
                });
            function stop() {
                $('.fl-outicons-shopping-cart13').toggleClass('fl-outicons-shopping-cart13_add');
            }
            function start(){
                $('.fl-outicons-shopping-cart13').toggleClass('fl-outicons-shopping-cart13_add');
            }
            window.setTimeout(start, 1500);
            window.setTimeout(stop, 3100);
        }
    });

    // tap on btn
    $('.hamburger').on('click', function () {
        $('.hamburger').toggleClass('hamburger_active');
        $('.collapse').toggleClass('collapse_active');
    });

    // close button
    function setCookie(){
        $('#top-header').fadeOut('slow');
        $('.nav, .hamburger').toggleClass('top-close');
        $('.slider').toggleClass('slider-close');
    }
    $('#url1').on('click', function () {
        setCookie();
    });

    // WOW
    new WOW().init();

    // count
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        let clock = document.getElementById(id);
        let daysSpan = clock.querySelector('.days');
        let hoursSpan = clock.querySelector('.hours');
        let minutesSpan = clock.querySelector('.minutes');
        let secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            let t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        let timeinterval = setInterval(updateClock, 1000);
    }
    let deadline="December 01 2020 00:00:00 GMT+0300";
    initializeClock('countdown', deadline);
    initializeClock('parallax_countdown', deadline);

    // video
    let vid = document.getElementById("myVideo");

    function playVid() {
        vid.play();
    }
    function pauseVid() {
        vid.pause();
    }

    $('.play').on('click', function () {
        playVid();
        $('.stop').toggleClass('stop_view');
        $('.play').toggleClass('play_view');
    });

    $('.stop').on('click', function () {
        pauseVid();
        $('.stop').toggleClass('stop_view');
        $('.play').toggleClass('play_view');
    });
    let o = document.getElementsByClassName("slider_video").tabIndex;
    // console.log(o);

    // Dropdown
    $('.dropdown').on('click', function () {
        $('.dropdown').toggleClass('show');
        $('.dropdown-menu').toggleClass('show');
    })
    // close when clicking on document
    $(document).on('click', function(event){
        let $target = $(event.target).closest('.dropdown');
        if ( !$target.length) {
            $('.show').removeClass('show');
        }
    })

    // Pageup
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800){
            if ($(this).width() > 575){
                $('.pageup').fadeIn();
                $('.basket').fadeIn();
            }

        }else {
            $('.pageup').fadeOut();
            $('.basket').fadeOut();
        }
    });

    //Smooth scroll
    $(document).ready(function(){
        $('a[href*="#up"]').on("click", function(e){
            const anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 777);
            e.preventDefault();
            return false;
        });
    });

    // Cookie
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    $('#url1').on('click', function () {
        document.cookie = "topHeader=true; max-age=3600";
        $('#top-header').fadeOut('slow');
    });

    $(document).ready(function (){
        let box1 = getCookie("topHeader")//Получаем значение куки
        if (box1 !== undefined){
            document.getElementById("nav").style.paddingTop = "0";
            document.getElementById("slider").style.paddingTop = "100px";
            $('#top-header').fadeOut('slow');
        }
    });

    // get coordinates
    // function getCoords(elem) { // кроме IE8-
    //     let box = elem.getBoundingClientRect();
    //
    //     return box.top + pageYOffset
    // }
    // window.addEventListener('scroll', function() {
    //     const test = document.getElementById("preview-wrapper");
    //     if(Math.round(pageYOffset) == Math.round(getCoords(test)))
    //         $('#preview-wrapper').toggleClass('wow animate__animated animate__fadeInLeft');
    //     else
    //         $('#preview-wrapper').removeClass('wow animate__animated animate__fadeInLeft');
    //     //console.log(pageYOffset + 'px');
    // });


    // Animate for nav
    // let isResizeble = true;
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 200) {
    //         if (isResizeble)
    //             $('.nav').toggleClass('wow animate__animated animate__fadeInDown');
    //         isResizeble = false;
    //     }
    // });

    $('#test-clock').on('click', function () {
        $('.count_wrapper').toggleClass('count_wrapper_hidden');
        $('.clock-item').toggleClass('clock-item_test');
    });
});


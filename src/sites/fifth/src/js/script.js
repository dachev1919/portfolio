$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-prew.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-next.png" alt=""></button>',
        // fade: true
        // autoplay: true,
        // autoplaySpeed: 3000
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal view
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.button_mini').on('click', function () {
        $('.overlay, #order').fadeIn('slow');
    });

    // title in modal window
    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
        });
    });

    // close button
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    //validate
    function validateForms(form) {
        $(form).validate({
            rules:{
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Please specify your name",
                    minlength: jQuery.validator.format("At least {0} characters!")
                },
                phone: "Please specify your phone",
                email:{
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format of name@domain.com"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#order form');
    validateForms('#consultation form');

    $('input[name=phone]').mask("38(999) 999-99-99");

    //sent mail
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "../mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    // Pageup
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600){
            $('.pageup').fadeIn();
        }else {
            $('.pageup').fadeOut();
        }
    });

    //Smooth scroll
    $(document).ready(function(){
        $("a[href*=#]").on("click", function(e){
            const anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 777);
            e.preventDefault();
            return false;
        });
    });

    // WOW
    new WOW().init();
});
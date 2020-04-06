$(document).ready(function() {
    var welcomeSlide = $('.slide-desc');
    welcomeSlide.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1200,
        cssEase: 'linear',
        prevArrow: $('.slide-prev'),
        nextArrow: $('.slide-next')
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1200
    });

    $('.galery-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.product-dec-prev'),
        nextArrow: $('.product-dec-next'),
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }

        ]
    });

    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#scrollUp').fadeIn();
        } else {
            $('#scrollUp').fadeOut();
        }
    });

    $(document).ready(function() {
        $("#scrollUp").click(function(event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });

    })


    $(document).ready(function() {
        var formFields = $('.register-form .input-field');

        formFields.each(function() {
            var field = $(this);
            var input = field.find('input');
            var label = field.find('label');

            function checkInput() {
                var valueLength = input.val().length;

                if (valueLength > 0) {
                    label.addClass('move')
                } else {
                    label.removeClass('move')
                }
            }

            input.change(function() {
                checkInput()
            })
        });
    });

    var yourNavigation = $(".sticky-bar");
    stickyDiv = "stick";
    yourHeader = $('.header').height();

    $(window).scroll(function() {
        if ($(this).scrollTop() > yourHeader) {
            yourNavigation.addClass(stickyDiv);
        } else {
            yourNavigation.removeClass(stickyDiv);
        }
    });

    $('ul.nav-tabs li a').click(function(e) {
        $('ul.nav-tabs li.active').removeClass('active')
        $(this).parent('li').addClass('active')
    })

    var $preloader = $('#page-preloader'),
        $spinner = $preloader.find('.cssload-container');
    $spinner.fadeOut();
    $preloader.delay(300).fadeOut('slow');

    $(".setting-active").on("click", function() {
        $(".modal-register").css("display", "block")
    });

    $(".close").on("click", function() {
        $(".modal-register").css("display", "none");
        $(':input', '#create_customer')
            .not(':button, :submit, :reset')
            .val('')
    });

    $(".close").on("click", function() {
        $(".modal-login").css("display", "none")
    });

    $(".register-form").submit(function(event) {
        console.log(event)
        $(".name-errors").hide();
        $(".password-errors").hide();
        event.preventDefault();

        function isValidName(Name) {
            var pattern = new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
            return pattern.test(Name);
        };

        function isValidPassword(Password) {
            var pattern = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/);
            return pattern.test(Password);
        };

        if (!isValidName($("#FirstName").val()) || !isValidName($("#LastName").val())) {
            $(".name-errors").show();
        };

        if (!isValidPassword($("#CreatePassword").val())) {
            $(".password-errors").show();
        };

        if (isValidPassword($("#CreatePassword").val()) && isValidName($("#FirstName").val()) && isValidName($("#LastName").val())) {
            $(".modal-register").css("display", "none")
            $(".modal-login").css("display", "block")
            $(".register-success").show();
        }

    });

    $(".contact-form").submit(function(event) {
        console.log(event)
        $(".name-errors").hide();
        $(".theme-errors").hide();
        $(".form-success").hide();
        event.preventDefault();

        function isValidName(Name) {
            var pattern = new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
            return pattern.test(Name);
        };

        function isEmptyTheme(Theme) {
            var pattern = new RegExp(/^\s*$/);
            return pattern.test(Theme);
        };

        if (!isValidName($("#name").val())) {
            $(".name-errors").show();
        };

        if (isEmptyTheme($("#theme").val())) {
            $(".theme-errors").show();
        };

        if (!isEmptyTheme($("#theme").val()) && isValidName($("#name").val())) {
            $(".form-success").show();
        }
    });
});

    function DarkModeSwitch(){
        document.body.style.backgroundColor = '#282828';
        document.getElementById('logo-img').src = 'img/logo1.png'
        document.getElementById('light-button').classList.toggle('hide');
        document.getElementById('dark-button').classList.toggle('hide');
        ToggleDarkModeSelectorAll()
        ToggleDarkModeSelector();
    }

    function LightModeSwitch(){
        document.body.style.backgroundColor = '#fff';
        document.getElementById('logo-img').src = 'img/logo2.png'
        document.getElementById('light-button').classList.toggle('hide');
        document.getElementById('dark-button').classList.toggle('hide');
        ToggleDarkModeSelectorAll()
        ToggleDarkModeSelector();
    }

    function ToggleDarkModeSelector(){
        document.querySelector('.header').classList.toggle('dark');
        document.querySelector('.section-footer').classList.toggle('dark');
        document.querySelector('.login-form-container').classList.toggle('dark');
        document.querySelector('.testimonial-area').classList.toggle('dark');
        document.querySelector('.mega-menu').classList.toggle('dark');
        document.querySelector('.swatch-title').classList.toggle('dark');

    }
    function ToggleDarkModeSelectorAll(){
        for(var i = 0; i < document.querySelectorAll('h2, h3, h4, h5').length; i++){
            document.querySelectorAll('h2, h3, h4, h5')[i].classList.toggle('dark');
        }
        for(var i = 0; i < document.querySelectorAll('a').length; i++){
            document.querySelectorAll('a')[i].classList.toggle('dark');
        }
        for(var i = 0; i < document.querySelectorAll('p').length; i++){
            document.querySelectorAll('p')[i].classList.toggle('dark');
        }
        for(var i = 0; i < document.querySelectorAll('i').length; i++){
            document.querySelectorAll('i')[i].classList.toggle('dark');
        }
        for(var i = 0; i < document.querySelectorAll('table').length; i++){
            document.querySelectorAll('table')[i].classList.toggle('dark');
        }
        for(var i = 0; i < document.querySelectorAll('input').length; i++){
            document.querySelectorAll('input')[i].classList.toggle('dark');
        }
        for(var i = 0; i < document.querySelectorAll('span').length; i++){
            document.querySelectorAll('span')[i].classList.toggle('dark');
        }
        for(var i = 0; i < document.querySelectorAll('label').length; i++){
            document.querySelectorAll('label')[i].classList.toggle('dark');
        }
        for(var i = 0; i < document.querySelectorAll('button').length; i++){
            document.querySelectorAll('button')[i].classList.toggle('dark');
        }

    }
(function ($) {
    "use strict";

    $(window).on('load', function () {
        $('.lds-ellipsis').fadeOut();
        $('.preloader').fadeOut();
    });

    $('.primary-menu ul.navbar-nav li.dropdown, .login-signup ul.navbar-nav li.dropdown').on("mouseover", function () {
        if ($(window).width() > 991) {
            $(this).find('> .dropdown-menu').stop().slideDown('fast');
            $(this).bind('mouseleave', function () {
                $(this).find('> .dropdown-menu').stop().css('display', 'none');
            });
        }
    });

    $('.primary-menu ul.navbar-nav .dropdown-menu').each(function () {
        var menu = $('#header .container-fluid').offset();
        var dropdown = $(this).parent().offset();

        var i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('#header .container-fluid').outerWidth());

        if (i > 0) {
            $(this).css('margin-left', '-' + (i + 5) + 'px');
        }
    });

    $(function () {
        $(".dropdown li").on('mouseenter mouseleave', function (e) {
            var elm = $('.dropdown-menu', this);
            if (elm.length > 0 && $(window).width() > 991) {
                var off = elm.offset();
                var l = off.left;
                var w = elm.width();
                var docW = $(window).width();
                var isEntirelyVisible = (l + w + 30 <= docW);
                if (!isEntirelyVisible) {
                    $(elm).addClass('dropdown-menu-right');
                } else {
                    $(elm).removeClass('dropdown-menu-right');
                }
            }
        });
    });

    $('.primary-menu ul.navbar-nav').find('a.dropdown-toggle').append($('<i />').addClass('arrow'));

    $('.primary-menu .navbar-nav .dropdown-toggle[href="#"], .primary-menu .dropdown-toggle[href!="#"] .arrow').on('click', function (e) {
        if ($(window).width() < 991) {
            e.preventDefault();
            var $parentli = $(this).closest('li');
            $parentli.siblings('li').find('.dropdown-menu:visible').slideUp();
            $parentli.find('> .dropdown-menu').stop().slideToggle();
            $parentli.siblings('li').find('a .arrow.show').toggleClass('show');
            $parentli.find('> a .arrow').toggleClass('show');
        }
    });

    $('.navbar-toggler').on('click', function () {
        $(this).toggleClass('show');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebarCollapse span:nth-child(3)').toggleClass('w-50');
        $('.idocs-navigation').toggleClass('active');
    });

    $('.smooth-scroll,.idocs-navigation a').on('click', function () {
        var sectionTo = $(this).attr('href');

        if (sectionTo.startsWith("#")) {
            event.preventDefault();

            $('html, body').stop().animate({
                scrollTop: $(sectionTo).offset().top - 120
            }, 1000, 'easeInOutExpo');

            $('#sidebarCollapse').click();

            window.location.hash = sectionTo;
        }
    });

    $(function () {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 100) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
    });
    $('#back-to-top').on("click", function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
})(jQuery)
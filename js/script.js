// MENU LINKS - SCROLL ANIMATION

$(document).ready(function() {
    var menu = $('.header_navigation, .header_navigation-hidden, .header_content'),

        menuLinks = menu.find('a');

    menuLinks.on('click', function(event) {
        $('html,body').animate({scrollTop: $(this.hash).offset().top}, 500);
        $('.header_navigation-hidden').fadeOut();
        event.preventDefault();
    });
});

// HIDDEN NAVIGATION

$(document).ready(function() {
    // HIDE
    $('.header_navigation-hidden').hide();
    // TOGGLE
    $('.header_hamburger-hidden').click(function() {
        $('.header_navigation-hidden').fadeToggle(); 
    });
});

// REVIEWS SECTION - CAROUSEL ANIMATION 

$(document).ready(function(){
  $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false
  });
});

// BACK TO TOP - ARROW

$(document).ready(function() {

    var backToTop = $('<a>', {
        href: '#top',
        class: 'back-to-top',
        html: '<i class="fa fa-caret-up"></i>'
    });

    backToTop
        .hide()
        .appendTo('body')
        .on('click', function() {
            $('html,body').animate({scrollTop: 0});
        });

    var win = $(window);
    win.on('scroll', function() {
        if (win.scrollTop() >= 875) backToTop.fadeIn();
        else backToTop.hide();
    }); 
});
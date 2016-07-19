(function($) {
    $(function() {

        $('.button-collapse').sideNav();
        $(".dropdown-button").dropdown();
        $('.parallax').parallax();
        $('.slider').slider({
            full_width: true
        });
        $('.owl-carousel').owlCarousel({
            items: 1,
            lazyLoad: true,
            loop: true,
            margin: 10,
            autoHeight: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            autoplaySpeed: 2000
        });


    }); // end of document ready
})(jQuery); // end of jQuery name space

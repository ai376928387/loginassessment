
$(document).ready(function() {

    // Adjust fullscreen elements

    if ($(window).width() > 768) {
        $('section.fullscreen:nth-of-type(1)').css('height', ($(window).height() - $('nav').outerHeight(true)));
    }

});

(function() {
    $.getJSON('slider.json', function(data) {
        var template = $('#sliderTpl').html();
        var html = Mustache.to_html(template, data);
        $('#login-templates').html(html);
        //flexslider

        $('.login-slider').flexslider({
            move: 1,
            itemMargin: 0,
            animation: "slide",
            slideshow: true,
            slideshowSpeed: 7000,
            directionNav: false,
            controlNav: true
        });
    });
}());


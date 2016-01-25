$(document).ready(function() {
    // Adjust fullscreen elements
    if ($(window).width() > 768) {
        $('section.fullscreen:nth-of-type(1)').css('height', ($(window).height() - $('nav').outerHeight(true)));
    } else {
        $('#not-store a').empty();
        $('#not-store').attr('class', 'font-grey float-right icon-remove');
    }

    //form validate
    $.validator.setDefaults({
        submitHandler: function() {
            alert("submitted!");
        }
    });
    $('#login-form').validate({
        rules: {
            id: {
                required: true,
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            id: "Please enter the username or email",
            password: {
                required: "Please enter a password",
                minlength: "Your password must be at least 5 characters long"
            }
        }
    });
});

(function() {

    //ajax get slida data
    $.getJSON('slider.json', function(data) {
        var template = $('#sliderTpl').html();
        var html = Mustache.to_html(template, data);
        $('#login-templates').html(html);

        //flexslider init
        if ($(window).width() > 768) {
            $('.login-slider').flexslider({
                move: 1,
                itemMargin: 0,
                animation: "slide",
                slideshow: true,
                slideshowSpeed: 7000,
                directionNav: false,
                controlNav: true
            });
        }
    });
}());
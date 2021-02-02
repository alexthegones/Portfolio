
$(window).scroll(function () {
    if ($(window).scrollTop() >= 500) {
        $('nav').css('background-color', '#17283d');
    } else {
        $('nav').css('background-color', 'transparent');
    }
});
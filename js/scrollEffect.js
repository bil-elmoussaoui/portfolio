$(function () {
    $('.scroll a').bind('click', function (event) {
        var $anchor = $(this);
        if ($($anchor.attr("href")).length) {
            var element = $anchor.attr("href");
        } else {
            var element = "body";
        }
        $('body,html').stop().animate({
            scrollTop: $(element).offset().top
        }, 600, 'easeInOutExpo');
        event.preventDefault();
    });
});
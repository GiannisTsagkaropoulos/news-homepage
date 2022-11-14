let isPressed = false;

$('.menu-toggle').click(function () {
    // console.log(isPressed)
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
    $(".div-class ").toggleClass("toggle-burger");
    $(".nav-wrapper").toggleClass("zind");
    if ($(".div-class").hasClass("toggle-burger")) {
        isPressed = true;
        $(".no-search").removeClass(".none-disp")
    } else {
        isPressed = false;
    }
});

$(window).resize(function () {
    console.log(isPressed)
    if ($(window).width() > 900 && isPressed == true) {//to z index einai 1 ara to kanw -1
        $(".div-class").removeClass("toggle-burger");
    }
    if ($(window).width() < 900 && isPressed == true) {
        $(".div-class").addClass("toggle-burger");
    }
}).resize();



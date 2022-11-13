let isPressed = false;
$(window).resize(function () {
    console.log(isPressed)
    if ($(window).width() > 900 && isPressed == true) {//to z index einai 1 ara to kanw -1
        $(".div-class").removeClass("toggle-burger");
    }
    if ($(window).width() < 900 && isPressed == true) {
        $(".div-class").addClass("toggle-burger");
    }
}).resize();


$('.menu-toggle').click(function () {
    // console.log(isPressed)
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
    $("ul").toggleClass("test");
    $(".div-class ").toggleClass("toggle-burger");
    $(".nav-wrapper").toggleClass("zind");
    if ($(".div-class").hasClass("toggle-burger")) {
        isPressed = true;
    } else {
        isPressed = false;
    }
});
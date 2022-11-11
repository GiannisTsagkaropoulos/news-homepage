
// function myFunction() {
//     var x = document.getElementsByClassName("my-link");
//     for (item of x) {
//         if ((item.classList).contains('hide')) {
//             item.classList.remove('hide')
//         } else {
//             item.classList.add('hide')
//         }
//     }
// }

$(window).resize(function () {
    var links = document.getElementsByClassName("my-link");
    var burger = document.getElementById('burger');
    console.dir(burger)
    if ($(window).width() < 800) {
        for (link of links) {
            $(link).addClass('hide');
        }
    } else {
        for (link of links) {
            $(link).removeClass('hide');
        }
    }
}).resize();


$('.menu-toggle').click(function () {
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
    $("ul").toggleClass("test");
    $(".div-class ").toggleClass("toggle-burger");
    $(".nav-wrapper").toggleClass("zind");
    // $(".menu-toggle").toggleClass("test");
});
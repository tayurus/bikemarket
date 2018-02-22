$(document).ready(function() {
    $(".header__hamburger").click(function(){
        $(".header__menu").toggle(400);
        $(".container_top .title").toggleClass("title_pb115");
    })
})

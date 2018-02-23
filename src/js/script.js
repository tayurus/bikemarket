$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        autoplay:true,
        autoplayTimeout:2000,
        loop: true,
        dots: true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items: 1
            },
            1030:{
                items:2
            },
            1450:{
                items:3
            }
        }
    });


    $(".container__to-bottom").click(function(){
        window.scrollBy({
            top: $(".container_top").height(),
            left:0,
            behavior:"smooth"
        });
    })
})

$(document).ready(function(){
    // $('[data-toggle="tooltip"]').tooltip();

    $('#mycarousel').carousel({interval:1500});

    // $('#carousel-pause').click(function(){
    //     $('#mycarousel').carousel('pause');
    // })
    // $('#carousel-play').click(function(){
    //     $('#mycarousel').carousel('cycle');
    // })
    
    $('#loginButton').click(function(){
        $('#loginModal').modal('toggle');
    });

    $('#reserveButton').click(function(){
        $('#Reserve').modal('toggle');
    });

    
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }       
     });

});
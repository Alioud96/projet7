$(document).ready(function(){ 
    
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load'),function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){  
            $('.top').show();
             }else{ 
                $('.top').hide()
                

             }
    }); 

    // smooth scrolling
    $('a[href*="#"]').click(function(e){   

        e.preventDefault();
        $('html, body').animate({ 
            scrollTop : $($(this).attr('href')).offset().top,
            
            
        },
          500,
          'linear'


        );

    });

}); 


const spans = document.querySelectorAll('.progress-bar span');

spans.forEach((span) => {

    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
});







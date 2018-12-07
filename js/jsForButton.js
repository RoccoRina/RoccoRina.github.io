$(document).ready(function(){
    $("#refOnButton").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
 
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
 
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


    
    $(function() { 
    
    $(window).scroll(function() { 
    
    if($(this).scrollTop() != 0) { 
    
    $('#toTop').fadeIn(); 
    
    } else { 
    
    $('#toTop').fadeOut(); 
    
    } 
    
    }); 
    $('#toTop').click(function() { 

        $('body,html').animate({scrollTop:0},800); 
        
        }); 
        
        });
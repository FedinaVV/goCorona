 //Burger-menu
 $(document).ready(function(){
    $('.icon-menu').click(function(event){
    $('.icon-menu, .menu__body').toggleClass('active');
    });
    });


    //Button to top
function backToTop(){
    let button=$('.to-top');
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50) {
        button.fadeIn();
    } else {
        button.fadeOut();
    }
    });
    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop:0}, 1000);
    })
    }
    
    backToTop();
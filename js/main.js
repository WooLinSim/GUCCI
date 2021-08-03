$(document).ready(function(){
    $('.mo_menu .close').click(function(){
        $('.mo_menu nav').stop().slideDown(500);
    })
    $('.mo_menu .close2').click(function(){
        $('.mo_menu nav').stop().slideUp(500);
    })

    $(function(){
        //위로 올라가기 버튼
        $( window ).scroll( function(){
            if ( $( this ).scrollTop() > 400 ) {
                $( '.tothetop' ).fadeIn();
            }else { $( '.tothetop' ).fadeOut();
                } 
        } );
        $( '.tothetop' ).click( function() {
            $( 'html, body' ).animate( { scrollTop : 0 }, 400 ); return false;
        } );

        var h_top=$('.header_bottom').offset().top;
        $(window).scroll(function(){
            var win_top=$(window).scrollTop();
            if(win_top>=h_top) {
                $('.header_bottom').addClass('active');
                }else{
                    $('.header_bottom').removeClass('active');
                }
        })
    })
});
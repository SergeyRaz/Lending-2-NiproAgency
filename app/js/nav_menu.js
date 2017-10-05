
    
function time(){
    $('.nav__btn_item-top').fadeIn(0);
    $('.nav__btn_item-bottom').fadeIn(0);
}    
    
$(function() {
    $('.nav__btn').click(function(){
        if($('.nav__btn_item-top').css('display') == 'block'){
            $('.nav__btn_item-top').fadeOut(0);
            $('.nav__btn_item-bottom').fadeOut(0, function(){
                $('.nav__btn_item-center1').css('transform', 'rotate(45deg)');
                $('.nav__btn_item-center2').css('transform', 'rotate(-45deg)');
            });
            
        }
        else if($('.nav__btn_item-top').css('display') == 'none'){
            $(function(){
                $('.nav__btn_item-center1').css('transform', 'rotate(0deg)');
                $('.nav__btn_item-center2').css('transform', 'rotate(0deg)');
            });
            setTimeout(time, 500);
        }
        
        
        if($('.nav__list').css('display') == 'none'){
            $('.nav__list').fadeIn(300);
            $('.nav__list').css('display', 'flex');
            console.log('ok');
        }
        else if($('.nav__list').css('display') == 'flex'){
            $('.nav__list').fadeOut(300, function(){
                $('.nav__list').css('display', 'none');
                $('.nav__list').removeAttr('style');
            });
            
        }
    });
});
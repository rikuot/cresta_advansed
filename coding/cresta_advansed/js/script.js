$(function(){
    // メニューボタンのスライド
    var flag = 0;
    $('#menu').click(function(){
        if(flag == 0){
            // メニュー開く時
            $('#slide').animate({'margin-right':0},200);
            $('#slide').animate({'opacity':1},100,);
            $(this).find('.menu__bar').addClass('close');
            $('#musk').addClass('active');
            $('body').addClass('noscroll');
            $('.menu_text').removeClass('menu_black');
            $('.menu__bar').removeClass('menu__bar_black');
        flag+= 1;
        }else{
            // メニュー閉じる時
            var slideWidth = $('#slide').css('width');
            $('#slide').animate({'margin-right':'-'+slideWidth},300);
            $('#slide').animate({'opacity':0},100);
            $(this).find('.menu__bar').removeClass('close');
            $('#musk').removeClass('active');
            $('body').removeClass('noscroll')
            if($(window).scrollTop()>rightHeight){
                $('.menu_text').addClass('menu_black');
                $('.menu__bar').addClass('menu__bar_black');
            }
        flag -= 1;
        }
    });


    // メニューボタン&サイトロゴのスクロール時の色を黒に変更
    var leftHeight = $('.kv-left').height()-44;
    var rightHeight = $('.kv-right').height()-44;
    $(window).scroll(function(){
        if($(window).scrollTop()>rightHeight){
            $('.menu_text').addClass('menu_black');
            $('.menu__bar').addClass('menu__bar_black');
        }else{  
            $('.menu_text').removeClass('menu_black');
            $('.menu__bar').removeClass('menu__bar_black');
        }
        if($(window).scrollTop()>leftHeight){
            $('.svg_path').addClass('site-logo_black');
        }else{
            $('.svg_path').removeClass('site-logo_black');
        }
    });
});




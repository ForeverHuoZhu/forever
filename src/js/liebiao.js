$(function() {
    $("button").click(function() {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $("#sry>div").eq(index).show().siblings().hide();
    });
})




$(function() {
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 100) {
                $("button").fadeIn(1500);
            } else {
                $("button").fadeOut(1500);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $("button").click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    });
});
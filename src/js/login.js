$(".table-header-left").click(function () {
    var index = $(this).index();
    if (index == 2) {
        index = 1
    }
    $(this).addClass("active").siblings().removeClass("active");
    $(".cut>div").eq(index).show().siblings().hide();
});
$("#btn-reg").click(function () {
    var phone = getCookie($("#phone").val());
    var pwd = getCookie($("#phone").val() + "pwd");
    if ($("#phone").val() == phone && $("#pwd").val() == pwd) {
        alert("登录成功");
    } else {
        alert("请输入正确的帐号或密码！");
        return false;
    }
});
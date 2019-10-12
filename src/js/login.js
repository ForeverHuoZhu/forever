$(".table-header-left").click(function () {
    var index = $(this).index();
    if (index == 2) {
        index = 1
    }
    $(this).addClass("active").siblings().removeClass("active");
    $(".cut>div").eq(index).show().siblings().hide();
});
$("#btn-reg").click(function () {
    var user = getCookie("user") ? JSON.parse(getCookie("user")) : [];
    var flag = true;
    for (var i = 0; i < user.length; i++) {
        if ($("#phone").val() == user[i].phone && $("#pwd").val() == user[i].pwd) {
            flag = true;
        }
        else{
            flag = false;
        }
    }
    if(flag){
        alert("登录成功");
    }else{
        alert("请输入正确的用户名或密码");
        return false;
    }
});
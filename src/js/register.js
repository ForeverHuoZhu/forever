var regphone = /^1[34578]\d{9}$/;
var regyzm = /\w{6}/;
var regpwd = /^\w{6,20}$/;

var phone = 0;
var pwd = '';
var user = getCookie("user") ? JSON.parse(getCookie("user")) : [];

$("#phone").blur(function () {
    if (!regphone.test($("#phone").val())) {
        $(".input-phone").html("请输入正确的手机号码");
    } else {
        phone = $("#phone").val();
        $(".input-phone").html("");
    }
    if (!$("#phone").val()) {
        $(".input-phone").html("手机号不能为空");
    }
    for (var i = 0; i < user.length; i++) {
        if ($("#phone").val() == user[i].phone) {
            $(".input-phone").html("该手机号已注册");
        }
    }

});
$("#pvcode").blur(function () {
    if (!regyzm.test($("#pvcode").val()) || !$("#pvcode").val()) {
        $(".input-pvcode").html("请输入6位数字手机验证码");
    } else {
        $(".input-pvcode").html("");
    }
});
$("#pwd").blur(function () {
    if (!regpwd.test($("#pwd").val())) {
        $(".input-pwd1").html("请输入6-20位密码");
    } else {
        $(".input-pwd1").html("");
    }
    if (!$("#pwd").val()) {
        $(".input-pwd1").html("密码不能为空");
    }
});
$("#pwd-a").blur(function () {
    if ($("#pwd-a").val() != $("#pwd").val()) {
        $(".input-pwd2").html("两次输入的密码不一致，请重试");
    } else {
        pwd = $("#pwd-a").val();
        $(".input-pwd2").html("");
    }
    if (!$("#pwd-a").val()) {
        $(".input-pwd2").html("请输入确认密码");
    }
});
$("#phone-agree").blur(function () {
    if (!$("#phone-agree").is(':checked')) {
        $(".input-agree").html("接受服务条款才能注册");
    } else {
        $(".input-agree").html("");
    }
});
$("#btn-reg").click(function () {
    if (regphone.test($("#phone").val()) && regyzm.test($("#pvcode").val()) && regpwd.test($("#pwd")
            .val()) && $("#pwd-a").val() == $("#pwd").val() && $("#phone-agree").is(':checked')) {
        alert("注册成功");
        var userarr = {
            phone: $("#phone").val(),
            pwd: $("#pwd-a").val()
        };
        user.push(userarr);
        setCookie("user", JSON.stringify(user), 6);
    } else {
        return false;
    }
});
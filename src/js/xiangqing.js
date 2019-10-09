$(".share_button").hover(function () {
    $(".share_hide_sns").show()
    $(".share_tit_wrap").css("border-bottom-color", "#fff").css("background", "#fff")
    $(".tit_arrow").css("border-bottom-color", "#999").css("border-top-color", "transparent").css("top",
        "-4px")
}, function () {
    $(".share_hide_sns").hide()
    $(".share_tit_wrap").css("border-bottom-color", "#c2c2c2").css("background", "#fafafa")
    $(".tit_arrow").css("border-bottom-color", "transparent").css("border-top-color", "#999").css("top",
        "0")
})
$(function () {
    $(".icon-list>li").each(function (i, el) { }).click(function () {
        $(this).addClass("selected").siblings().removeClass("selected")
        $("#j_au_top").attr("class", "au-top-" + $(this).index())
        $(".au-con-list").html(`<li>
                                <img src="../images/xiangqing/au_img`+ $(this).index() + `1.jpg" alt="">
                            </li>`)
    })
})
$(function () {
    $(".dt-list-item").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected")
        $(".detail>div").hide().eq($(this).index()).show();
    })
    $(".dt-list-item").eq(0).click(function () {
        $(".detail>div").show()
    })
})
$(function () {
    $(".size-list-item").click(function () {
        $(this).addClass("sli-selected").siblings().removeClass("sli-selected").children().hide();
        $(this).children().show();
    })
    $(".num-add").click(function () {
        $(".num-input").text(parseInt($(".num-input").text()) + 1)
    })
    $(".num-reduce").click(function () {
        if ($(".num-input").text() == 1) {
            $(".i-num").addClass("status-notice")
            setTimeout(function () {
                $(".i-num").removeClass("status-notice")
            }, 1000);
        } else {
            $(".num-input").text(parseInt($(".num-input").text()) - 1)
        }
    })
})

//加入购物车
$(function () {
    var goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];

        $(".ui-btn-large").click(function () {
            // 插入数据
            // 去重
            var flag = true;
            for (var i = 0; i < goods.length; i++) {
                if (goods[i].goodsName == $(".pib-title-detail").text()) {
                    flag = false;
                }
            }
            if (flag) {
                var items = {
                    goodsName:$(".pib-title-detail").text(),
                    goodsPrice:$(".goodsprice").text()
                };
                goods.push(items);
                setCookie("goods", JSON.stringify(goods));
                alert("加入购物车成功");
            }else{
                alert("已添加，请勿重复添加");
            }
        })
})
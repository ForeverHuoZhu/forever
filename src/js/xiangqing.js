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
    $(".icon-list>li").each(function (i, el) {}).click(function () {
        $(this).addClass("selected").siblings().removeClass("selected")
        $("#j_au_top").attr("class", "au-top-" + $(this).index())
        $(".au-con-list").html(`<li>
                                <img src="../images/xiangqing/au_img` + $(this).index() + `1.jpg" alt="">
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
    $(".other-box .ht-txt .services-wrap").click(function () {
        $("html,body").stop().animate({
            scrollTop: $(".detailTop").offset().top
        }, 0)
        $(".dt-list-item").eq(1).click()
    })
})
$(function () {
    $(".size-list-item").click(function () {
        $(this).addClass("sli-selected").siblings().removeClass("sli-selected").children().hide();
        $(this).children().show();
    })
    $(".num-add").click(function () {
        if (!($(".size-list-item").hasClass("sli-selected"))) {
            $(".remind-ullist").show()
            $(".i-size").addClass("status-notice")
            setTimeout(function () {
                $(".i-size").removeClass("status-notice")
                $(".remind-ullist").hide()
            }, 1000)
        } else {
            $(".num-input").text(parseInt($(".num-input").text()) + 1)
        }

    })
    $(".num-reduce").click(function () {
        if ($(".num-input").text() == 1) {
            $(".remind-num").show()
            $(".i-num").addClass("status-notice")
            setTimeout(function () {
                $(".i-num").removeClass("status-notice")
                $(".remind-num").hide()
            }, 1000);
        } else {
            $(".num-input").text(parseInt($(".num-input").text()) - 1)
        }
    })
})
// 懒加载
$(function () {
    lazyRender();

    $(window).on('scroll', function () {
        lazyRender();
    });

    function lazyRender() {
        $('img').each(function () {
            if (checkShow($(this)) && !isLoaded($(this))) {
                loadImg($(this));
            }
        })
    }

    function checkShow($img) { // 传入一个img的jq对象 
        var scrollTop = $(window).scrollTop(); //即页面向上滚动的距离 
        var windowHeight = $(window).height(); // 浏览器自身的高度
        var offsetTop = $img.offset().top; //目标标签img相对于document顶部的位置 
        if (offsetTop < (scrollTop + windowHeight) && offsetTop > scrollTop) { //在2个临界状态之间的就为出现在视野中的 
            return true;
        }
        return false;
    }

    function isLoaded($img) {
        return $img.attr('data-src') === $img.attr('src'); //如果data-src和src相等那么就是已经加载过了 
    }

    function loadImg($img) {
        $img.attr('src', $img.attr('data-src')); // 加载就是把自定义属性中存放的真实的src地址赋给src属性 
    }
})
//懒加载结束

//加入购物车
$(function () {
    var goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
    $(".spnum").text(goods.length);
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
                goodsName: $(".pib-title-detail").text(),
                goodsPrice: $(".goodsprice").text(),
                itemNum: $(".amount").text(),
                pic: $(".cokpic").attr("src")
            };
            goods.push(items);
            $(".spnum").text(goods.length);
            setCookie("goods", JSON.stringify(goods), 6);
            alert("加入购物车成功");
        } else {
            alert("已添加，请勿重复添加");
        }
    })
});


//收藏
;
(function () {
    var collect = getCookie("collect") ? JSON.parse(getCookie("collect")) : [];
    if ($(".collect-tips").text() == "收藏商品") {
        $(".collect-tips").click(function () {
            $(this).text("已收藏");
            var obj = {
                goodsName: $(".pib-title-detail").text(),
                goodsPrice: $(".goodsprice").text(),
                pic: $(".cokpic").attr("src"),
                txt:"已收藏"
            };
            collect.push(obj);
            setCookie("collect", JSON.stringify(collect), 6);
        });
    }
}())
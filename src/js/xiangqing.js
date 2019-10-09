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
// 懒加载
$(function () {
    lazyRender();

    $(window).on('scroll', function () {
        console.log('运行了一次');
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
                goodsPrice: $(".goodsprice").text()
            };
            goods.push(items);
            setCookie("goods", JSON.stringify(goods),6);
            alert("加入购物车成功");
        } else {
            alert("已添加，请勿重复添加");
        }
    })
});

//right里面的X
var cha = document.getElementById("cha");
var zh = document.getElementById("zh");
cha.onclick = function () {
	zh.style.left = 0;
}

zhanghao.onmouseover = function () {
	zh.style.left = (-257) + "px";
}

zhanghao.onmouseleave = function () {
	zh.style.left = 0;
}





// 地区
addPlace();
var ctimer;

function returnTop() {
	// document.body.scrollTop = 0;
	cancelAnimationFrame(ctimer) || clearTimeout(ctimer);
	ctimer = requestAnimationFrame(function fn() {
		var top = document.body.scrollTop || document.documentElement.scrollTop;
		if (top > 0) {
			document.body.scrollTop = document.documentElement.scrollTop = top - 500;
			ctimer = requestAnimationFrame(fn) || setTimeout(fn, 30)
		} else {
			cancelAnimationFrame(ctimer);
		}
	})
}

function addPlace() {
	for (var i = 0; i < tds.length; i++) {
		tds[i].index = i;
		tds[i].children[0].onclick = function () {
			place.children[0].innerHTML = this.innerHTML;
			province.style.display = "none";
			place.style.background = "transparent";
		}
	}
}


place.onclick = function () {
	this.style.background = "white";
	province.style.display = "block";
}
X.onclick = function () {
	province.style.display = "none";
	place.style.background = "transparent";
}

qiandaobtn.onclick = function () {
	cCount++;
	cCount = cCount % 8;
	clearCircle();
	for (var j = 0; j <= cCount; j++) {
		if (j == 0) {
			clearCircle();
		} else if (j == 1) {
			circle[j - 1].style.borderColor = "#f10180";
		} else {
			circle[j - 1].style.borderColor = "#f10180";
			line[j - 2].style.borderColor = "#f10180";
		}
	}
}

function clearCircle() {
	for (var i = 0; i < circle.length; i++) {
		if (i == 0) {
			circle[i].style.borderColor = "#ccc";
		} else {
			circle[i].style.borderColor = "#ccc";
			line[i - 1].style.borderColor = "#ccc";
		}
	}
}
;
(function () {
	var menutimer = null;
	$(".nav-category").hover(function () {
		$(".menu").stop().slideToggle();
	}, function () {
		menutimer = setTimeout(function () {
			$(".menu").stop().slideToggle();
		}, 300)
	});
	$(".menu").hover(function () {
		clearTimeout(menutimer);
	}, function () {
		$(".menu").stop().slideToggle();
	})
}())

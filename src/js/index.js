var body = document.getElementsByTagName("body")[0];
var cCount = 0;
var clickArr = [1428, 2488, 3568, 4620, 5666, 6725, 7720, 8834];
var scrollArr = [1424, 2340, 3528, 4580, 5633, 6734, 7734, 8834];
var leftli = document.querySelectorAll("#left>ul>li");
var place = document.getElementById("place");
var province = document.getElementById("province");
var X = document.getElementById('X');
var wodetemai = document.getElementById('wodetemai');
var temai = document.getElementById('temai');
var huiyuanjlb = document.getElementById('huiyuanjlb');
var jlb = document.getElementById('jlb');
var kehufuwu = document.getElementById('kehufuwu');
var fuwu = document.getElementById('fuwu');
var shoujiban = document.getElementById('shoujiban');
var qrcode = document.getElementById('qrcode');
var qiandaobtn = document.getElementById("qiandaobtn");
var circle = document.querySelectorAll(".circle");
var line = document.querySelectorAll(".line");

var scoll = document.getElementById("scoll");
var activity = document.querySelectorAll('#activity>li>a');
var scollline = document.getElementById("scollline");
var tds = document.getElementsByTagName("td");
var left = document.getElementById("left");
var navbar = document.getElementById("navbar");
// 网页滚动事件

window.onload = window.onresize = function () {
	if (window.innerWidth > 1300) {
		if (document.body.scrollTop >= 400) {
			left.style.display = "block";
		}


		window.onscroll = function () {
			var scrolltop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			if (scrolltop >= 623) {
				left.style.display = "block";
			} else {
				left.style.display = "none";
			}
			if (scrolltop >= 120) {
				navbar.style.position = "fixed";
				navbar.style.top = 0;
				navbar.style.marginLeft = 30;
			} else {
				navbar.style.position = "static";

				navbar.style.zIndex = 4;
			}

			for (var i = 0; i <= leftli.length - 1; i++) {
				if ((scrolltop >= scrollArr[i] && scrolltop < scrollArr[i + 1]) || scrolltop >= 8834) {
					clearLeftli();
					leftli[i].style.background = "#f10180";
					leftli[i].children[0].style.color = "white";
					leftli[i].style.color = "white";
				}
			}
		}

	} else {
		left.style.display = "none";
	}
}


// 给leftli添加索引
addindex();

function addindex() {
	for (var i = 0; i < leftli.length; i++) {
		leftli[i].index = i;
	}
}

// 点击leftli
var clicktimer = 0;
clickLeftli();

function clickLeftli() {
	for (var i = 0; i < leftli.length; i++) {
		leftli[i].onclick = function () {
			// console.log(this.index)

			clearLeftli();
			this.style.background = "#f10180";
			this.children[0].style.color = "white";
			this.style.color = "white";
			window.scrollTo(0, clickArr[this.index]);
		}
	}
}



// 清除left里面li的样式
function clearLeftli() {
	for (var i = 0; i < leftli.length; i++) {
		leftli[i].style.background = "transparent";
		leftli[i].style.color = "#666";
		leftli[i].children[0].style.color = "#bbb";
	}
}

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

// 轮播图
$(document).ready(function () {
	var aa = 0;
	var size = $(".banner_select>ul li").size(); //5
	var img_size = $(".banner_wrap>ul li").size(); //5
	for (var i = 0; i <= size - 1; i++) {
		$(".banner_select>ul li")[i].id = i;
		$(".banner_wrap>ul li")[i].id = i;
	}

	$(".banner_select>ul li").hover(function () {
		aa = this.id
		$(".J_trigger_line").css({
			"left": (this.id * 195)
		})
		$(".banner_wrap>ul li").eq(this.id).addClass("on").siblings(this).removeClass("on");;
		$(".banner_wrap>ul li").eq(this.id).fadeIn(500).siblings(this).fadeOut(500);
	});

	function move() {
		$(".J_trigger_line").css({
			"left": (aa * 195)
		})
		$(".banner_wrap>ul li").eq(aa).addClass("on").siblings(aa).stop().removeClass("on");
		$(".banner_wrap>ul li").eq(aa).fadeIn(500).siblings(aa).fadeOut(500);
	}

	var t = setInterval(lunbo, 2000);

	function lunbo() {
		if (aa == img_size) {
			aa = 0;
		}
		move();
		aa++
	}
	$(".banner_wrap").hover(function () {
		clearInterval(t);
	}, function () {
		t = setInterval(lunbo, 2000);
	});
	$(".left").click(function () {
		if (aa <= 1) {
			aa = 3;
		}
		aa -= 2;
		move();
		aa++;
	})
	$(".right").click(function () {
		if (aa == 2) {
			aa = 0;
		}
		aa++;
		aa--;
		move();
		aa++;
	});
});

// $(function(){
// 	$(".head-inner>.main-nav-link>#list").hover(function(){
// 		$(this).find(".menu").stop().slideDown();
// 	},function(){
// 		$(this).find(".menu").stop().slideUp();
// 	})
// })

$(function () {

	$("img.lazy").lazyload({
		effect: "fadeIn"
	});

});


//导航
;
(function () {
	var menutimer = null;
	$(".nav-category").hover(function () {
		$(".menu").slideToggle();
	}, function () {
		menutimer = setTimeout(function () {
			$(".menu").slideToggle();
		}, 500)
	});
	$(".menu").hover(function () {
		clearTimeout(menutimer);
	}, function () {
		$(".menu").slideToggle();
	})
}())
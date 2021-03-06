var cart = {
    allChecked: true, //是否全选
    total: 0,

};
// 取cookie
var collect = getCookie("collect") ? JSON.parse(getCookie("collect")) : [];

cart.items = collect;
// 根据数据动态生成表格
var tbody = document.querySelector('tbody');
// 不可以
fillCart();

function fillCart() {
    // 计算 小计
    console.log(cart.items);
    subTotal();
    var str = "";
    for (var i = 0; i < cart.items.length; i++) {
        str = str + `
        <tr>
            <td class="firtd"><img class="cokpic" src="${cart.items[i].pic}" alt=""><span>${cart.items[i].goodsName}</span></td>
            <td class="price">￥${cart.items[i].goodsPrice}</td>
            <td>
                <a href="javascript:;" class="del">取消收藏</a>
            </td>
     </tr>
        `
    }

    tbody.innerHTML = str;
    // 总价格
    var allCheck = document.querySelectorAll(".allCheck");

    for (var i = 0; i < allCheck.length; i++) {
        allCheck[i].checked = cart.allChecked;

    }
    $(".total_text").html(caltTotal(cart.items));

    // 可以获取
    var add = document.querySelectorAll('.add');
    var reduce = document.querySelectorAll('.reduce');
    for (var i = 0; i < add.length; i++) {
        add[i].index = i;
        add[i].onclick = function () {
            //alert(1);
            cart.items[this.index].itemNum = parseInt(cart.items[this.index].itemNum) + 1;
            fillCart();
            $(".countNum").eq(this.index).html(cart.items[this.index].itemNum);
        }
    }
    for (var i = 0; i < reduce.length; i++) {
        reduce[i].index = i;
        reduce[i].onclick = function () {
            //alert(1);
            cart.items[this.index].itemNum = cart.items[this.index].itemNum - 1;
            if (cart.items[this.index].itemNum<=0) {
                cart.items[this.index].itemNum = 1;
            }
            fillCart();
            $(".countNum").eq(this.index).html(cart.items[this.index].itemNum);
        }
    }
    // 商品选中和取消选中
    // 获取选择框
    var checks = document.querySelectorAll('.check');
    for (var i = 0; i < checks.length; i++) {
        checks[i].index = i;
        checks[i].onchange = function () {
            // console.log(this.index);
            // console.log(this.checked);
            cart.items[this.index].isChecked = this.checked;
            var {
                items
            } = cart;
            if (items.every(el => el.isChecked)) {
                cart.allChecked = true;
            } else {
                cart.allChecked = false;
            }
            /* var res = items.every(function(el){
                return el.isChecked
            });
            if(res){

            } */
            fillCart();
        }
    }

    // 全选 取消全选
    var allCheck = document.querySelectorAll(".allCheck");
    for (var i = 0; i < allCheck.length; i++) {
        allCheck[i].onchange = function () {
            cart.allChecked = this.checked;
            // 当取消 选中时 所有的商品要取消选择
            if (!this.checked) {
                cart.items.forEach(function (el) {
                    el.isChecked = false;
                });
            } else {
                cart.items.map(function (el) {
                    el.isChecked = true;
                });
            }
            fillCart();
        }
    }

    // 删除
    var del = document.querySelectorAll(".del");
    for (var i = 0; i < del.length; i++) {
        del[i].index = i;
        del[i].onclick = function () {
            if (confirm("您确认取消收藏吗")) {
                cart.items.splice(this.index, 1);
                fillCart();
                setCookie("goods", JSON.stringify(cart.items),6);
            }
        }
    }
}


// 计算小计
function subTotal() {
    for (var i = 0; i < cart.items.length; i++) {
        cart.items[i].subTotal = parseFloat((cart.items[i].goodsPrice * cart.items[i].itemNum).toFixed(2));
    }
}


//计算总价格
function caltTotal(items) {

    var total = 0;

    for (var i = 0; i < items.length; i++) {
        total += items[i].subTotal;
    }

    return total;
}
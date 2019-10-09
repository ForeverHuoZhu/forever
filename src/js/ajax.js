function ajax(url,options,success){
    //处理默认值
    var defaultJson = {
        method:"get",
        dataType:false,
        data:""
    }
    options = options ? options : {};
    for(var key in options){
        defaultJson[key] = options[key];
    }

    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    //格式化data 为字符串
    var data = "";
    if(defaultJson.data){
        for(var key in defaultJson.data){
            data += key + "=" + defaultJson.data[key] + "&";
        }
        data = data.substr(0,data.length-1);
        defaultJson.data = data;
    }
    //处理get请求
    if(defaultJson.method == "get"&&defaultJson.data){
        url = url + "?" + defaultJson.data;
    }
    xhr.open(defaultJson.method,url);

    //处理post请求
    if(defaultJson.method == "post"&&defaultJson.data){
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send(defaultJson.data);
    }else{
        xhr.send();
    }

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4&&xhr.status == 200){
            var res = xhr.responseText;
            if(defaultJson.dataType){
                res = JSON.parse(res);
            }
            success&&success(res);
        }
    }
}
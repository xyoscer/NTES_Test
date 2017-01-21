/**
 * Created by \XiYin 2017/1/20.
 */
function serialize(data) {
    if(!data) {
        return '';
    }
    var pairs = [];
    for(var name in data) {
        if(!data.hasOwnProperty(name)) continue;
        if(typeof data[name] === 'function') continue;
        var value = data[name].toString();
        name = encodeURIComponent(name);
        value = encodeURIComponent(value);
        pairs.push(name + '=' + value);
    }
    return pairs.join('&');
}
/**
 *
 * @param url   {String}  请求的url
 * @param options {Object} 请求的查询参数
 * @param callback {Function} 处理成功后的回调函数
  * @constructor
 */
function AjaxPost(url,options,callback) {
   //创建xhr对象
    var xhr;
    if(window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }else if(window.ActiveXObject) {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    //处理返回结果
    xhr.onreadystatechange = function(callback) {
        if(xhr.readyState === 4) {
            if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                callback(xhr.responseText);
            }else {
                console.log("error");
            }
        }
    };
    //打开请求
    xhr.oprn('post',url);
    //设置头部信息
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    //发送请求
    xhr.send(serialize(options));
}
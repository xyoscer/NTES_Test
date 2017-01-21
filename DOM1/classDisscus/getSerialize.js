/**
 * Created by XiYin on 2017/1/20.
 */
/**
 *
 * @param data
 * @returns {*}
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
var obj = serialize({name: 'netease', age: 18});
console.log(obj);
/**
 *
 * @param url {String} 请求资源的url
 * @param options {Object} 请求的查询参数
 * @param callbackSuccess {function} 请求成功的回调函数
 * @param callbackFail {function}  请求失败的回调函数
 *
 */
function AjaxGet(url,options,callbackSuccess) {
    //创建XHR对象
    var xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }
    else if(window.ActiveXObject){
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    //处理返回数据
    xhr.onreadystatechange = function(callbackSuccess) {
        if(xhr.readyState == 4) {
            if((xhr.status >=200 && xhr.status < 300) ||xhr.status == 304){
                callbackSuccess(xhr.responseText);
            }else {
                console.log('error');
            }
        }
    };
     var URL = url + '?' + serialize(options);
    xhr.open('get',URL,true); //打开请求
    xhr.send(null); //发送请求

}

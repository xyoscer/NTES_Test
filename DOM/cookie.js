/**
 * Created by XiYin on 2017/2/8.
 */
function getCookies () {
    var cookie = {}; //返回解析后cookie的对象
    var all = document.cookie; //取出所有的cookie
    if (all === '') {
        return cookie;
    }
    var list = all.split('; '); //分割为字符串数组
    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var p = item.indexOf('=');
        var name = decodeURIComponent(item.slice(0, p));
        var value = decodeURIComponent(item.slice(p + 1));
        cookie[name] = value;
    }
    return cookie;
}
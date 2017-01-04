/**
 * Created by XinYin  2017/1/4.
 */

var jerry = parseQuery("name=jerry&age=1");
console.log(jerry);
var tom = parseQuery("name= tom &age=12&gender&");
console.log(tom);
/**
 *
 * @param query
 * @returns {{}}
 */
function parseQuery(query) {
    var objs = query.split("&");
    var urlObject = {};                        //存放解析后的对象
    objs.forEach(function (ele) {
        if (ele) {
            var item = ele.split("=");
            urlObject[item[0]] = (item[1] !== undefined) ? item[1] : "";
        }
    });
    return urlObject;
}
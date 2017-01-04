/**
 * Created by XinYin 2017/1/4.
 */


var htmlStr1 = '<div>Tom&Jerry</div> ';
//var htmlStr = '<input type="text" name="mobile">';
var escapedStr = escapeHTML(htmlStr1);
/**
 *
 * @param htmlStr
 * @returns {XML|string}
 */
function escapeHTML(htmlStr) {
    htmlStr = htmlStr.replace(/[<> ""&]/g, function (str) {
        switch (str) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '"':
                return '&quot;';
            case '"':
                return '&quot;';
            case '&':
                return '&amp;';
        }
    });
    return (htmlStr.replace("undefined", ""));
}

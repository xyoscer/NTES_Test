/**
 * Created by XiYin 2017/1/4.
 */

var mulResult = multiply(2, 3);
//var mulResult1 = multiply(1, 0, 3, 4, 5);
console.log(mulResult);
/**
 * reduce() 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始合并，最终为一个值。
 * @returns {*}
 */
function multiply() {
    var mul = function (result, ele) {
        return result * ele;
    };
    var arr = [].slice.call(arguments); //将传入的参数转换为数组
    return arr.reduce(mul, 1);
}
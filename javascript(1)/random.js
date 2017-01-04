/**
 * Created by XiYin 2017/1/4.
 */
var number = random();
console.log(number);
// number是0-999之间的整数。
function random() {
    // var num = Math.floor(Math.random() * 999);//该随机数包括0但不包括999[0,999)
    // var num1 = Math.floor((Math.random() * 999) + 1); //该随机数为0-999之间，不包括0 999 (0.999)
    //var num2 = Math.floor(Math.random() * 1000); //该随机数为获得0-999 包括0和999 [0,999];
    return Math.floor(Math.random() * 1000);
}

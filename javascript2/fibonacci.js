/**
 * Created by XiYin 2017/1/14.
 */
/*斐波那契数列（Fibonacci Sequence）由 0 和 1 开始，之后的斐波那契数就由之前的两数相加。
在数学上，斐波那契数列是以递归的方法来定义的：

请实现一个函数，参数为n，返回结果为以n为下标的斐波那契数。函数语法为
var num = fibonacci(n);
使用举例如下
var num = fibonacci(3); // num值等于2
var num = fibonacci(5); // num值等于5*/
//“动态规划（Dynamic Programming，DP）”对每个子问题只求解一次，
// 将其结果保存在一张表中，从而避免每次遇到各个子问题时重新计算

function fibonacci(n){
    if(n == 0){
        return 0;
    }else if(n == 1) {
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }

}
//使用动态规划的思想

function fib(n) {
    var val = [0, 1];  // val[0]= fib[n-2], val[1]=fib[n-1]
    if(n < 2) {
        return n;
    }
    for(var i=2; i<n; i++) {

        var tmp = val[0] + val[1];
        val[0] = val[1];
        val[1] = tmp;
    }
    return val[0] + val[1];
}
//优化斐波那契数列，减少空间复杂度,使用迭代的方式计算值
function fibonacci(n) {
    var firstValue = 1, //F1 = 1
        secondValue = 1, //F2 = 1
        result = 1; // F1 = 1
    for(var i = 2; i < n; i++){
        result = firstValue + secondValue;
        firstValue = secondValue;
        secondValue = result;
    }
    return result;
}
console.log( new Date().getTime());
console.log(fibonacci(4));
console.log(new Date().getTime());

//var num = fibonacci(3);
//console.log(num);//2
/*
var num = fibonacci(5);
console.log(num);//5*/

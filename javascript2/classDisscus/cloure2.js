/**
 * Created by XinYin 2017/1/8.
 */
/**
 闭包使用举例3 -- 性能优化2
 普通递归函数跟使用闭包记录调用返回结果的递归函数调用次数对比
 **/
 // 普通递归函数
 /*var factorial = (function(){
   var count = 0;
   var fac = function(i){
      count++;
    if (i==0) {
      console.log('调用次数：' + count);
      return 1;
    }
    return i*factorial(i-1);
   };
  return fac;
 })();
 for(var i=0;i<=10;i++){
   console.log(factorial(i));
}*/

// // 使用闭包记录调用返回结果的递归函数 -- 记忆函数
var factorial = (function(){
   var memo = [1];
   var count = 0;
  var fac = function(i){
    count++;
    var result = memo[i];
    if(typeof result === 'number'){
       console.log('调用次数：' + count);
      return result;
     }
     result = i*fac(i-1);
     memo[i] = result;
    return result;
   }
   return fac;
 })();
 for(var i=0;i<=10;i++){
   console.log(factorial(i));
 }
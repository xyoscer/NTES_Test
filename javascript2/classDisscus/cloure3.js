/**
 * Created by XiYin 2017/1/8.
 */
/**闭包使用举例3 -- 性能优化1
   减少函数定义时间和内存消耗
**/
// 不使用闭包
/*function sum(i, j) {
  var add = function(i, j){
     return i+j;
  };
   return add(i, j);
 }
 var startTime = new Date();
 for(var i = 0; i< 1000000; i++) {
  sum(1,1);
 }
 var endTime = new Date();
 console.log(endTime - startTime);*/

// // // 使用闭包
 var sum = (function() {
   var add = function(i, j){
    return i+j;
  };
  return function(i,j) {
     add(i, j);
   };
 })();
 var startTime = new Date();
 for(var i = 0; i< 1000000; i++) {
   sum(1,1);
 }
 var endTime = new Date();
 console.log(endTime - startTime);
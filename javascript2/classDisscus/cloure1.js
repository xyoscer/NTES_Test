/**
 * Created by XiYin 2017/1/8.
 */
/**
 * 闭包使用举例1 保存函数的执行状态
 * 将字符串中的一些特定字符按顺序用数组中的元素替换，例如：
 * var arr = ['c','f','h','o'];
 * var str = 'ab4de8g4ijklmn7';
 * 替换后 str == 'abcdefghijklmno';
 * replace的用法请参考https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 **/
 var arr = ['c','f','h','o'];
 var str = 'ab4de8g4ijklmn1';
  console.log(str);

 var func = (function(){
  // count变量会保存在闭包作用域内，表示func被调用次数（即正在替换第几个字符）
  var count = 0;
  return function(){
    return arr[count++];
  };
 })();

 str = str.replace(/\d/g, func)
console.log(str);
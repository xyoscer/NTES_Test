/**
 * Created by XiYin 2017/1/5.
 */
/*function add1(i) {
    console.log("函数声明："+(i+1));
}
function add1(i) {
    console.log("函数声明："+(i+100));

}
var add1;
add1(1);
   add1 = function (i) {
    console.log("函数表达式："+(i+10));

};
add1(1);
add1(1);*/

/*var myNumber = {
    value: 1,
    add: function (i) {
        var helper = (i) => {console.log(this);this.value +=1; console.log(this.value);};
        helper(i);
     }
};
myNumber.add(1);*/

//方法一：可以把helper调整为方法函数，这样helper就可以正确引用myNumber为this了。
/*var myNumber = {
    value:1,
    helper:function(i) {
        console.log(this);
        this.value +=i;
    },
    add: function(i) {
        this.helper(i);
    }
};
myNumber.add(1);*/
//方法二：使用闭包
/*var myNumber = {
    value: 1,
    add: function(i){;
        var thisnew = this;
        // 构建闭包
        var helper = function(i){
            console.log(thisnew);
            thisnew.value += i;
        };
        helper(i);
    }
};*/

//方法三：使用apply（call）调用模式，将当前helper方法借用给myNumber对象使用，这样this指向的就是myNumber对象
/*var myNumber = {
    value: 1,
    add: function(i){
        var helper = function(i){
            console.log(this);
            this.value += i;
        };
        // myNumber对象借用helper方法，helper中的this将指向myNumber对象
        helper.apply(myNumber,[i]); //apply方法
       // helper.call(myNumber,i);  //call方法
    }
};
myNumber.add(1);*/
/* var arr = ['c','f','h','o'];
var str = 'ab4de8g4ijklmn1';
 console.log(str);

 var func = (function(){
//   // count变量会保存在闭包作用域内，表示func被调用次数（即正在替换第几个字符）
   var count = 0;
   return function(){
     return arr[count++];
   }
 })();*/

// str = str.replace(/\d/g, func)
// console.log(str);
var arr = [2,4,2,3,4];
var deleteRepeat = function(arr) {
   for (var i=0,len=arr.length;i<len;i++) {
       for (var j=i+1;j<len;j++) {
           if(arr[i] === arr[j]) {
               arr.splice(j,1);
           }
       }
   }
   return arr;
};
var deleteRepeat1 = function(arr) {
    var newArr = [];
    for(var i=0,len=arr.length;i<len;i++) {
        if(newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var deleteRepeat2 = function(arr) {
   // var newArr = [...new Set(arr)];
    var newArr = Array.from(new Set(arr));
    return newArr;
}
console.log(deleteRepeat2(arr));
/**
 * Created by XiYin 2017/1/11.
 */
/*
高版本的firefox,chrome及ie10以上的浏览器实现了Function.prototype.bind方法，bind方法调用语法为：
functionObj.bind(thisArg[, arg1[, arg2[, ...]]])
使用范例参考如下:
    function move(x, y) {
        this.x += x;
        this.y += y;
    }
var point = {x:1, y:2};
var pointmove = move.bind(point, 2, 2);
pointmove(); // {x:3, y:4}
但是低版本浏览器中并未提供该方法，请给出兼容低版本浏览器的bind方法的代码实现。*/
/** bind的兼容性实现  */
// 检查是否有定义
 Function.prototype.bindFun = function(thisObj) {
   var ftoBind = this;
    if (!Function.prototype.bind) {
         console.log("不支持bind方法");
        Function.prototype.bindFun = function(thisObj) {
            if (typeof this !== "function") {
                throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            }
            // 获取函数本身,调用bind的函数对象
            var _func = this,
                // 获取函数调用者（bind方法的第一个参数）
                _this = thisObj,
                // 获取函数绑定的参数列表
                _params = Array.prototype.slice.call(arguments, 1);
            // 返回一个函数，外部变量通过持有这个函数引用保存_func,_this,_params这三个闭包变量,并随时执行函数以调用下面语句。
            return function(){
                var _localParams = Array.prototype.slice.call(arguments);
                _params = _params.concat(_localParams);
                _func.apply(_this, _params); // 实现函数调用
            };
        };
    }
    else {
        console.log("支持bind方法");
        return ftoBind.bind(thisObj,arguments);

        }

};

function move(x, y) {
    this.x += x;
    this.y += y;
    return this;
}
var point = {x:1, y:2};
var pointmove = move.bindFun(point, 2, 2);
console.log(pointmove()); // {x:3, y:4}

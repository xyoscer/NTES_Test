/**
 * Created by XiYin 2017/1/11.
 */
/*
ES5中定义的Object.create(proto)方法，会创建并返回一个新的对象，这个新的对象以传入的proto对象为原型。
语法如下：
Object.create(proto)  （注：第二个参数忽略）
proto —— 作为新创建对象的原型对象
使用示例如下：

Object.create在某些浏览器没有支持，请给出Object.create的兼容实现*/

Object.prototype.create = function(obj) {
    if (typeof obj != 'object') {//如果 obj 参数不是 nll 或一个对象值，则抛出一个 TypeError 异常。
        throw TypeError('Object prototype may only be an Object or null');
    }
    if(Object.prototype.create) {
        return Object.prototype.create; //浏览器支持就直接返回
    }else {
        function Temp() {}//创建一个临时性的构造函数
        Temp.prototype = obj; //传入的参数作为构造函数的原型
        return new Temp(); //返回临时类型的一个新实例
    }
};
var a = Object.create({x: 1, y: 2});
console.log(a.x);

/**
 * Created by XiYin 2017/1/8.
 */
//定义父类，并有自己的属性
function SuperType(name) {
    this.name = name;
}
//定义父类的方法
SuperType.prototype.getName = function() {
    console.log(this.name);
};
//定义子类，并继承父类的属性
function SubType(name,major) {
    //继承父类属性
    SuperType.call(this,name);
    this.major = major;
}
//继承父类方法
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
//定义子类的方法
SubType.prototype.getMajor = function() {
     console.log(this.major);
};
var student = new SubType("xygirl","FE");
student.getMajor(); //FE
student.getName();  //xygirl
/**
 * Created by XinYin 2017/1/4.
 */

var jerry = new Person("Jerry", 2);
console.log(jerry.introduce());
var tom = new Person("Tom", 12);
console.log(tom.introduce());

function  Person(name,age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
        return "i am " + this.name + ", i am " + this.age + " years old!";
    };

}

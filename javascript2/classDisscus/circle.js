/**
 * Created by XiYin 2017/1/8.
 */
/**
 *
 * @param r
 * @constructor
 */
function Circle(r) {
    this.r = r;
    this.getPerimeter = function() {
        return 2*Math.PI*this.r;
    };
    this.getArea =function() {
        return Math.PI*this.r*this.r;
    };
}
var oneCirlce = new Circle(4);
console.log("圆的周长面积分别为：%s,%s",oneCirlce.getPerimeter() ,oneCirlce.getArea());
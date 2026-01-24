function Rectangle(name, width, heigh) {
  this.name = name;
  this.width = width;
  this.heigh = heigh;
  this.area = function () {
    return this.heigh * this.width;
  };
}

const rect1 = new Rectangle("Rect 1", 10, 20);

console.log(rect1.area());
const rect2 = new Rectangle("Rect 2", 5, 15);
console.log(rect2.constructor);

console.log(rect2.area());

console.log(rect2 instanceof Rectangle);

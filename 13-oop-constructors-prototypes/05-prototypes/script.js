function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};

Rectangle.prototype.changeName = function (newName) {
  return (this.name = newName);
};

const rect = new Rectangle("Rect", 10, 10);

console.log(rect);
console.log(rect.area());
console.log(rect.perimeter());
console.log(rect.isSquare());
console.log(rect.changeName("Test"));
console.log(rect.name);

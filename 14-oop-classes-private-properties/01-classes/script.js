class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.height + this.width);
  }

  isSquare() {
    return this.width === this.height;
  }

  logArea() {
    console.log("Rectangle Area: " + this.area());
  }
}

const square = new Rectangle("Square", 20, 20);
console.log(square);
console.log(`Area: ${square.area()}`);
console.log(`Perimeter: ${square.perimeter()}`);
console.log(`isSquare: ${square.isSquare()}`);
square.logArea();

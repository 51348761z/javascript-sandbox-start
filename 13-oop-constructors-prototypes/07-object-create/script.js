const rectanglePrototypes = {
  area: function () {
    return this.width * this.heigh;
  },
  perimeter: function () {
    return 2 * (this.width + this.heigh);
  },
  isSquare: function () {
    return this.width === this.heigh;
  },
};

function createRectangle(heigh, width) {
  return Object.create(rectanglePrototypes, {
    heigh: {
      value: heigh,
    },
    width: {
      value: width,
    },
  });
}

const rect = createRectangle(10, 20);
console.log(rect);
console.log(rect.area());
console.log(rect.isSquare());

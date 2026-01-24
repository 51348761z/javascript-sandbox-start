const Rectangle = {
  width: 10,
  heigh: 10,
  area: function () {
    console.log(this);

    return this.width * this.width;
  },
};

console.log(this);

console.log(Rectangle.area());

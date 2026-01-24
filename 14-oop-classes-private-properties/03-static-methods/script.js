class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }

  static getClass() {
    return "Rectangle";
  }
}

const rect = new Rectangle("Rect", 10, 10);
console.log(rect.area());
console.log(Rectangle.getClass());

// bind
class App {
  constructor() {
    this.serverName = "localhost";

    document
      .querySelector("button")
      .addEventListener("click", this.getServerName.bind(this));
  }

  getServerName() {
    console.log(this.serverName);
  }
}

const app = new App();
app.getServerName();

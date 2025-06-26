abstract class Shape {
  abstract area(): number;
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }
  area(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const rect = new Rectangle(5, 10);
const circle = new Circle(7);
console.log("Rectangle Area:", rect.area());
console.log("Circle Area:", circle.area());

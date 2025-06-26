"use strict";
class Shape {
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
const rect = new Rectangle(5, 10);
const circle = new Circle(7);
console.log("Rectangle Area:", rect.area());
console.log("Circle Area:", circle.area());

"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.PI = 3.14;
    }
    area() {
        return this.PI * this.radius * this.radius;
    }
    perimeter() {
        return 2 * this.PI * this.radius;
    }
}
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    area() {
        return this.length * this.width;
    }
    perimeter() {
        return 2 * (this.length + this.width);
    }
}
const circleObj = new Circle(5);
console.log(`Area of Circle ${circleObj.area()}`);
console.log(`Perimeter of Circle ${circleObj.perimeter()}`);
const rectangleObj = new Rectangle(5, 10);
console.log(`Area od Rectangle ${rectangleObj.area()}`);
console.log(`Perimeter of Rectangle ${rectangleObj.perimeter()}`);

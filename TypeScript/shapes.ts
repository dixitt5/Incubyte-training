interface Shape {
    area(): number;
    perimeter(): number;
}

class Circle implements Shape {
    constructor(private radius: number){}
    private readonly PI: number = 3.14;
    area(): number {
        return this.PI * this.radius * this.radius;
    }
    perimeter(): number {
        return 2 * this.PI * this.radius;
    }    
}

class Rectangle implements Shape {
    constructor(private length: number, private width: number){}

    area(): number {
        return this.length * this.width;    
    }
    perimeter(): number {
        return 2 * (this.length + this.width);
    }
}

const circleObj = new Circle(5);
console.log(`Area of Circle ${circleObj.area()}`);
console.log(`Perimeter of Circle ${circleObj.perimeter()}`);

const rectangleObj = new Rectangle(5, 10);
console.log(`Area od Rectangle ${rectangleObj.area()}`);
console.log(`Perimeter of Rectangle ${rectangleObj.perimeter()}`);


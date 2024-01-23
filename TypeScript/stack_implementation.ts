import { DataStructures } from "./stack";


const stack = new DataStructures.Stack<number>(5);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop();
console.log(stack.isEmpty());
console.log(stack.stack);

interface Shape {
    area(): number;
    perimeter(): number;
}

class CircleStack implements Shape {
    constructor(private radius: number) { }
    private readonly PI: number = 3.14;
    area(): number {
        return this.PI * this.radius * this.radius;
    }
    perimeter(): number {
        return 2 * this.PI * this.radius;
    }
}

const stackCircle = new DataStructures.Stack<CircleStack>(5);
stackCircle.push(new CircleStack(5));
stackCircle.push(new CircleStack(6));
stackCircle.push(new CircleStack(7));
stackCircle.push(new CircleStack(8));

console.log(stackCircle);

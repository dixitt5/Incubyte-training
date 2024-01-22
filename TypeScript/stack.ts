class Stack<Type> {
    constructor(private _capacity: number) { }
    private _top: number = 0;
    private _stack: Type[] = [];

    push(element: Type): boolean {
        // overflow
        if(this._top > this._capacity - 1) {
            throw new Error("Stack Overflow");
        }
        this._stack.push(element);
        this._top++;
        return true;
    }

    pop(): Type {
        // underflow
        if (this._top <= 0) {
            throw new Error("Stack Underflow");
        }
        const element = this._stack[this._top];
        this._stack.pop();
        this._top--;
        return element;
    }

    isEmpty(): boolean {
        return this._stack.length == 0;
    }

    get stack(): Type[] {
        return this._stack;
    }
}

const stack = new Stack<number>(5);
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
    constructor(private radius: number){}
    private readonly PI: number = 3.14;
    area(): number {
        return this.PI * this.radius * this.radius;
    }
    perimeter(): number {
        return 2 * this.PI * this.radius;
    }    
}

const stackCircle = new Stack<CircleStack>(5);
stackCircle.push(new CircleStack(5));
stackCircle.push(new CircleStack(6));
stackCircle.push(new CircleStack(7));
stackCircle.push(new CircleStack(8));

console.log(stackCircle);

var Stack = /** @class */ (function () {
    function Stack(_capacity) {
        this._capacity = _capacity;
        this._top = 0;
        this._stack = [];
    }
    Stack.prototype.push = function (element) {
        // overflow
        if (this._top > this._capacity - 1) {
            throw new Error("Stack Overflow");
        }
        this._stack.push(element);
        this._top++;
        return true;
    };
    Stack.prototype.pop = function () {
        // underflow
        if (this._top <= 0) {
            throw new Error("Stack Underflow");
        }
        var element = this._stack[this._top];
        this._stack.pop();
        this._top--;
        return element;
    };
    Stack.prototype.isEmpty = function () {
        return this._stack.length == 0;
    };
    Object.defineProperty(Stack.prototype, "stack", {
        get: function () {
            return this._stack;
        },
        enumerable: false,
        configurable: true
    });
    return Stack;
}());
var stack = new Stack(5);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop();
console.log(stack.isEmpty());
console.log(stack.stack);
var CircleStack = /** @class */ (function () {
    function CircleStack(radius) {
        this.radius = radius;
        this.PI = 3.14;
    }
    CircleStack.prototype.area = function () {
        return this.PI * this.radius * this.radius;
    };
    CircleStack.prototype.perimeter = function () {
        return 2 * this.PI * this.radius;
    };
    return CircleStack;
}());
var stackCircle = new Stack(5);
stackCircle.push(new CircleStack(5));
stackCircle.push(new CircleStack(6));
stackCircle.push(new CircleStack(7));
stackCircle.push(new CircleStack(8));
console.log(stackCircle);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stack_1 = require("./stack");
var stack = new stack_1.DataStructures.Stack(5);
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
var stackCircle = new stack_1.DataStructures.Stack(5);
stackCircle.push(new CircleStack(5));
stackCircle.push(new CircleStack(6));
stackCircle.push(new CircleStack(7));
stackCircle.push(new CircleStack(8));
console.log(stackCircle);

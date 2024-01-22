"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sample_1 = require("./sample");
var Stack = /** @class */ (function () {
    function Stack() {
        this.arr = [];
    }
    Stack.prototype.push = function (element) {
        this.arr.push(element);
    };
    ;
    Stack.prototype.pop = function () {
        this.arr.pop();
    };
    ;
    Stack.prototype.top = function () {
        return this.arr[this.arr.length - 1];
    };
    ;
    Stack.prototype.isEmpty = function () {
        return this.arr.length == 0;
    };
    ;
    Object.defineProperty(Stack.prototype, "size", {
        get: function () {
            return this.arr.length;
        },
        enumerable: false,
        configurable: true
    });
    return Stack;
}());
var stack = new Stack();
var bike1 = new sample_1.Bike();
var bike2 = new sample_1.Bike();
stack.push(bike1);
stack.push(bike2);
console.log(stack);
console.log(stack.size);
stack.pop();
console.log(stack);

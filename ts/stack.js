"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sample_1 = require("./sample");
class Stack {
    constructor() {
        this.arr = [];
    }
    push(element) {
        this.arr.push(element);
    }
    ;
    pop() {
        this.arr.pop();
    }
    ;
    top() {
        return this.arr[this.arr.length - 1];
    }
    ;
    isEmpty() {
        return this.arr.length == 0;
    }
    ;
    get size() {
        return this.arr.length;
    }
}
const stack = new Stack();
const bike1 = new sample_1.Bike();
const bike2 = new sample_1.Bike();
stack.push(bike1);
stack.push(bike2);
console.log(stack);
console.log(stack.size);
stack.pop();
console.log(stack);

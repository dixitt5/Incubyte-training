"use strict";
var Generic;
(function (Generic) {
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
        get top() {
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
    Generic.Stack = Stack;
})(Generic || (Generic = {}));
const stack = new Generic.Stack();
stack.push(1);
console.log(stack.top);

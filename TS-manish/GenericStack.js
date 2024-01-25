"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task1_1 = require("./task1");
class Stack {
    constructor() {
        this.stack = [];
    }
    push(ele) {
        this.stack.push(ele);
    }
    pop() {
        return this.stack.pop();
    }
    peek() {
        return this.stack.slice(-1)[0];
    }
    isEmpty() {
        return this.stack.length <= 0;
    }
}
// const stack1: Stack<string> = new Stack<string>();
// console.log(stack1.isEmpty());
// stack1.push("manish");
// stack1.push("yash");
// stack1.push("ruchit");
// console.log(stack1.peek());
// stack1.pop();
// console.log(stack1.peek());
const stack2 = new Stack();
console.log(stack2.isEmpty());
stack2.push(task1_1.persons[0]);
stack2.push(task1_1.persons[1]);
stack2.push(task1_1.persons[2]);
console.log(stack2.peek());
stack2.pop();
console.log(stack2.peek());

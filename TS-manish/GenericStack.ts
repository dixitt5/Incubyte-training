import {Person, persons } from './task1';
export class Stack<T> {
    stack: T[] = [];

    push(ele: T): void {
        this.stack.push(ele);
    }

    pop(): T | undefined {
        return this.stack.pop();
    }

    peek(): T | undefined {
        return this.stack.slice(-1)[0];
    }
    
    isEmpty(): boolean {
        return this.stack.length <= 0
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

const stack2: Stack<Person> = new Stack<Person>();

console.log(stack2.isEmpty());

stack2.push(persons[0]);
stack2.push(persons[1]);
stack2.push(persons[2]);

console.log(stack2.peek());

stack2.pop();

console.log(stack2.peek());
import { Bike } from "./sample";

class Stack<T> {
   push(element: T) : void {
    this.arr.push(element);
   };

   pop() : void {
    this.arr.pop();
   };

   top() : T {
    return this.arr[this.arr.length - 1];
   };
  
   isEmpty<T>(): boolean {
    return this.arr.length == 0;
   };

   get size() : number {
    return this.arr.length;
   }

   private arr: T[] = [];

}

const stack = new Stack<Bike>();

const bike1 = new Bike()
const bike2 = new Bike()

stack.push(bike1);
stack.push(bike2);

console.log(stack)
console.log(stack.size);

stack.pop();
console.log(stack);

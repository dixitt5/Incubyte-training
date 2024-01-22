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

const stack = new Stack<string>;

stack.push("adi");
stack.push("adi1");
stack.push("adi2");

console.log(stack)
console.log(stack.size);

stack.pop();
console.log(stack);

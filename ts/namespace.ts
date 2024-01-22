namespace Generic {
    export class Stack<T> {
        push(element: T) : void {
         this.arr.push(element);
        };
     
        pop() : void {
         this.arr.pop();
        };
     
        get top() : T {
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
}

const stack = new Generic.Stack<number>();
stack.push(1);
console.log(stack.top);
export namespace DataStructures {
    export class Stack<Type> {
        constructor(private _capacity: number) { }
        private _top: number = 0;
        private _stack: Type[] = [];

        push(element: Type): boolean {
            // overflow
            if (this._top > this._capacity - 1) {
                throw new Error("Stack Overflow");
            }
            this._stack.push(element);
            this._top++;
            return true;
        }

        pop(): Type {
            // underflow
            if (this._top <= 0) {
                throw new Error("Stack Underflow");
            }
            const element = this._stack[this._top];
            this._stack.pop();
            this._top--;
            return element;
        }

        isEmpty(): boolean {
            return this._stack.length == 0;
        }

        get stack(): Type[] {
            return this._stack;
        }
    }
}
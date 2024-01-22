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
var stack = new Stack;
stack.push("adi");
stack.push("adi1");
stack.push("adi2");
console.log(stack);
console.log(stack.size);
stack.pop();
console.log(stack);

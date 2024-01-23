"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStructures = void 0;
var DataStructures;
(function (DataStructures) {
    var Stack = /** @class */ (function () {
        function Stack(_capacity) {
            this._capacity = _capacity;
            this._top = 0;
            this._stack = [];
        }
        Stack.prototype.push = function (element) {
            // overflow
            if (this._top > this._capacity - 1) {
                throw new Error("Stack Overflow");
            }
            this._stack.push(element);
            this._top++;
            return true;
        };
        Stack.prototype.pop = function () {
            // underflow
            if (this._top <= 0) {
                throw new Error("Stack Underflow");
            }
            var element = this._stack[this._top];
            this._stack.pop();
            this._top--;
            return element;
        };
        Stack.prototype.isEmpty = function () {
            return this._stack.length == 0;
        };
        Object.defineProperty(Stack.prototype, "stack", {
            get: function () {
                return this._stack;
            },
            enumerable: false,
            configurable: true
        });
        return Stack;
    }());
    DataStructures.Stack = Stack;
})(DataStructures || (exports.DataStructures = DataStructures = {}));

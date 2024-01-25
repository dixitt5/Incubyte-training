"use strict";
class Tuple {
    constructor(_left, _middle, _right) {
        this._left = _left;
        this._middle = _middle;
        this._right = _right;
    }
    get left() {
        return this._left;
    }
    get middle() {
        return this._middle;
    }
    get right() {
        return this._right;
    }
}
const tuple = new Tuple(1, "hello", false);
console.log(tuple.left, tuple.middle, tuple.right);

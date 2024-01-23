"use strict";
class Tuple {
    constructor(_left, _mid, _right) {
        this._left = _left;
        this._mid = _mid;
        this._right = _right;
    }
    get left() {
        return this._left;
    }
    get mid() {
        return this._mid;
    }
    get right() {
        return this._right;
    }
}
const myTuple = new Tuple("Yash", 21, true);
console.log(myTuple.left, myTuple.mid, myTuple.right);

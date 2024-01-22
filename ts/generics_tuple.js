"use strict";
class Tuple {
    constructor(_left, _center, _right) {
        this._left = _left;
        this._center = _center;
        this._right = _right;
    }
    get left() {
        return this._left;
    }
    get center() {
        return this._center;
    }
    get right() {
        return this._right;
    }
}
const d1 = new Tuple(10, true, "Hello");
console.log(`${d1.left} ${d1.center} ${d1.right}`);

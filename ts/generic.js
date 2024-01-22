var Tuple = /** @class */ (function () {
    function Tuple(_left, _middle, _right) {
        this._left = _left;
        this._middle = _middle;
        this._right = _right;
    }
    Object.defineProperty(Tuple.prototype, "left", {
        get: function () {
            return this._left;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tuple.prototype, "middle", {
        get: function () {
            return this._middle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tuple.prototype, "right", {
        get: function () {
            return this._right;
        },
        enumerable: false,
        configurable: true
    });
    return Tuple;
}());
var tuple = new Tuple(1, "hello", false);
console.log(tuple.left, tuple.middle, tuple.right);

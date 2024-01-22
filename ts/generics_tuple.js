var Tuple = /** @class */ (function () {
    function Tuple(_left, _center, _right) {
        this._left = _left;
        this._center = _center;
        this._right = _right;
    }
    Object.defineProperty(Tuple.prototype, "left", {
        get: function () {
            return this._left;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tuple.prototype, "center", {
        get: function () {
            return this._center;
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
var d1 = new Tuple(10, true, "Hello");
console.log("".concat(d1.left, " ").concat(d1.center, " ").concat(d1.right));

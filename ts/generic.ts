class Tuple<T, U, V> {
    constructor(private _left: T, private _middle:U, private _right:V) {}
    get left():T {
        return this._left;
    }

    get middle():U {
        return this._middle;
    }

    get right():V {
        return this._right;
    }

}


const tuple = new Tuple <number, string, boolean>(1, "hello", false);
console.log(tuple.left, tuple.middle, tuple.right)

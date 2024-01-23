class Tuple<T, U, V> {
    constructor(private _left: T, private _mid: U, private _right: V) {}

    get left(): T {
        return this._left;
    }
    get mid(): U {
        return this._mid;
    }
    get right(): V {
        return this._right;
    }
}

const myTuple = new Tuple<string, number, boolean>("Yash", 21, true);

console.log(myTuple.left, myTuple.mid, myTuple.right);

class Tuple<T, U, V> {
  constructor(private _left: T, private _center: U, private _right: V) {}

  get left(): T {
    return this._left;
  }

  get center(): U {
    return this._center;
  }

  get right(): V {
    return this._right;
  }
}

const d1 = new Tuple<number, boolean, string>(10, true, "Hello");

console.log(`${d1.left} ${d1.center} ${d1.right}`);

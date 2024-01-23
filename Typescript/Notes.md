# Day-1

## Intro to TypeScript
- Typescript need to be compiled first before using it.
- ts file is compiled and converted into a js file.
- Transpanner converts is used to convert the code from one langusge to another.

- const name: string = "john"  -> This is called type annotation to specify the type of the any variable.

## Classes
- Same as javascript.
- Constructor shorthand -> constructor(private _name: string, private age: number) {}
- Shorthand for getter & setter methods
    - get name() {return this._name;}
    - set name(name: string) {this._name = name;}

### Task
- Create an interface named shape and create two classes implementing it with the names Circle & Rectangle. The interface should have method named area() & perimeter().
- Do same task as above task but change the interface into Vehicle and create two classes using it namely Bike & Car.

## type Unions
- To provide options for a variable of more than one type but not all.
eg. type StringOrNumber = string | number;

### Optional type
- It can be used to specify a variable with a type or undefined.
eg. interface Person {
    salary?: number;
}

- It is similar to salary: number | undefined


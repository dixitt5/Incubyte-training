# ts intro
- add types to js
- compile time errors - faster feedback than js
- static typing
- compiled to js using tsc compiler

# transpiler
- converts one lang to another
- tsc is transpiler

# types
- string 
- number
- boolean
- any
- undefined
- void

- let str: string[] = [];

- const add = (a: number, b: number): number {};

- can do type inference 
    - of function return type
    - of type of data stored in variables

- type annotation
    - let a: number = 10;

- type assertion
    - let eid = <number> id;
    - let eid = id as number; 


# interface
- interface Student {
    name: string;
    age: number;
}

- rename shortcut

# classes

- shorthand notation of constructor 
    - constructor(private a: number) {}
- getter and setter
- for inheritance - extends keyword
- for parent construtor - use super() method
- for interface - implements keyword

# generics

- classes and functions both
- function getItems<T>(items : T[] ) : T[] {  
    return new Array<T>().concat(items);  
    } 
- class StudentInfo<T,U>  
    {   
    private Id: T; 
    }

# namespaces

# type keyword
- type Person = {
  name: string;
  age: number;
};

# join of types
- | (union)
- & (with custom object , not with string and number for example)

# join of interfaces
- extends multiple interfaces
- works like &

# optional parameters
- use ? with param name
- similar to: type | undefined

# working with forms 
- HTMLInputElement
- HTMLDivElement
- HTMLSpanElement
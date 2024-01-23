class Bike {
    constructor(x, y) {
        this.pos = [0, 0];
        this.pos[0] = x;
        this.pos[1] = y;
    }
    get getPos() {
        return this.pos;
    }
    forward() {
        this.pos[0]++;
    }
    backward() {
        this.pos[0]--;
    }
}
class Car {
    constructor(x, y) {
        this.pos = [0, 0];
        this.pos[0] = x;
        this.pos[1] = y;
    }
    get getPos() {
        return this.pos;
    }
    forward() {
        this.pos[0]++;
    }
    backward() {
        this.pos[0]--;
    }
}
const bike1 = new Bike(0, 0);
console.log(`Bike1 current position ${bike1.getPos}`);
bike1.forward();
console.log(`Bike1 after 1 forward ${bike1.getPos}`);
bike1.backward();
console.log(`Bike1 after 1 backward ${bike1.getPos}`);
const car1 = new Car(10, 5);
console.log(`Car1 current position ${car1.getPos}`);
car1.forward();
console.log(`Car1 after 1 forward ${car1.getPos}`);
car1.backward();
console.log(`Car1 after 1 backward ${car1.getPos}`);
export {};

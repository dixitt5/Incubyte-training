"use strict";
class Bike {
    start() {
        console.log("bike started..");
    }
    stop() {
        console.log("bike stopped..");
    }
}
class Airplane {
    start() {
        console.log("Airplane started..");
    }
    stop() {
        console.log("Airplane stopped..");
    }
    fly() {
        console.log("Airplane started flying..");
    }
}
const plane = new Airplane();
Airplane.prototype.fly();

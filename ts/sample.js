"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
class Bike {
    start() {
        console.log("bike started..");
    }
    stop() {
        console.log("bike stopped..");
    }
}
exports.Bike = Bike;
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

"use strict";
class Car {
    constructor() {
        this.isIgnited = false;
        this.speed = 0;
    }
    start() {
        this.isIgnited = true;
        console.log("car started");
    }
    stop() {
        this.isIgnited = false;
        this.speed = 0;
        console.log("car stopped");
    }
    move() {
        this.speed++;
        console.log("current speed: ", this.speed);
    }
}
class Bike {
    constructor() {
        this.isIgnited = false;
        this.speed = 0;
    }
    start() {
        this.isIgnited = true;
        console.log("bike started");
    }
    stop() {
        this.isIgnited = false;
        this.speed = 0;
        console.log("bike stopped");
    }
    move() {
        this.speed++;
        console.log("current speed: ", this.speed);
    }
}
const car1 = new Car();
// car1.start();
// car1.move();
// car1.move();
// car1.stop();
const bike1 = new Bike();
// bike1.start();
// bike1.move();
// bike1.stop();
const vehicles = [];
vehicles.push(car1, bike1);
vehicles.forEach((vehicle) => {
    vehicle.start();
    vehicle.move();
    vehicle.move();
    vehicle.move();
    vehicle.move();
    vehicle.stop();
});

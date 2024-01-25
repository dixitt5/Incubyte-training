interface Vehicle {
    speed: number;
    isIgnited: boolean;
    start: () => void;
    stop: () => void;
    move: () => void;
}

class Car implements Vehicle {
    isIgnited: boolean = false;
    speed: number = 0;

    start(): void {
        this.isIgnited = true;
        console.log("car started");
    }

    stop(): void {
        this.isIgnited = false;
        this.speed = 0;
        console.log("car stopped");
    }

    move(): void {
        this.speed++;
        console.log("current speed: ", this.speed);
    }
}

class Bike implements Vehicle {
    isIgnited: boolean = false;
    speed: number = 0;

    start(): void {
        this.isIgnited = true;
        console.log("bike started");
    }

    stop(): void {
        this.isIgnited = false;
        this.speed = 0;
        console.log("bike stopped");
    }

    move(): void {
        this.speed++;
        console.log("current speed: ", this.speed);
    }
}

const car1: Car = new Car();
// car1.start();
// car1.move();
// car1.move();
// car1.stop();

const bike1: Bike = new Bike();
// bike1.start();
// bike1.move();
// bike1.stop();

const vehicles: Vehicle[] = [];
vehicles.push(car1, bike1);

vehicles.forEach((vehicle) => {
    vehicle.start();
    vehicle.move();
    vehicle.move();
    vehicle.move();
    vehicle.move();
    vehicle.stop();
})
interface Vehicle {
  stop(): void;
  start(): void;
}

export class Bike implements Vehicle {
  start(): void {
    console.log("bike started..");
  }
  stop(): void {
    console.log("bike stopped..");
  }
}

class Airplane implements Vehicle {
  start(): void {
    console.log("Airplane started..");
  }
  stop(): void {
    console.log("Airplane stopped..");
  }
  fly(): void {
    console.log("Airplane started flying..");
  }
}

const plane = new Airplane();

Airplane.prototype.fly();

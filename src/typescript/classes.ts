/**
 * https://www.typescriptlang.org/docs/handbook/2/classes.html
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes
 * https://ui.toast.com/weekly-pick/ko_20210107
 * https://rambabupadimi.medium.com/typescript-object-oriented-programming-7a6fd905d90e
 **/

class Point {
  x = 0;
  y = 0;
}
const pt = new Point();

console.log(`${pt.x}, ${pt.y}`);

/* <---------------> */

class BadGreeter {
  name: string;

  constructor() {
    this.name = "hello";
  }
}

class OKGreeter {
  // Not initialized, but no error
  name!: string;
}

class Greeter {
  readonly name: string = "world";

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }

  err() {
    this.name = "not ok";
    //   ____ Cannot assign to 'name' because it is a read-only property.ts(2540)
  }
}

const g = new Greeter();
console.log(g.name);

/* <---------------> */
interface Wheel {
  id: number;
  name: string;
  type: string;
}

class Vehicle {
  private wheel?: Wheel;
  private name?: string;
  private vehicleNo = 102;

  addWheel(value: Wheel) {
    this.wheel = value;
  }

  getWheel() {
    return this.wheel;
  }

  start() {
    console.log(`${this.name} vehicle started`);
  }

  stop() {
    console.log(`${this.vehicleNo} vehicle stoped`);
  }
}

const vehicle = new Vehicle();
vehicle.start();
vehicle.stop();
vehicle.addWheel({ id: 101, name: "HANKOOK", type: "Conventional Steel" });

// Inheritance
class Car extends Vehicle {
  constructor() {
    super();
  }

  move() {
    console.log("Car is moving...");
  }
}

const car = new Car();
car.start();
car.move();

// Abstract Class
abstract class Petrol extends Vehicle {
  abstract setFullTank(): void;
  setDefault() {
    console.log("petrol filled with default");
  }
}

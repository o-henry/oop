/**
 * https://www.typescriptlang.org/docs/handbook/2/classes.html
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes
 * https://ui.toast.com/weekly-pick/ko_20210107
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
  }
}

const g = new Greeter();
console.log(g.name);

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

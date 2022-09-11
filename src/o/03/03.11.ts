// class Line {
//   constructor(isDotted: boolean, distanceBetweenDots: number) {
//     if (isDotted && distanceBetweenDots <= 0) {
//       throw new RangeError("Expect the distance between dots to be positive");
//     }
//   }
// }

class Line {
  private isDotted: boolean;
  private distanceBetweenDots: number;

  public dotted(distanceBetweenDots: number): Line {
    if (distanceBetweenDots <= 0) {
      throw new RangeError();
    }

    const line = new Line();
    line.distanceBetweenDots = distanceBetweenDots;
    line.isDotted = true;

    return line;
  }

  public solid(): Line {
    const line = new Line();
    line.isDotted = false;

    return line;
  }
}

export {};

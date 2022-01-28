class Mutable {
  private someNumber: number;

  public constructor(initialNumber: number) {
    this.someNumber = initialNumber;
  }

  public increase() {
    this.someNumber = this.someNumber + 1;
  }
}

class Immutable {
  private someNumber: number;

  public constructor(initialNumber: number) {
    this.someNumber = initialNumber;
  }

  public increase(): Immutable {
    return new Immutable(this.someNumber + 1);
  }
}

const obj1 = new Mutable(10);
obj1.increase();

let obj2 = new Immutable(10);
obj2 = obj2.increase();

export {};

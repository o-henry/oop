// single-ton

class Bike {
  private static instance: Bike;
  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new Bike();
    return this.instance;
  }
}

const bike = Bike.getInstance();

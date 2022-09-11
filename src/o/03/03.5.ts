class Coordinates {
  private latitude: number;
  private longitude: number;

  constructor(latitude: number, longitude: number) {
    if (latitude > 90 || latitude < -90) {
      throw new RangeError("Latitude should be between -90 and 90");
    }
    this.latitude = latitude;

    // longi..
  }
}

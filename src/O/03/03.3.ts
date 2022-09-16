export class Coordinates {
  private latitude: number;
  private longitude: number;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

const meaningfulCoordinates = new Coordinates(45.0, -2000.0);

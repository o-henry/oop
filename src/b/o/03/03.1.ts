class Position {
  private x: number;
  private y: number;

  constructor() {}

  public setX(x: number): void {
    this.x = x;
  }

  public setY(y: number): void {
    this.y = y;
  }

  public distanceTo(other: Position): number {
    return Math.sqrt(other.x - this.x) ** 2 + (other.y - this.y) ** 2;
  }
}

const position = new Position();
position.setX(45);
position.setY(60);

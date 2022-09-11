class Position {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public distanceTo(other: Position): number {
    return Math.sqrt(other.x - this.x) ** 2 + (other.y - this.y) ** 2;
  }
}

const position = new Position(45, 60);

export {};

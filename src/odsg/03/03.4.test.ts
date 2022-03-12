import { Coordinates } from "./03.3";

describe("Validate Long and Latitude", () => {
  const coord = new Coordinates(90.1, 0.0);
  expect(coord).toThrowError("coord have to < 90");
});

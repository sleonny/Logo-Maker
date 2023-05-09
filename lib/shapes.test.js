const { Circle, Triangle, Square } = require("./shapes");

describe("Shape classes", () => {
  describe("Circle", () => {
    const circle = new Circle("Test Circle", "white", 0, "black");
    test("renders with correct shape color", () => {
      expect(circle.render()).toMatch(/fill:black;/);
    });
    test("renders with correct text color", () => {
      expect(circle.render()).toMatch(/fill:white;/);
    });
  });

  describe("Triangle", () => {
    const triangle = new Triangle("Test Triangle", "white", 1, "black");
    test("renders with correct shape color", () => {
      expect(triangle.render()).toMatch(/fill:black;/);
    });
    test("renders with correct text color", () => {
      expect(triangle.render()).toMatch(/fill:white;/);
    });
  });

  describe("Square", () => {
    const square = new Square("Test Square", "white", 2, "black");
    test("renders with correct shape color", () => {
      expect(square.render()).toMatch(/fill:black;/);
    });
    test("renders with correct text color", () => {
      expect(square.render()).toMatch(/fill:white;/);
    });
  });
});

const Circle = require("./shape.js");
const Triangle = require("./shape.js");
const Square = require("./shape.js");

describe("Circle", () => {
  test("render() method returns SVG circle element", () => {
    const circle = new Circle("red", 10);
    expect(circle.render()).toBe(
      '<circle cx="50" cy="50" r="10" fill="red" />'
    );
  });
});

describe("Triangle", () => {
  test("render() method returns SVG polygon element", () => {
    const triangle = new Triangle("green", 20, 30);
    expect(triangle.render()).toBe(
      '<polygon points="0,30 10,0 20,30" fill="green" />'
    );
  });
});

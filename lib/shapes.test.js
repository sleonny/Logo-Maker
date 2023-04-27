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

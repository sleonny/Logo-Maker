const { Circle } = require("../shapes");

test("Circle renders correctly", () => {
  const shape = new Circle("green");
  expect(shape.render()).toEqual(
    '<svg width="100" height="100"><circle cx="50" cy="50" r="50" fill="green" /></svg>'
  );
});

test("Circle setColor sets color correctly", () => {
  const shape = new Circle("red");
  shape.setColor("blue");
  expect(shape.render()).toEqual(
    '<svg width="100" height="100"><circle cx="50" cy="50" r="50" fill="blue" /></svg>'
  );
});

const { Triangle } = require("../shapes");

test("Triangle renders correctly", () => {
  const shape = new Triangle("orange");
  expect(shape.render()).toEqual(
    '<svg width="100" height="100"><polygon points="0,100 50,0 100,100" fill="orange" /></svg>'
  );
});

test("Triangle setColor sets color correctly", () => {
  const shape = new Triangle("purple");
  shape.setColor("yellow");
  expect(shape.render()).toEqual(
    '<svg width="100" height="100">\n<polygon points="50,0 100,100 0,100" fill="yellow" />\n</svg>'
  );
});

const { Square } = require("../shapes");

test("Square renders correctly", () => {
  const shape = new Square("indigo");
  expect(shape.render()).toEqual(
    '<svg width="100" height="100">\n<rect x="0" y="0" width="100" height="100" fill="indigo" />\n</svg>'
  );
});

test("Square setColor sets color correctly", () => {
  const shape = new Square("black");
  shape.setColor("white");
  expect(shape.render()).toEqual(
    '<svg width="100" height="100">\n<rect x="0" y="0" width="100" height="100" fill="white" />\n</svg>'
  );
});

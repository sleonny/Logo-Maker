const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

const colors = ["red", "orange", "yellow", "green", "blue", "black", "white"];

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter text (up to 3 characters):",
    },
    {
      type: "list",
      name: "textColor",
      message: "Choose text color: ",
      choices: colors,
    },
    {
      type: "list",
      name: "shapeIndex",
      message: "Choose a shape:",
      choices: [
        { name: "Circle", value: 0 },
        { name: "Triangle", value: 1 },
        { name: "Square", value: 2 },
      ],
    },
    {
      type: "list",
      name: "shapeColor",
      message: "Choose a shape color: ",
      choices: colors,
    },
  ])

  .then((data) => {
    let shape;
    if (data.shapeIndex === 0) {
      shape = new Circle(
        data.text,
        data.textColor,
        data.shapeIndex,
        data.shapeColor
      );
    } else if (data.shapeIndex === 1) {
      shape = new Triangle(
        data.text,
        data.textColor,
        data.shapeIndex,
        data.shapeColor
      );
    } else if (data.shapeIndex === 2) {
      shape = new Square(
        data.text,
        data.textColor,
        data.shapeIndex,
        data.shapeColor
      );
    }

    const logo = generateSVG(shape);
    fs.writeFile("logo.svg", logo, (err) =>
      err ? console.log(err) : console.log("generated logo")
    );
  });

function generateSVG(shape) {
  const svg = `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">${shape.render()}</svg>`;
  return svg;
}

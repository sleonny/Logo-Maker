import inquirer from "inquirer";
import fs from "fs";
import shapes from "./shapes.js";

const circle = new shapes.Circle(10);
console.log(circle.toString()); // output: Circle with radius 10

const square = new shapes.Square(5);
console.log(square.toString()); // output: Square with side length 5

const triangle = new shapes.Triangle(3, 4, 5);
console.log(triangle.toString()); // output: Triangle with sides 3, 4, and 5

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "black",
  "grey",
  "white",
  "indigo",
  "violet",
];

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

  .then((answers) => {
    const { text, textColor, shapeIndex, shapeColor } = answers;

    const shapeClass = shapes[shapeIndex];
    const shape = new shapeClass(shapeColor);

    const svg = `
    <svg width="300" height="200"><g transform="translate(150,100)">${shape.render()}<text x="0" y="0" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text></g></svg>`;
    fs.writeFileSync("logo.svg", svg);
    console.log("Generated logo.svg");
  });

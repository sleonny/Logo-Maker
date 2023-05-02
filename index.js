const inquirer = require("inquirer");
const fs = require("fs");

const { Circle, Triangle, Square } = require("./lib/shapes");

const shapes = [Circle, Triangle, Square];
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
    <svg width="300" height="200">
      <g transform="translate(150,100)">
        ${shape.render()}
        <text x="0" y="0" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
      </g>
    </svg>
  `;

    fs.writeFileSync("logo.svg", svg);
    console.log("Generated logo.svg");
  });

const inquirer = require("inquirer");
const fs = require("fs");

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

    const shapeClass = shape[shapeIndex];
    const shape = new shapeClass(shapeColor);

    const svg = `
    <svg width="300" height="200">
      ${shape.render()}
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

    fs.writeFileSync("logo.svg", svg);
    console.log("Generated logo.svg");
  });

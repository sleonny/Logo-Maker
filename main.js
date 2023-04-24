const readline = require("readline");
const fs = require("fs");
const SvgGenerator = require("./SvgGenerator");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class LogoGenerator {
  constructor() {
    this.text = "";
    this.textColor = "";
    this.shape = "";
    this.shapeColor = "";
  }

  start() {
    rl.question("Enter text (up to 3 characters): ", (text) => {
      this.text = text;
      rl.question(
        "Enter text color (keyword or hexadecimal number): ",
        (textColor) => {
          this.textColor = textColor;
          rl.question(
            "Choose a shape (circle, triangle, square): ",
            (shape) => {
              this.shape = shape;
              rl.question(
                "Enter shape color (keyword or hexadecimal number): ",
                (shapeColor) => {
                  this.shapeColor = shapeColor;
                  rl.close();

                  const svgGenerator = new SvgGenerator();
                  const svg = svgGenerator.generate(
                    this.text,
                    this.textColor,
                    this.shape,
                    this.shapeColor
                  );
                  fs.writeFileSync("logo.svg", svg);

                  console.log("Generated logo.svg");
                }
              );
            }
          );
        }
      );
    });
  }
}

const logoGenerator = new LogoGenerator();
logoGenerator.start();

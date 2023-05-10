class Shape {
  constructor(text, textColor, shapeIndex, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeIndex = shapeIndex;
    this.shapeColor = shapeColor;
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeIndex, shapeColor) {
    super(text, textColor, shapeIndex, shapeColor);
    this.characters = text;
  }
  render() {
    const text = `<text x="50%" y="62%" font-size="75px" text-anchor="middle" style="fill:${this.textColor};">${this.characters}</text>`;
    return `<circle cx="50%" cy="50%" r="100" class="shape" style="fill:${this.shapeColor};"/>${text}`;
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeIndex, shapeColor) {
    super(text, textColor, shapeIndex, shapeColor);
    this.characters = text;
  }
  render() {
    const text = `<text x="50%" y="60%" font-size="50px" text-anchor="middle" dominant-baseline="central" style="fill:${this.textColor};">${this.characters}</text>`;
    return `<polygon cx="50%" cy="50%" points="150, 18 244, 182 56, 182" class="shape" style="fill:${this.shapeColor};"/>${text}`;
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeIndex, shapeColor) {
    super(text, textColor, shapeIndex, shapeColor);
    this.characters = text;
  }
  render() {
    const text = `<text x="50%" y="50%" font-size="75px" text-anchor="middle" dominant-baseline="central" style="fill:${this.textColor};">${this.characters}</text>`;
    return `<rect x="50px" width="200" height="200" style="fill:${this.shapeColor};"/>${text}`;
  }
}

module.exports = { Circle, Triangle, Square };

class Shape {
  constructor(color) {
    this.color = color;
  }
  render() {
    throw new Error("render method not used");
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<svg width="100" height="100"><polygon points="0,100 50,0 100,100" fill="${this.color}" /></svg>`;
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<svg width="100" height="100"><circle cx="50" cy="50" r="50" fill="${this.color}" /></svg>`;
  }
  setColor(color) {
    this.color = color;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<svg width="100" height="100"><rect x="0" y="0" width="100" height="100" fill="${this.color}" /></svg>`;
  }
  setColor(color) {
    this.color = color;
  }
}

module.exports = {
  Shape,
  Triangle,
  Circle,
  Square,
};

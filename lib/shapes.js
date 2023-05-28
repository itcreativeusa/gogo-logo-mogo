const Component = require("./component.js");

//Class Circle
class Circle extends Component {
  constructor(children) {
    super(children);
    this.attributes = {};
  }
  render() {
    return `${this.renderInnerHtml()}<circle cx="150" cy="100" r="100" fill="${
      this.fillColor
    }"/>`;
  }
}
//Class Triangle
class Triangle extends Component {
  constructor(children) {
    super(children);
    this.attributes = {};
  }
  render() {
    return `${this.renderInnerHtml()}<polygon points="150 0, 270 170, 30 170" fill="${
      this.fillColor
    }"/>`;
  }
}
//Class Square
class Square extends Component {
  constructor(children) {
    super(children);
    this.attributes = {};
  }
  render() {
    return `${this.renderInnerHtml()}<rect x="50" y="0" width="200" height="200" fill="${
      this.fillColor
    }"/>`;
  }
}

module.exports = {
  Circle,
  Triangle,
  Square,
};

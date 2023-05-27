const Component = require("./component.js");

//Class Circle
class Circle extends Component {
  constructor(children) {
    super(children);
  }
  render() {
    return `${this.renderInnerHtml()}
     <circle cx="10" cy="10" r="100"`;
  }
}
//Class Triangle
class Triangle extends Component {
  constructor(children) {
    super(children);
  }
  render() {
    return `${this.renderInnerHtml()}
    <polygon points="150, 18 244, 182 56, 182"`;
  }
}
//Class Square
class Square extends Component {
  constructor(children) {
    super(children);
  }
  render() {
    return `${this.renderInnerHtml()}
    <rect x="50" y="0" width="200" height="200"`;
  }
}

module.exports = {
  Circle,
  Triangle,
  Square,
};

const Component = require("./component.js");

//Class Circle
class Circle extends Component {
  constructor(children) {
    super(children);
    this.attributes = {};
  }
  setAttribute(attribute, value) {
    this.attributes[attribute] = value;
  }
  render() {
    const colorAttributes = Object.entries(this.attributes)
      .map(([attribute, value]) => `${attribute}="${value}"`)
      .join(" ");
    return `${this.renderInnerHtml()}<circle cx="150" cy="100" r="100" ${colorAttributes}/>`;
  }
}
//Class Triangle
class Triangle extends Component {
  constructor(children) {
    super(children);
    this.attributes = {};
  }
  setAttribute(attribute, value) {
    this.attributes[attribute] = value;
  }
  render() {
    const colorAttributes = Object.entries(this.attributes)
      .map(([attribute, value]) => `${attribute}="${value}"`)
      .join(" ");

    return `${this.renderInnerHtml()}<polygon points="150 0, 270 170, 30 170" ${colorAttributes}/>`;
  }
}
//Class Square
class Square extends Component {
  constructor(children) {
    super(children);
    this.attributes = {};
  }
  setAttribute(attribute, value) {
    this.attributes[attribute] = value;
  }

  render() {
    const colorAttributes = Object.entries(this.attributes)
      .map(([attribute, value]) => `${attribute}="${value}"`)
      .join(" ");
    return `${this.renderInnerHtml()}<rect x="50" y="0" width="200" height="200" ${colorAttributes}/>`;
  }
}

module.exports = {
  Circle,
  Triangle,
  Square,
};

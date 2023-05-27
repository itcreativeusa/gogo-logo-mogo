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
    const attributesString = Object.entries(this.attributes)
      .map(([attribute, value]) => `${attribute}="${value}"`)
      .join(" ");
    return `${this.renderInnerHtml()}<circle cx="150" cy="100" r="100" ${attributesString}/>`;
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
    const attributesString = Object.entries(this.attributes)
      .map(([attribute, value]) => `${attribute}="${value}"`)
      .join(" ");

    return `${this.renderInnerHtml()}<polygon points="150 0, 270 170, 30 170" ${attributesString}/>`;
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
    const attributesString = Object.entries(this.attributes)
      .map(([attribute, value]) => `${attribute}="${value}"`)
      .join(" ");
    return `${this.renderInnerHtml()}<rect x="50" y="0" width="200" height="200" ${attributesString}/>`;
  }
}

module.exports = {
  Circle,
  Triangle,
  Square,
};

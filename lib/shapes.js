const Component = require('./component.js');

//Class Circle
class Circle extends Component {
  constructor(children) {
    super(children);
  }
  render() {
    return `${this.renderInnerHtml()}
     <circle cx="125" cy="125" r="200"`;
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
    <rect x="125" y="125" width="200" height="200"`;
  }
  }

  module.exports = {
    Circle,
    Triangle,
    Square,
  };
  


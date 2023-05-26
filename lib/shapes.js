const Component = require('./component.js');

//classes Circle, Triangle, Square
class Circle extends Component {
  constructor(children) {
    super(children);
  }
  render() {
    return `${this.renderInnerHtml()}
     <circle cx="300" cy="300" r="250"`;
  }
}

class Triangle extends Component {
  constructor(children) {
    super(children);
  }
  render() {
    return `${this.renderInnerHtml()}
    <polygon points="150, 18 244, 182 56, 182"`;
  }
}
class Square extends Component {
  constructor(children) {
    super(children);
  }
  render() {
    return `${this.renderInnerHtml()}
    <rect x="130" y="170" width="300" height="300"`;
  }
  }



module.exports = Circle;
module.exports = Triangle;
module.exports = Square;




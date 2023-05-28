class Component {
  constructor(children = []) {
    this.children = children;
    this.fillColor = "transparent";
  }
  setFillColor(color) {
    this.fillColor = color;
  }
  render() {
    throw new Error("Child class must implement a render() method.");
  }
  renderInnerHtml() {
    // Loop over children and convert any children that aren't strings to an
    // html string by calling its render method.
    return this.children
      .map((child) => {
        if (typeof child === "string") {
          return child;
        }
        return child.render();
      })
      .join("");
  }
}

module.exports = Component;

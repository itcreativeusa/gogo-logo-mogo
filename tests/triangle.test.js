const {Triangle} = require("../lib/shapes.js");

describe("Triangle", () => {
  test("should render Triangle", () => {
    const shape = new Triangle();
    shape.setAttribute("fill", "blue");
    expect(shape.render()).toEqual('<polygon points="150 0, 270 170, 30 170" fill="blue"/>');
  });
});


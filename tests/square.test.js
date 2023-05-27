const {Square} = require("../lib/shapes.js");

describe("Square", () => {
  test("should render Square", () => {
    const shape = new Square();
    shape.setAttribute("fill", "blue");
    expect(shape.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="blue"/>');
  });
});
const {Circle} = require("../lib/shapes.js");

describe("Circle", () => {
  test("should render Circle", () => {
    const shape = new Circle();
    shape.setAttribute("fill", "blue");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="blue"/>');
  });
});

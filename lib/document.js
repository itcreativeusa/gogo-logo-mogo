//Declare shape variables
const { Circle, Triangle, Square } = require("./shapes.js");

//Function create html document && render choosen logo name, shape, text color & shape color
function createDocument(title, textColor, shape, shapeColor) {
  const circle = new Circle()
  const triangle = new Triangle().render();
  const square = new Square().render();
  
  function renderShape(shape) {
     if (shape == "Circle") {
      return circle.render();
    } else if (shape == "Triangle") {
      return triangle.render();;
    } else if (shape == "Square") {
      return square.render();;
    } else {
      return shape;
    }
  }
  return `<!DOCTYPE html>
  <html lang="en">
  <body>
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> 
    <style>
    .heavy {
    font:bold 100px sans-serif;
    }
    </style>
   ${ renderShape(shape)} 
   fill="${shapeColor}" /><text x="150" y="120" fill="${textColor}" text-anchor="middle"  class="heavy">${title}</text></svg> 
    </body>
  </html>
  `;
}

module.exports = { createDocument };

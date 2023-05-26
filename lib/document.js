//Declare shape variables
const Circle = require('./shapes.js');
const Triangle = require('./shapes.js');
const Square = require('./shapes.js');

//Function create html document && render chosen logo name, shape, text color & shape color
function createDocument(title,textColor,shapes,shapeColor) {
 const circle = new Circle().render();
 const triangle = new Triangle().render();
 const square = new Square().render();
 function renderShape(shapes) {
  if (!shapes) {
    return "";
  } else if (shapes == "Circle") {
    return circle;
  } else if (shapes == "Triangle") {
    return triangle;
  } else if (shapes == "Square") {
    return square;
  } else {
    return shapes;
  }
}
  return `<!DOCTYPE html>
  <html lang="en">
  <body>
    <svg width="660" height="660" version="1.1" xmlns="http://www.w3.org/2000/svg"> 
    <style>
    .heavy {
    font:bold 200px sans-serif;
    }
    </style>
   ${renderShape(shapes)} fill="${shapeColor}" /><text x="130" y="400" fill="${textColor}" class="heavy">${title}</text></svg> 
    </body>
  </html>
  `;
}

module.exports = { createDocument };

//Declare shape variables
const { Circle, Triangle, Square } = require("./shapes.js");

//Function create html document && render choosen logo name, shape, text color & shape color
function createDocument(title, textColor, shapeType, shapeColor) {
  let shape;
  if (shapeType == "Circle") {
    shape = new Circle();
  } else if (shapeType == "Triangle") {
    shape = new Triangle();
  } else if (shapeType == "Square") {
    shape = new Square();
  }
  shape.setFillColor(shapeColor);
  return `
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> 
    <style>
    .heavy {
    font:bold 60px sans-serif;
    }
    </style>${shape.render()}
 <text x="150" y="100" fill="${textColor}" text-anchor="middle" alignment-baseline="middle" class="heavy">${title}</text></svg> 
  `;
}

module.exports = { createDocument };

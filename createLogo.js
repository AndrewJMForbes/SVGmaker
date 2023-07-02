const square = require('./lib/square')
const circle = require('./lib/circle')
const triangle = require('./lib/triangle')

function create(data){
  if(data.shape[0] === 'triangle'){
    var s = new triangle(data.shapeColor)

  } else if (data.shape[0] === 'square'){
    var s = new square(data.shapeColor)

  } else {
    
    var s = new circle(data.shapeColor)
  }

  if(data.text === ""){data.text = "SVG"}
  if(data.textColor === ""){data.textColor = "Black"}

  var svgExample = `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">
  ${s.render()}
  <text x="150" y="125" font-size="50" text-anchor="middle" fill="${data.textColor}">${data.logoName}</text>
</svg>`

return svgExample;

}

module.exports = create;


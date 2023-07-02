const shape = require('./shapes');
class circle extends shape{
  constructor(color){
    super(color)
  }
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
  }
}
module.exports = circle;
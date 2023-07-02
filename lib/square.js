const shape = require('./shapes');
class square extends shape {
  constructor(color){
    super(color)
  }
  render() {
    return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
  }
}
module.exports = square;
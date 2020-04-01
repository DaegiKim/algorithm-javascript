function squareDigits(num){
  return Number.parseInt(num.toString().split('').map(c => {
    return Math.pow(Number.parseInt(c), 2);
  }).reduce((a, b) => {
    return a.toString().concat(b.toString());
  }))
}

const { assert } = require('chai');

assert.equal(squareDigits(9119), 811181);

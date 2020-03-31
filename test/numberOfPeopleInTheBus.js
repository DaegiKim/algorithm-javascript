const chai = require("chai");
const assert = chai.assert;

var number = function(busStops){
  return [...busStops]
    .map(item => item.reduce((a, b) => a - b))
    .reduce((a, b) => a + b);
}

assert.equal(number([[10,0],[3,5],[5,8]]),5);
assert.equal(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
assert.equal(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
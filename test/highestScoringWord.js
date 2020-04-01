const chai = require("chai");
const assert = chai.assert;

function high(x){
  const scores = x.split(' ').map(word => {
    return word.split('').map(c => {
      return c.charCodeAt(0)-97;
    }).reduce((a, b) => a + b);
  });

  console.log(scores);

  return x.split(' ')[scores.indexOf(Math.max(...scores))];
}

describe("Example tests",_=>{
  assert.equal(high('man i need a taxi up to ubud'), 'taxi');
  assert.equal(high('what time are we climbing up the volcano'), 'volcano');
  assert.equal(high('take me to semynak'), 'semynak');
});
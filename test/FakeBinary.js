const chai = require("chai");
const assert = chai.assert;

function fakeBin(x){
  return x.split('').map(el => {
    if (parseInt(el) >= 5) return '1'
    else return '0'
  }).join('')
}

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
    assert.strictEqual(fakeBin('509321967506747'), '101000111101101');
    assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
  })
});

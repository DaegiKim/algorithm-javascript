const chai = require("chai");
const assert = chai.assert;

function makePassword(phrase) {
  return phrase.split(' ')
    .map(el => el[0])
    .map(el => {
      if (['i','I'].includes(el)) {
        return '1'
      } else if (['o','O'].includes(el)) {
        return '0'
      } else if (['s','S'].includes(el)) {
        return '5'
      } else {
        return el;
      }
    })
    .join('');
}

describe("makePassword", function() {
  it("should work for some examples", function () {
    assert.equal(makePassword("Give me liberty or give me death"), "Gml0gmd", "Wrong output for 'Give me liberty or give me death'");
    assert.equal(makePassword("Keep Calm and Carry On"), "KCaC0", "Wrong output for 'Keep Calm and Carry On'");
  });
});

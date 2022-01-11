const chai = require("chai");
const assert = chai.assert;

function computerToPhone(numbers){
  const keypad = [0,7,8,9,4,5,6,1,2,3]
  return numbers.split('').map(n => keypad[n].toString()).join('')
}

describe("Tests", () => {
  it("test", () => {
    assert.equal(computerToPhone("0789456123"), "0123456789")
    assert.equal(computerToPhone("000"), "000")
    assert.equal(computerToPhone("94561"), "34567")
    assert.equal(computerToPhone(""), "")
  });
});

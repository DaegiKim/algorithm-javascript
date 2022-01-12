const chai = require("chai");
const assert = chai.assert;

function add(A, B) {
  const AL = A.length
  const BL = B.length
  const ML = Math.max(AL, BL)

  let carry = 0, sum = ''

  for (let i = 1; i <= ML; i++) {
    let a = +A.charAt(AL - i)
    let b = +B.charAt(BL - i)

    let t = carry + a + b
    carry = t/10 |0
    t %= 10

    sum = (i === ML && carry)
      ? carry*10 + t + sum
      : t + sum
  }

  return sum
}

describe("Add two numbers", function(){
  it("should pass basic tests", function() {
    assert.equal(add("1", "1"), "2");
    assert.equal(add("123", "456"), "579");
    assert.equal(add("888", "222"), "1110");
    assert.equal(add("1372", "69"), "1441");
    assert.equal(add("12", "456"), "468");
    assert.equal(add("101", "100"), "201");
    assert.equal(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")
  });
});

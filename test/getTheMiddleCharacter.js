const chai = require("chai");
const assert = chai.assert;

function getMiddle(s) {
  const middle = s.length/2;
  return Number.isInteger(middle) ? s.substr(middle-1, 2) : s.substr(middle, 1);
}

describe("GetMiddle", function() {
  it("Tests", function() {
    assert.equal(getMiddle("test"),"es");
    assert.equal(getMiddle("testing"),"t");
    assert.equal(getMiddle("middle"),"dd");
    assert.equal(getMiddle("A"),"A");
  });
});
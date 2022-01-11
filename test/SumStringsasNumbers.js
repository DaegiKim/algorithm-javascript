const chai = require("chai");
const assert = chai.assert;

function sumStrings(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

describe("Tests", () => {
  it("test", () => {
    assert.equal(sumStrings('123','456'),'579')
  });
});

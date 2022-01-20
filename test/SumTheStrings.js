const chai = require("chai");
const assert = chai.assert;

function sumStr(a,b) {
  return ((parseInt(a)||0) + (parseInt(b)||0)).toString()
}

describe("Basic tests", () => {
  it("Tests example test cases", () => {
    assert.strictEqual(sumStr("8",""), "8");
    assert.strictEqual(sumStr("4","5"), "9");
    assert.strictEqual(sumStr("34","5"), "39");
  });
});

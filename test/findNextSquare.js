const chai = require("chai");
const assert = chai.assert;

function findNextSquare(sq) {
  const root = Math.sqrt(sq);
  return Number.isInteger(root) ? Math.pow(root+1, 2) : -1;
}

describe("findNextSquare", function() {
  it("should return the next square for perfect squares", function() {
    assert.equal(findNextSquare(121), 144, "Wrong output for 121");
    assert.equal(findNextSquare(625), 676, "Wrong output for 625");
    assert.equal(findNextSquare(319225), 320356, "Wrong output for 319225");
    assert.equal(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
  });

  it("should return -1 for numbers which aren't perfect squares", function() {
    assert.equal(findNextSquare(155), -1, "Wrong output for 155");
    assert.equal(findNextSquare(342786627), -1, "Wrong output for 342786627");
  });
});

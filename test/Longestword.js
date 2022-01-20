const chai = require("chai");
const assert = chai.assert;

function longest(words) {
  return words.reduce((a, b) => a.length > b.length ? a : b).length
}

describe("Longest word testing", function(){
  it("Basic tests", function(){
    assert.equal(longest(['simple', 'is', 'better', 'than', 'complex']), 7);
    assert.equal(longest(['explicit', 'is', 'better', 'than', 'implicit']), 8);
    assert.equal(longest(['beautiful', 'is', 'better', 'than', 'ugly']), 9);
  });
});

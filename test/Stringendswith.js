const chai = require("chai");
const assert = chai.assert;

function solution(str, ending){
  return str.endsWith(ending);
}

describe("Tests", () => {
  it("test", () => {
    assert.equal(solution('abcde', 'cde'), true)
    assert.equal(solution('abcde', 'abc'), false)
  });
});

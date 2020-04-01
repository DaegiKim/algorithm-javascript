function solution(str){
  const result = [];
  for (let i = 0; i < str.length; i+=2) {
    const sub = str.substr(i, 2);
    result.push(sub.length === 2 ? sub : sub.concat('_'));
  }

  return result;
}

const { assert } = require('chai');

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(solution(""), []);
  });
});
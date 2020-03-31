const chai = require("chai");
const assert = chai.assert;

function longest(s1, s2) {
  return s1.concat(s2)
    .split('')
    .reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
    .sort().join('');
}

describe("longest",function() {
  it("Basic tests",function() {
    assert.equal(longest("aretheyhere", "yestheyarehere"), "aehrsty")
    assert.equal(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
    assert.equal(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
  })});
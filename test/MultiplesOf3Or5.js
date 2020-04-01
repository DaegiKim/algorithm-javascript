const chai = require("chai");
const assert = chai.assert;

function solution(number){
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum+=i;
  }
  return sum;
}

function test(n, expected) {
  let actual = solution(n)
  assert.equal(actual, expected, `Expected ${expected}, got ${actual}`)
}

describe("basic tests", function(){
  test(10,23)
})
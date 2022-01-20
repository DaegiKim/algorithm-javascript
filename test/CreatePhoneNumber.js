const chai = require("chai");
const assert = chai.assert;

function createPhoneNumber(numbers){
  const s = numbers.map(i => i.toString()).join('')
  return `(${s.slice(0, 3)}) ${s.slice(3, 6)}-${s.slice(6, 10)}`;
}

describe("Create Phone Number", () => {
  it("Fixed tests", () => {
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  });
});

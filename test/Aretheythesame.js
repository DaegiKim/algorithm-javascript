const chai = require("chai");
const assert = chai.assert;

function arrayEquals(a, b) {
  for(let i=0;i<a.length;i++){if(a[i] !== b[i])return false}
  return true;
}

function comp(array1, array2){
  if(!array1 || !array2) return false;

  return arrayEquals(
    array1 ? array1
      .map(i => i**2)
      .sort((a, b) => a - b) : [],
    array2 ? array2.sort((a, b) => a - b) : []
  )
}

describe("Tests", () => {
  it("test", () => {
    const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    const a2 = [132, 14641, 20736, 361, 25921, 361, 20736, 361];
    assert.equal(comp(a1, a2), false);
  });
});

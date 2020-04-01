function getSum( a,b )
{
  const lower = Math.min(a, b);
  const higher = Math.max(a, b);

  let sum = 0;
  for (let i = lower; i <= higher; i++) {
    sum+=i;
  }

  return sum;
}

const chai = require("chai");
const assert = chai.assert;

describe("Basic Tests:", function(){

  assert.equal(getSum(0,-1),-1);
  assert.equal(getSum(0,1),1);

});
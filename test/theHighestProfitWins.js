function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}

const { assert } = require('chai');

var test = function(arr, res){
  assert.equal(minMax(arr), res, "tested on " + JSON.stringify(arr) + ":");
};

describe("minMax", function(){
  it("should work for some examples", function(){
    var i, r;
    test([1,2,3,4,5], [1,5]);
    test([2334454,5], [5, 2334454]);

    for(i = 0; i < 20; ++i){
      r = Math.random();
      test([r], [r,r]);
    }
  });
});
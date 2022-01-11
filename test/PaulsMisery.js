const chai = require("chai");
const assert = chai.assert;

function paul(x){
  const scores = {
    'kata': 5,
    'Petes kata': 10,
    'life': 0,
    'eating': 1
  };

  const score = x.map(i => scores[i]).reduce((a, b) => a + b, 0);

  if (score > 100) {
    return 'Miserable!';
  } else if (score >= 70) {
    return 'Sad!';
  } else if (score >= 40) {
    return 'Happy!';
  } else {
    return 'Super happy!';
  }
  return x.map(i => scores[i]).reduce((a, b) => a + b);
}

describe("Paul's Misery", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(paul(['life', 'eating', 'life']), 'Super happy!');
    assert.strictEqual(paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating']), 'Super happy!');
    assert.strictEqual(paul(['Petes kata', 'Petes kata', 'eating', 'Petes kata', 'Petes kata', 'eating']), 'Happy!');
  });
});

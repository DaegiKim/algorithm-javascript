const chai = require("chai");
const assert = chai.assert;

function numbersOfLetters(integer) {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const result = [];

  const split = integer.toString().split('');
  result.push(split.map(s => numbers[parseInt(s)]).join(''));

  while (result[result.length-1] !== 'four') {
    const last = result[result.length-1];
    const current = last.length.toString()
      .split('')
      .map(s => numbers[parseInt(s)])
      .join('')
    result.push(current);
  }

  return result;
}

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(numbersOfLetters(4), ["four"]);
    assert.deepEqual(numbersOfLetters(1), ["one", "three", "five", "four"]);
    assert.deepEqual(numbersOfLetters(12), ["onetwo", "six", "three", "five", "four"]);
    assert.deepEqual(numbersOfLetters(37), ["threeseven", "onezero", "seven", "five", "four"]);
    assert.deepEqual(numbersOfLetters(311), ["threeoneone", "oneone", "six", "three", "five", "four"]);
    assert.deepEqual(numbersOfLetters(999), ["nineninenine", "onetwo", "six", "three", "five", "four"]);
  });
});

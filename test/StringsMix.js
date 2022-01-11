const chai = require("chai");
const assert = chai.assert;

function mix(s1, s2) {
  const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const ss1 = {};
  const ss2 = {};
  const result = [];

  s1.split('').filter(c => (c >= 'a' && c <= 'z')).forEach(c => ss1[c] ? (ss1[c] = ss1[c] + 1) : ss1[c] = 1);
  s2.split('').filter(c => (c >= 'a' && c <= 'z')).forEach(c => ss2[c] ? (ss2[c] = ss2[c] + 1) : ss2[c] = 1);

  Object.keys(ss1).forEach(k => ss1[k] === 1 && delete ss1[k]);
  Object.keys(ss2).forEach(k => ss2[k] === 1 && delete ss2[k]);

  for (const idx in alphabetArray) {
    const i = alphabetArray[idx];
    if (ss1[i] || ss2[i]) {
      const cnt = Math.max(ss1[i] || 0, ss2[i] || 0)
      const char = ((ss1[i] || 0) > (ss2[i] || 0)) ? '1' : ((ss2[i] || 0) > (ss1[i] || 0)) ? '2' : '3';
      result.push(char + ':' + i.repeat(cnt));
    }
  }

  return result
    .sort((a, b) => {
      if (b.length === a.length) {
        return (parseInt(a[0]) || 0) - (parseInt(b[0]) || 0);
      } else {
        return b.length - a.length;
      }
    })
    .join('/').replace(/3/gi, '=');
}

describe("Mix",function() {
  it("Basic tests",function() {
    // assert.equal(mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr")
    assert.equal(mix("looping is fun but dangerous", "less dangerous than coding"), "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg")
    // assert.equal(mix(" In many languages", " there's a pair of functions"), "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")
    // assert.equal(mix("Lords of the Fallen", "gamekult"), "1:ee/1:ll/1:oo")
    // assert.equal(mix("codewars", "codewars"), "")
    // assert.equal(mix("A generation must confront the looming ", "codewarrs"), "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr")
  })})

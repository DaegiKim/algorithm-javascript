const chai = require("chai");
const assert = chai.assert;

function validSpacing(s) {
  if (s === '') return true;
  const split = s.split(' ');
  const filter = split.filter(el => el === '');
  return filter.length === 0;
}

describe("Fixed Tests", function() {
  it("Testing ''",function (){
    assert.strictEqual(validSpacing(''), true);
  });
  it("Testing 'Hello world'",function (){
    assert.strictEqual(validSpacing('Hello world'), true);
  });
  it("Testing ' Hello world'", function(){
    assert.strictEqual(validSpacing(' Hello world'), false);
  });
  it("Testing 'Hello  world '", function(){
    assert.strictEqual(validSpacing('Hello  world '), false);
  });
  it("Testing 'Hello'", function(){
    assert.strictEqual(validSpacing('Hello'), true);
  });
  it("Testing 'Helloworld'", function(){
    assert.strictEqual(validSpacing('Helloworld'), true);
  });
});

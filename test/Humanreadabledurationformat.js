const chai = require("chai");
const assert = chai.assert;

function formatDuration (seconds) {
  if (seconds === 0) { return 'now'; }

  let secs = seconds;

  const dic = {
    'year': 0,
    'day': 0,
    'hour': 0,
    'minute': 0,
    'second': 0,
  };

  dic.year = Math.floor(secs / 31536000);
  secs = secs % 31536000;

  dic.day = Math.floor(secs / 86400);
  secs = secs % 86400;

  dic.hour = Math.floor(secs / 3600);
  secs = secs % 3600;

  dic.minute = Math.floor(secs / 60);
  secs = secs % 60;

  dic.second = secs;

  return Object.keys(dic).filter(k => dic[k] > 0).map(k => {
    if(dic[k] > 1) {
      return dic[k] + ' ' + k + 's';
    } else {
      return dic[k] + ' ' + k;
    }
  }).join(', ').replace(/,([^,]*)$/, ' and$1')
}

describe("Tests", () => {
  it("test", () => {
    // assert.equal(formatDuration(1), "1 second");
    // assert.equal(formatDuration(62), "1 minute and 2 seconds");
    // assert.equal(formatDuration(120), "2 minutes");
    // assert.equal(formatDuration(3600), "1 hour");
    assert.equal(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
  });
});

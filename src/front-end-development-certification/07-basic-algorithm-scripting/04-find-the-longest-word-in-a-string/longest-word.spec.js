const expect = require('expect.js');
const longestWord = require('./longest-word');

const tests = [
  { input: '', result: 0 },
  { input: ' a ', result: 1 },
  { input: 'The quick brown fox jumped over the lazy dog', result: 6 },
  { input: 'May the force be with you', result: 5 },
  { input: 'Google do a barrel roll', result: 6 },
  { input: 'What is the average airspeed velocity of an unladen swallow', result: 8 },
  { input: 'What if we try a super-long word such as otorhinolaryngology', result: 19 },
];

describe('Find The Longest Word In A String Unit Tests:', function () {
  Object.keys(longestWord).forEach(version => {
    describe(`Testing Version ${version}:`, function () {
      it('should expose a function', function () {
        expect(longestWord[version]).to.be.a('function');
      });

      tests.forEach(({ input, result }) => {
        it(`should return ${result} for string '${input}'`, function () {
          expect(longestWord[version](input)).to.equal(result);
        });
      });
    });
  });
});
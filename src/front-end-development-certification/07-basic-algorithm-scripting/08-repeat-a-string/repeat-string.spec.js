const expect = require('expect.js');
const solution = require('./repeat-string');

const tests = [
  { input: ["*", 3], result: "***" },
  { input: ["abc", 3], result: "abcabcabc" },
  { input: ["abc", 4], result: "abcabcabcabc" },
  { input: ["abc", 1], result: "abc" },
  { input: ["*", 8], result: "********" },
  { input: ["abc", -2], result: "" },
];

describe('Repeat A String Unit Tests:', function () {
  Object.keys(solution).forEach(version => {
    describe(`Testing Version ${version}:`, function () {
      it('should expose a function', function () {
        expect(solution[version]).to.be.a('function');
      });

      tests.forEach(({ input, result }) => {
        it(`should return '${result}' for string '${input}'`, function () {
          expect(solution[version].apply(null, input)).to.equal(result);
        });
      });
    });
  });
});
const expect = require('expect.js');
const solution = require('./falsy-bouncer');

const tests = [
  { input: [7, "ate", "", false, 9], result: [7, "ate", 9] },
  { input: ["a", "b", "c"], result: ["a", "b", "c"] },
  { input: [false, null, 0, NaN, undefined, ""], result: [] },
  { input: [1, null, NaN, 2, undefined], result: [1, 2] }
];

describe('Falsy Bouncer Unit Tests:', function () {
  Object.keys(solution).forEach(version => {
    describe(`Testing Version ${version}:`, function () {
      it('should expose a function', function () {
        expect(solution[version]).to.be.a('function');
      });

      tests.forEach(({ input, result }) => {
        it(`should return '${result}' for array '${input}'`, function () {
          expect(solution[version](input)).to.eql(result);
        });
      });
    });
  });
});
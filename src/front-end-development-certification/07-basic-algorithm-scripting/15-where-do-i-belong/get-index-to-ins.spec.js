const expect = require('expect.js');
const solution = require('./get-index-to-ins');

const tests = [
  { input: [[10, 20, 30, 40, 50], 35], result: 3 },
  { input: [[10, 20, 30, 40, 50], 30], result: 2 },
  { input: [[40, 60], 50], result: 1 },
  { input: [[3, 10, 5], 3], result: 0 },
  { input: [[5, 3, 20, 3], 5], result: 2 },
  { input: [[2, 20, 10], 19], result: 2 },
  { input: [[2, 5, 10], 15], result: 3 },
  { input: [[5, 3, 20, 3], 21], result: 4 },
];

describe('Where Do I Belong Unit Tests:', function () {
  Object.keys(solution).forEach(version => {
    describe(`Testing Version ${version}:`, function () {
      it('should expose a function', function () {
        expect(solution[version]).to.be.a('function');
      });

      tests.forEach(({ input, result }) => {
        it(`should return '${result}' for array '${input}'`, function () {
          expect(solution[version].apply(null, input)).to.equal(result);
        });
      });
    });
  });
});
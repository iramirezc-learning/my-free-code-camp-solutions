const expect = require('expect.js');
const solution = require('./largest-numbers');

const tests = [
  { input: [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]], result: [5, 27, 39, 1001] },
  { input: [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]], result: [27, 5, 39, 1001] },
  { input: [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]], result: [9, 35, 97, 1000000] },
];

describe('Return Largest Numbers In Array Unit Tests:', function () {
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
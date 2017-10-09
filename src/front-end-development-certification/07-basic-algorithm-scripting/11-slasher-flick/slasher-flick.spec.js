const expect = require('expect.js');
const solution = require('./slasher-flick');

const tests = [
  { input: [[1, 2, 3], 2], result: [3] },
  { input: [[1, 2, 3], 0], result: [1, 2, 3] },
  { input: [[1, 2, 3], 9], result: [] },
  { input: [[1, 2, 3], 4], result: [] },
  { input: [["burgers", "fries", "shake"], 1], result: ["fries", "shake"] },
  { input: [[1, 2, "chicken", 3, "potatoes", "cheese", 4], 5], result: ["cheese", 4] },
];

describe('Slasher Flick Unit Tests:', function () {
  Object.keys(solution).forEach(version => {
    describe(`Testing Version ${version}:`, function () {
      it('should expose a function', function () {
        expect(solution[version]).to.be.a('function');
      });

      tests.forEach(({ input, result }) => {
        it(`should return '${result}' for array '${input}'`, function () {
          expect(solution[version].apply(null, input)).to.eql(result);
        });
      });
    });
  });
});
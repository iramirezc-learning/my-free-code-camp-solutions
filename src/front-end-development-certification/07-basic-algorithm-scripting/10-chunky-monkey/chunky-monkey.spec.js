const expect = require('expect.js');
const solution = require('./chunky-monkey');

const tests = [
  { input: [["a", "b", "c", "d"], 2], result: [["a", "b"], ["c", "d"]] },
  { input: [[0, 1, 2, 3, 4, 5], 3], result: [[0, 1, 2], [3, 4, 5]] },
  { input: [[0, 1, 2, 3, 4, 5], 2], result: [[0, 1], [2, 3], [4, 5]] },
  { input: [[0, 1, 2, 3, 4, 5], 4], result: [[0, 1, 2, 3], [4, 5]] },
  { input: [[0, 1, 2, 3, 4, 5, 6], 3], result: [[0, 1, 2], [3, 4, 5], [6]] },
  { input: [[0, 1, 2, 3, 4, 5, 6, 7, 8], 4], result: [[0, 1, 2, 3], [4, 5, 6, 7], [8]] },
  { input: [[0, 1, 2, 3, 4, 5, 6, 7, 8], 2], result: [[0, 1], [2, 3], [4, 5], [6, 7], [8]] },
];

describe('Chunky Monkey Unit Tests:', function () {
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
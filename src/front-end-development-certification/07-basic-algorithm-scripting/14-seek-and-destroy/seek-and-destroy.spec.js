const expect = require('expect.js');
const solution = require('./seek-and-destroy');

const tests = [
  { input: [[1, 2, 3, 1, 2, 3], 2, 3], result: [1, 1] },
  { input: [[1, 2, 3, 5, 1, 2, 3], 2, 3], result: [1, 5, 1] },
  { input: [[3, 5, 1, 2, 2], 2, 3, 5], result: [1] },
  { input: [[2, 3, 2, 3], 2, 3], result: [] },
  { input: [["tree", "hamburger", 53], "tree", 53], result: ["hamburger"] },
];

describe('Seek And Destroy Unit Tests:', function () {
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
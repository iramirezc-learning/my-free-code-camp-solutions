const expect = require('expect.js');
const factorialize = require('./factorialize-a-number');

const tests = [
  { input: 0, result: 1 },
  { input: 1, result: 1 },
  { input: 2, result: 2 },
  { input: 3, result: 6 },
  { input: 4, result: 24 },
  { input: 5, result: 120 },
  { input: 10, result: 3628800 },
  { input: 20, result: 2432902008176640000 },
];

describe('Factorialize A Number Unit Tests:', function () {
  Object.keys(factorialize).forEach(version => {
    describe(`Testing Version ${version}:`, function () {
      it('should expose a function', function () {
        expect(factorialize[version]).to.be.a('function');
      });

      tests.forEach(({ input, result }) => {
        it(`should return ${result} for number ${input}`, function () {
          expect(factorialize[version](input)).to.equal(result);
        });
      });
    });
  });
});
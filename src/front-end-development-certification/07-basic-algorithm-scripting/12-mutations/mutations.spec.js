const expect = require('expect.js');
const solution = require('./mutations');

const tests = [
  { input: ["hello", "hey"], result: false },
  { input: ["hello", "Hello"], result: true },
  { input: ["zyxwvutsrqponmlkjihgfedcba", "qrstu"], result: true },
  { input: ["Mary", "Army"], result: true },
  { input: ["Mary", "Aarmy"], result: true },
  { input: ["Alien", "line"], result: true },
  { input: ["floor", "for"], result: true },
  { input: ["hello", "neo"], result: false },
  { input: ["voodoo", "no"], result: false },
];

describe('Mutations Unit Tests:', function () {
  Object.keys(solution).forEach(version => {
    describe(`Testing Version ${version}:`, function () {
      it('should expose a function', function () {
        expect(solution[version]).to.be.a('function');
      });

      tests.forEach(({ input, result }) => {
        it(`should return '${result}' for array '${input}'`, function () {
          expect(solution[version](input)).to.equal(result);
        });
      });
    });
  });
});
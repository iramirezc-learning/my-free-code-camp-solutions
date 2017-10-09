const expect = require('expect.js');
const solution = require('./confirm-ending');

const tests = [
  { input: ["Bastian", "n"], result: true },
  { input: ["Connor", "n"], result: false },
  { input: ["Walking on water and developing software from a specification are easy if both are frozen", "specification"], result: false },
  { input: ["He has to give me a new name", "name"], result: true },
  { input: ["Open sesame", "same"], result: true },
  { input: ["Open sesame", "pen"], result: false },
  { input: ["If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"], result: false }
];

describe('Confirm The Ending Unit Tests:', function () {
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
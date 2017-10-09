const expect = require('expect.js');
const solution = require('./truncate-string');

const tests = [
  { input: ["A-tisket a-tasket A green and yellow basket", 11], result: "A-tisket..." },
  { input: ["Peter Piper picked a peck of pickled peppers", 14], result: "Peter Piper..." },
  { input: ["A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length], result: "A-tisket a-tasket A green and yellow basket" },
  { input: ["A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2], result: "A-tisket a-tasket A green and yellow basket" },
  { input: ["A-", 1], result: "A..." },
  { input: ["Absolutely Longer", 2], result: "Ab..." },
];

describe('Truncate A String Unit Tests:', function () {
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
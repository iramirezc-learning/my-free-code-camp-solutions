const expect = require('expect.js');
const titleCase = require('./title-case-sentence');

const tests = [
  { input: "I'm a little tea pot", result: "I'm A Little Tea Pot" },
  { input: "sHoRt AnD sToUt", result: "Short And Stout" },
  { input: "HERE IS MY HANDLE HERE IS MY SPOUT", result: "Here Is My Handle Here Is My Spout" },
];

describe('Title Case A Sentence Unit Tests:', function () {
  Object.keys(titleCase).forEach(version => {
    describe(`Testing Version ${version}:`, function () {
      it('should expose a function', function () {
        expect(titleCase[version]).to.be.a('function');
      });

      tests.forEach(({ input, result }) => {
        it(`should return '${result}' for string '${input}'`, function () {
          expect(titleCase[version](input)).to.equal(result);
        });
      });
    });
  });
});
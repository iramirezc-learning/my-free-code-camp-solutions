const expect = require('expect.js');
const solution = require('./caesars-cipher');

const tests = [
  { input: "LBH QVQ VG", result: "YOU DID IT" },
  { input: "SERR PBQR PNZC", result: "FREE CODE CAMP" },
  { input: "SERR CVMMN!", result: "FREE PIZZA!" },
  { input: "SERR YBIR?", result: "FREE LOVE?" },
  { input: "GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.", result: "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX." },
];

describe('Caesars Cipher Unit Tests:', function () {
  Object.keys(solution).forEach(version => {
    describe(`Testing Version ${version}:`, function () {
      it('should expose a function', function () {
        expect(solution[version]).to.be.a('function');
      });

      tests.forEach(({ input, result }) => {
        it(`should return '${result}' for string '${input}'`, function () {
          expect(solution[version](input)).to.equal(result);
        });
      });
    });
  });
});
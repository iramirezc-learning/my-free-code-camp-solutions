const expect = require('expect.js');
const reverseString = require('./reverse-a-string');

const tests = [
  { input: 'Hello', result: 'olleH' },
  { input: '12345', result: '54321' },
  { input: 'eme', result: 'eme' },
];

describe('Reverse A String Unit Tests:', function () {
  Object.keys(reverseString).forEach(version => {
    describe(`Testing Version ${version}:`, function () {
      it('should expose a function', function () {
        expect(reverseString[version]).to.be.a('function');
      });

      tests.forEach(({ input, result }) => {
        it(`should return '${result}' for string '${input}'`, function () {
          expect(reverseString[version](input)).to.equal(result);
        });
      });
    });
  });
});
const expect = require('expect.js');
const palindrome = require('./palindrome');

const tests = [
  { input: 'eye', result: true },
  { input: '_eye', result: true },
  { input: 'race car', result: true },
  { input: 'not a palindrome', result: false },
  { input: 'A man, a plan, a canal. Panama', result: true },
  { input: 'never odd or even', result: true },
  { input: 'nope', result: false },
  { input: 'almostomla', result: false },
  { input: 'My age is 0, 0 si ega ym.', result: true },
  { input: '1 eye for of 1 eye.', result: false },
  { input: '0_0 (: /-\ :) 0-0', result: true },
  { input: 'five|\_/|four', result: false },
];

describe('Check For A Palindrome Unit Tests:', function () {

  describe('Testing Version 1:', function () {
    it('should expose a function', function () {
      expect(palindrome.v1).to.be.a('function');
    });

    tests.forEach(({ input, result }) => {
      it(`should return ${result} for palindrome '${input}'`, function () {
        expect(palindrome.v1(input)).to.equal(result);
      });
    });
  });

  describe('Testing Version 2:', function () {
    it('should expose a function', function () {
      expect(palindrome.v2).to.be.a('function');
    });

    tests.forEach(({ input, result }) => {
      it(`should return ${result} for palindrome '${input}'`, function () {
        expect(palindrome.v2(input)).to.equal(result);
      });
    });
  });

  describe('Testing Version 3:', function () {
    it('should expose a function', function () {
      expect(palindrome.v3).to.be.a('function');
    });

    tests.forEach(({ input, result }) => {
      it(`should return ${result} for palindrome '${input}'`, function () {
        expect(palindrome.v3(input)).to.equal(result);
      });
    });
  });

  describe('Testing Version 4:', function () {
    it('should expose a function', function () {
      expect(palindrome.v4).to.be.a('function');
    });

    tests.forEach(({ input, result }) => {
      it(`should return ${result} for palindrome '${input}'`, function () {
        expect(palindrome.v4(input)).to.equal(result);
      });
    });
  });

  describe('Testing Version 5:', function () {
    it('should expose a function', function () {
      expect(palindrome.v5).to.be.a('function');
    });

    tests.forEach(({ input, result }) => {
      it(`should return ${result} for palindrome '${input}'`, function () {
        expect(palindrome.v5(input)).to.equal(result);
      });
    });
  });
});
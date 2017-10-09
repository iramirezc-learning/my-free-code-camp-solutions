const expect = require('expect.js');
const reverseString = require('./reverse-a-string');

describe('Reverse A String Unit Tests:', function () {
  it('should expose a function', function () {
    expect(reverseString).to.be.a('function');
  });

  it('should reverse a string', function () {
    expect(reverseString('Hello')).to.equal('olleH');
    expect(reverseString('12345')).to.equal('54321');
    expect(reverseString('eme')).to.equal('eme');
  });
});
/* global printLetter1, describe, it, expect, should */

describe('Accessing the letters of a String', function () {
  'use strict';

  it('printLetter1 is a function', function () {
    expect(printLetter1).to.be.a('function');

  });

  it('gives back a string data type', function () {
    expect(printLetter1()).to.be.a('string');
  });

  it('prints the 4 letter in a string', function () {
    expect(printLetter1()).to.equal('n');
  });

  // Add more assertions here
});

describe('Concatenating strings with bridgeString1', function () {
  'use strict';

  var testString1 = 'Javascript is so much fun, ';
  var testString2 = 'I wish I could code  in javascript all day, every day!'



  it('bridgeString1 is function', function () {
    expect(bridgeString1).to.be.a('function');

  });

  it('gives back a string data type', function () {
    expect(bridgeString1(testString)).to.be.a('string');
  });

  it('gives back a concatenated string', function () {
    expect(bridgeString1(testString)).to.equal(testString + testString2);
  });

  // Add more assertions here
});

/* global raw strings, describe, it, expect, should */

describe('printLetter()', function () {
  'use strict';

  it('exists', function () {
    expect(printLetter).to.be.a('function');

  });

  it('does something', function () {
    expect(typeof printLetter()).to.equal('string');
  });

  it('does something else', function () {
    expect(printLetter()).to.equal('n');
  });

  // Add more assertions here
});

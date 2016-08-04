'use strict';

var la = require('lazy-ass');
var is = require('check-more-types');

describe('first existing', function () {
  var first;
  beforeEach(function () {
    first = require('..');
  });

  it('is a function', function () {
    la(is.fn(first));
  });

  it('finds foo.txt first', function () {
    var fullFoo = __dirname + '/foo.txt';
    var found = first(__dirname, fullFoo);
    la(found === fullFoo, 'found', found);
  });

  it('finds foo.txt using relative path', function () {
    var found = first(__dirname, 'foo.txt');
    var fullFoo = __dirname + '/foo.txt';
    la(found === fullFoo, 'found', found);
  });

  it('finds foo.txt second', function () {
    var no = __dirname + '/does-not-exist.txt';
    var fullFoo = __dirname + '/foo.txt';
    var found = first(__dirname, [no, fullFoo]);
    la(found === fullFoo, 'found', found);
  });

  it('finds foo.txt not bar', function () {
    var fullFoo = __dirname + '/foo.txt';
    var fullBar = __dirname + '/bar.txt';
    var found = first(__dirname, [fullFoo, fullBar]);
    la(found === fullFoo, 'found', found);
  });
});

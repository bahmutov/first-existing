require('lazy-ass');
var check = require('check-more-types');

describe('first existing', function () {
  var first;
  beforeEach(function () {
    first = require('..');
  });

  it('is a function', function () {
    la(check.fn(first));
  });

  it('finds foo.txt first', function () {
    var fullFoo = __dirname + '/foo.txt';
    var found = first(fullFoo);
    la(found === fullFoo, 'found', found);
  });

  it('finds foo.txt second', function () {
    var no = __dirname + '/does-not-exist.txt';
    var fullFoo = __dirname + '/foo.txt';
    var found = first(no, fullFoo);
    la(found === fullFoo, 'found', found);
  });

  it('finds foo.txt not bar', function () {
    var fullFoo = __dirname + '/foo.txt';
    var fullBar = __dirname + '/bar.txt';
    var found = first(fullFoo, fullBar);
    la(found === fullFoo, 'found', found);
  });

  it('can be applied', function () {
    var fullFoo = __dirname + '/foo.txt';
    var fullBar = __dirname + '/bar.txt';
    var found = first.apply(null, [fullFoo, fullBar]);
    la(found === fullFoo, 'found', found);
  });
});

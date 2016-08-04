'use strict';

var la = require('lazy-ass');
var is = require('check-more-types');
var path = require('path');
var exists = require('fs').existsSync;

function firstExisting(folder, filenames) {
  la(is.unemptyString(folder), 'missing folder', folder);
  if (is.string(filenames)) {
    filenames = [filenames];
  }
  la(is.strings(filenames), 'missing filename candidates', filenames);
  la(exists(folder), 'cannot find folder', folder);

  var found;

  filenames.some(function (name) {
    var full = path.isAbsolute(name) ? name : path.join(folder, name);
    if (exists(full)) {
      found = full;
      return true;
    }
  });
  return found;
}

module.exports = firstExisting;

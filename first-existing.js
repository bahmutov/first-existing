'use strict';

var la = require('lazy-ass');
var is = require('check-more-types');
var path = require('path');
var exists = require('fs').existsSync;

function isRoot(folder) {
  return folder === '/';
}

function parentFolder(folder) {
  return path.normalize(path.join(folder, '..'))
}

function firstExisting(folder, filenames, walkUp) {
  la(is.unemptyString(folder), 'missing folder', folder);
  if (isRoot(folder)) {
    return;
  }

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

  if (!found && walkUp) {
    return firstExisting(parentFolder(folder), filenames, walkUp);
  }

  return found;
}

module.exports = firstExisting;

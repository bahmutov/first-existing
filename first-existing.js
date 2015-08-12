var exists = require('fs').existsSync;
function firstExisting() {
  var filenames = Array.prototype.slice.call(arguments, 0);
  var found;
  filenames.some(function (name) {
    if (exists(name)) {
      found = name;
      return true;
    }
  });
  return found;
}

module.exports = firstExisting;

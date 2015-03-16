var fs = require('fs');
var path = require('path');

module.exports = function(dirPath, filterExt, callback) {
  fs.readdir(dirPath, function(err, data) {
    if (err) {
      return callback(err);
    }
    data = data.filter(function(file) {
      return path.extname(file) === '.' + filterExt;
    });

    callback(null, data);
  });
};

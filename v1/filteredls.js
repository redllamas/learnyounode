var fs = require('fs');
var path = require('path');
var p = process.argv[2];
var ext = process.argv[3];
var flist;

fs.readdir(p, function readingDir(err, flist) {
  flist.forEach(function(i) {
    if (path.extname(i) === '.' + ext) {
      console.log(i);
    }
  })
})

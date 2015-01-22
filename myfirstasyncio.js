var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, 'utf8', function (err, fileContents) {
  var lines = fileContents.split('\n').length - 1;
  console.log(lines);
})

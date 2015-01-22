var filFun = require('./modular-module.js');
var dirPath = process.argv[2];
var filterExt = process.argv[3];

filFun(dirPath, filterExt, function(err, data) {
  if (err) {
    return console.error("Error output: ", err);
  }
  data.forEach(function(file) {
    console.log(file);
  });
});

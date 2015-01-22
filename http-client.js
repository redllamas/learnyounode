var http = require('http');
var add = process.argv[2];

http.get(add, function callback(response) {
  response.setEncoding('utf8');
  response.on("data", function(data) {
    console.log(data);
  });
  response.on("error", function(error) {
    console.log(error);
  });
});
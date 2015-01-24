var fs         = require('fs');
var http       = require('http');
var portNumber = process.argv[2];
var filePath   = process.argv[3];


var server     = http.createServer(function callback(req, res) {
  res.writeHead(200, {'content-type': 'text/plain'});
  var src      = fs.createReadStream(filePath);
  src.pipe(res);

});

server.listen(portNumber);

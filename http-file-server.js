var fs = require('fs');
var http = require('http');
var portNumber = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function callback(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('okay');

  var stream = fs.createReadStream(filePath);

});

server.listen(portNumber);

// req = request, which will fetch properties and query-string for the file we need 
// res = response, which sends data to the client, header and body
// req and res 
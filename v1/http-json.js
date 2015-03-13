// required:
// HTTP server to serve JSON data when it receives a GET request to 
// 1) the path '/api/parsetime',
// e.g.:  /api/parsetime?iso=2013-08-10T12:10:15.474Z
// Expect the request to contain a query string 'iso'
//
// 2) the path '/api/unixtime'
//
// Need to route with url.parse() method as such:
// var something = url.parse(request.url, true);
//
// Also, for JSON output, use JSON.stringify()

var http       = require('http');
var url        = require('url');
var portNumber = process.argv[2];

function parsetime(time) {
  return  {
    hour:   time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}
function unixtime(time) {
  return { unixtime: time.getTime()};
}
var server = http.createServer(function callback(req, res) {
  
  var req_url = url.parse(req.url, true);
  var time = new Date(req_url.query.iso);
  var path = req_url.pathname;
  var result;

  if (path == '/api/parsetime') {
    result = parsetime(time);
  } else if (path == '/api/unixtime') {
    result = unixtime(time);
  }
  
  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }

  res.write(JSON.stringify(req_url.query.iso));
});

server.listen(portNumber);
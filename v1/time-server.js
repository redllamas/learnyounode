var net = require('net');
var portNum = process.argv[2];
function pad(p) {
  return (p < 10 ? '0' : '') + p;
}

function dt() { 
  var d = new Date();
  return d.getFullYear() + '-' + pad(1 + d.getMonth()) + '-' + pad(d.getDate()) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + '\n';
}
var server = net.createServer(function (socket) { // make a connection
  console.log('client connected');
  
  socket.end(dt());
});

server.listen(portNum, function() {
  console.log('server bound');
}); //listener
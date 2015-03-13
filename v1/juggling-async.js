var http = require('http');
var urls = process.argv.slice(2,process.argv.length);
var waiting = 0;
var results = [];

// 3 urls, output each stream as a string onto new line, will be out of order.
// need to  1) queue results
//          2) keep track of how many of the urls have returned their contents
//          3) output in same order as received


urls.map(function mainFn(url, idx) {
  http.get(url, function callback(res) {
    ++waiting;
    var allData = '';
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      allData += chunk;
    });
    res.on('end', function() {
      results[idx] = allData;
      --waiting;
      if (waiting === 0) {
       results.map(function(result) {
        console.log(result);
       });
      }
    });
  });
});
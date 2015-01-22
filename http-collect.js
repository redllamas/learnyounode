var http = require('http');

// Method 1: Pass
// var fullString = '';

// http.get(process.argv[2], function callback(response) {
//   response.setEncoding('utf8');
//   response.on("data", function (chunk) {
//     fullString += chunk;
//   });
//   response.on("end", function(){
//     console.log(fullString.length);
//     console.log(fullString);
//   });
// });

// Method 2:

var bl = require('bl');

http.get(process.argv[2], function callback(response) {
  response.setEncoding('utf8');
  response.pipe(bl(function(err, data){
    if (err) {
      return console.error(err);
    }
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});


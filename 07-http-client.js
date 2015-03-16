//  HTTP CLIENT
//  Exercise 7 of 13

// Write a program that performs an HTTP GET request to a URL provided to you
// as the first command-line argument. Write the String contents of each "data"
// event from the response to a new line on the console (stdout).

var http = require('http')

http.get(process.argv[2], function callback(res) {
  res.setEncoding('utf8')
  res.on('data', function output(data) {
    console.log(data)
  })
  res.on('error', function errreport(){
    console.error
  })
})
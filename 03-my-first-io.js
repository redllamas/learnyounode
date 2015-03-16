// MY FIRST I/O!
// Exercise 3 of 13

// Write a program that uses a single synchronous filesystem operation to 
// read a file and print the number of newlines it contains to the console
// (stdout), similar to running cat file | wc -l.

// The full path to the file to read will be provided as the first command-
// line argument. You do not need to make your own test file.

var fs = require('fs')

// use split but return one less than array length

var buf = fs.readFileSync(process.argv[2])
var lines = buf.toString().split('\n')
console.log(lines.length - 1)
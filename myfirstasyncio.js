var fs = require('fs')
var lines = undefined;

function countNewLines(callback) {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    lines = fileContents.toString().split('\n').length -1;
    callback();
  });
};

function logNumberOfLines() {
  console.log(lines);
};

countNewLines(logNumberOfLines);

/* Official Solution

var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})

*/


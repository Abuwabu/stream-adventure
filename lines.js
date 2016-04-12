/*jslint node: true, esversion: 6 */

const split = require('split');
const through = require('through2');
const tr = through(write, end);

var lineCount = 0;

// Lowercase odd numbered lines
// Uppercase even numbered lines
function write(buffer, encoding, next) {
  var buf = buffer.toString();
  this.push(
    lineCount % 2 === 0
    ? buf.toLowerCase() + '\n'
    : buf.toUpperCase() + '\n'
  );
  lineCount ++;
  next();
}

function end(done) {
  done();
}

process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout);

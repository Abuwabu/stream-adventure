/*jslint node: true, esversion: 6 */

var through = require('through2');

function write(buffer, encoding, next) {
  // call this.push() to produce output data
  // call next() when ready for next chunk
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

var tr = through(write, end);

process.stdin.pipe(tr).pipe(process.stdout);

//  `write` and `end` are both optional.
//
//  If `write` is not specified, the default implementation passes the input data to
//  the output unmodified.
//
//  If `end` is not specified, the default implementation calls `this.push(null)`
//  to close the output side when the input side ends.
//
//  Make sure to pipe `process.stdin` into your transform stream
//  and pipe your transform stream into `process.stdout`, like this:
//
//      process.stdin.pipe(tr).pipe(process.stdout);
//
//  To convert a buffer to a string, call `buffer.toString()`.

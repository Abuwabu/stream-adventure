/*jslint node: true, esversion: 6 */
"use strict";


//  Your program will get some html written to stdin. Convert all the inner html to
//  upper-case for elements with a class name of "loud",
//  and pipe all the html to stdout.


var trumpet = require('trumpet');
var through = require('through2');

var trump = trumpet();
var tr = through(write, end);

function write(buffer, encoding, next) {
  // call this.push() to produce output data
  // call next() when ready for next chunk
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

// 'stream' — output all inner html content with class '.loud'
// data write to 'stream' will appear as the new inner html content
var loud = trump.select('.loud').createStream();
loud.pipe(tr).pipe(loud);


process.stdin.pipe(trump).pipe(process.stdout);

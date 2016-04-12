/*jslint node: true, esversion: 6 */
"use strict";

var fs = require('fs');
var http = require('http');
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

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(tr).pipe(res);
  }
});

server.listen(process.argv[2]);

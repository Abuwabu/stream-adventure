/*jslint node: true, esversion: 6 */
"use strict";

var request = require('request');

// req object is a readable+writable stream
var req = request.post('http://localhost:8099');

process.stdin.pipe(req).pipe(process.stdout);

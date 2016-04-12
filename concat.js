/*jslint node: true, esversion: 6 */
"use strict";

const concat = require('concat-stream');
const reverseStream = concat(reverseText);

function reverseText (body) {
  var b = body.toString().split('').reverse().join('');
  console.log(b);
}

process.stdin.pipe(reverseStream);

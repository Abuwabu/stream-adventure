/*jslint node: true, esversion: 6 */
"use strict";

var ws = require('websocket-stream');
var stream = ws('ws://localhost:8099');

stream.write('hello\n');

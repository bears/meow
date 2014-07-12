#!/usr/bin/env node
var app = require('../app');

const PORT = 3000;

app.set('port', PORT);

var server = app.listen(PORT);

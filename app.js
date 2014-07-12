var express = require('express');

var path = require('path');
var pubDir = path.join(__dirname, 'public');

var logger = require('morgan');

var favicon = require('static-favicon');
var less = require('less-middleware');
var gateway = require('./routes/gateway');

var app = express();

app.use(favicon());
app.use(logger('dev'));
app.use(less(pubDir));
app.use(express.static(pubDir));

app.use('/gateway', gateway);

/// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

/// error handlers
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.send('error');
});

module.exports = app;

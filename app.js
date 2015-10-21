'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var config = require('./config');
var apiRouter = require('./server/lib/api/router');

var app = express();

var env = process.env.NODE_ENV || 'dev';
var publicPath = 'client';
if (env === 'pro') {
    var publicPath = '.tmp';
}

app.use(morgan('dev'));
app.use(favicon(__dirname + '/favicon.ico'));
app.use(express.static(path.join(__dirname, publicPath)));

app.get('/', function (req, res) { res.sendFile(path.resolve(__dirname) + '/' + publicPath + '/index_' + env + '.html'); });
app.get('/ping', function (req, res) { res.send('ok'); });
app.use('/api', apiRouter);

app.listen(config.port, function() {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('Express server listening on port ' + config.port);
    console.log('Environment is ' + env);

});

module.exports = app;

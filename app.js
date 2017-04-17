'use strict';

var express     = require('express'),
    path        = require('path'),
    favicon     = require('serve-favicon'),
    morgan      = require('morgan');

var config      = require('./config'),
    apiRouter   = require('./server/lib/api/router');

var app         = express(),
    env         = process.env.NODE_ENV || 'dev',
    publicPath  = 'client',
    filePath    = __dirname + '/' + publicPath + '/index_' + env + '.html';

app.use(morgan('dev'));
app.use(favicon(__dirname + '/favicon.ico'));
app.use(express.static(path.join(__dirname, publicPath)));

app.use('/api'  , apiRouter);
app.get('/ping' , function (req, res) { res.send('ok'); });
app.get('*'     , function (req, res) { res.sendFile(filePath); });
// app.get('*', function (req, res) { res.redirect('/') });

app.listen(config.port, function() {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('Express server listening on port ' + config.port);
    console.log('Environment is ' + env);
});

module.exports = app;

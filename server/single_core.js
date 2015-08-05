'use strict';

var jsonServer = require('json-server');
var favicon = require('serve-favicon');
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var config = require('./config');

var rootPath = path.resolve(__dirname + '/../');

var server = jsonServer.create(); // Returns an Express server
server.use(jsonServer.defaults); // logger, static and cors middlewares

// api router
var apiRouter = jsonServer.router(config.DB); // Returns an Express router
server.use('/api', apiRouter);

// app router
var appRouter = require('express').Router();
appRouter.get('/home', function (req, res) { res.sendFile(rootPath + '/client/index.html'); });
appRouter.get('/ping', function (req, res) { res.send('ok'); });
server.use('/', appRouter);

// favicon
// server.use(favicon(rootPath + '/favicon.ico'));

// public dir
server.use(express.static(path.join(rootPath, 'client')));
server.use(express.static(path.join(rootPath, '.tmp')));

server.listen(config.PORT, function (error) {
    if (error) console.error(error);

    console.log('\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log('Json-Server is listening on port', config.PORT);
    // console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n');
});

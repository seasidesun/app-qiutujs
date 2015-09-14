'use strict';

var jsonServer = require('json-server');
var favicon = require('serve-favicon');
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var config = require('./server/config');

var rootPath = path.resolve(__dirname);
console.log(rootPath);

// Returns an Express server
var server = jsonServer.create();

//redirect from '/' to '/home#/movement'
server.use(function (req, res, next) { if (req.url==='/') return res.redirect('/home#/movement'); next(); });

// logger, static and cors middlewares
server.use(jsonServer.defaults);

// Returns an Express router
var apiRouter = jsonServer.router(config.DB);

// api router
server.use('/api', apiRouter);

// app router
var appRouter = require('express').Router();
appRouter.get('/home', function (req, res) { res.sendFile(rootPath + '/.tmp/index.html'); });
appRouter.get('/ping', function (req, res) { res.send('ok'); });
server.use('/', appRouter);

// favicon
// server.use(favicon(rootPath + '/favicon.ico'));

// public dir
server.use(express.static(path.join(rootPath, '.tmp')));

server.listen(config.PORT, function (error) {
    if (error) console.error(error);

    console.log('\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log('Json-Server is listening on port', config.PORT);
    // console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n');
});

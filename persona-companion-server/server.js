var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var apiRouter = require('./api-routes')

var app = express();
app.use(bodyParser.json());

//Allows access from different url:
app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "http://localhost:4200");
    response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

//Handles any api call:
app.use('/api', apiRouter);

//Regular call, redirect to angular app:
app.use('*', function (request, response) {
    response.send('all else works!');
});

var port = 2626;
app.listen(port, function () {
    console.log('Server started, listening on port: ' + port);
});
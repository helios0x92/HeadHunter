'use strict';

var express = require('express');
var path = require('path');
var routes = require('./app/routes/index.js');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(process.cwd() + '/public'));
app.use(cookieParser())

app.use('/', routes);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
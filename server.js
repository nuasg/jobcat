// server.js

// set up
var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

// express modules
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// express config
app.use(express.static(path.join(__dirname, '/public')));     // static files location (e.g. /public/img will be /img for users)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());
app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(morgan('dev'));

// database
var mongoose = require('mongoose');
var db = require('./app/db');
mongoose.connect(db.url);

// routing
require('./app/routes')(app);

app.listen(port);
console.log("APP LISTENING: PORT " + port);

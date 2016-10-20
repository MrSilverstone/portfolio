var http     = require('http');
var koa      = require('koa');
var logger   = require('koa-logger');
var route    = require('koa-route');
var routes   = require('./routes');
var serve    = require('koa-static');
var stylus   = require('koa-stylus');
var json     = require('koa-json');

var app = koa();

// middleware
app.use(logger());
app.use(stylus('./public'));
app.use(serve('./public'));
app.use(json());

// Route middleware
app.use(route.get('/', routes.index));
app.use(route.get('/project/:id', routes.project));

// Create HTTP Server
http.createServer(app.callback()).listen(8080);
console.log('Server listening on port 8080');

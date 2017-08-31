// Problem: a simple way to look at a users badge count and points from a web browser
// Soloutin: use node js to perform the profile lookup and serve our template via http
var http = require('http');
var router = require('./router.js');

var PORT = 3000;

// create a web server
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);

}).listen(PORT, '127.0.0.1');

console.log('Server running on PORT:', PORT);

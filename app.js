// Problem: a simple way to look at a users badge count and points from a web browser
// Soloutin: use node js to perform the profile lookup and serve our template via http

// 1. create a web server

var http = require('http');
var PORT = 3000;

http.createServer(function (request, response) {
  homeRoute(request, response);

}).listen(PORT, '127.0.0.1');

console.log('Server running on PORT:', PORT);

// 2. handle http route GET / and POST /
function homeRoute(request, response) {
  //if the url = '/' && GET
  if (request.url === "/") {
    // show search field
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write("Search\n");
    response.end("Footer\n");
  }
  //if url = '/' && POST
    // redirect to /:username
}

// 3. handle http route GET /:username
  function userRoute(request, response) {
    // if url ='/...'
    var username = request.url.replace("/", "");
    if (username.length > 0) {
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.write("Header\n");
      response.write(username + "\n");
      response.end("Footer\n");
      // get json from treehouse
        // on 'end'
          // show profile
        // on 'error'
          // show error
    }
  }

// 4. function that handles the reading of files and merges in values
  // read from file and get a string
     // merge values into string

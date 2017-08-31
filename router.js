var querystring = require('querystring');
var Profile = require('./profile.js');
var renderer = require('./renderer.js')

var commonHeaders = {'Content-Type': 'text/html'};

// handle http route GET / and POST /
function home(request, response) {
  //if the url = '/' && GET
  if (request.url === "/") {
    if (request.method.toLowerCase() === 'get') {
      // show search field
      response.writeHead(200, commonHeaders);
      renderer.view('header', {}, response);
      renderer.view('search', {}, response);
      renderer.view('footer', {}, response);
      response.end();
    } else {
      // if url = '/' && POST

      // get the post data from body
      request.on('data', function(postBody) {
        // extract from username
        var query = querystring.parse(postBody.toString());
        response.write(query.username);
        response.end();
        // redirect to /:username
      })
    }
  }
}

// handle http route GET /:username
  function user(request, response) {
    // if url ='/...'
    var username = request.url.replace("/", "");
    if (username.length > 0) {
      response.writeHead(200, commonHeaders);
      renderer.view('header', {}, response);

      // get json from treehouse
      var studentProfile = new Profile(username);
      // on 'end'
      studentProfile.on("end", function(profileJSON) {
        // show profile

        // store the values we need
        var values = {
          avatarURL: profileJSON.gravatar_url,
          username: profileJSON.profile_name,
          badges: profileJSON.badges.length,
          points: profileJSON.points.total,
        }

        // response
        renderer.view('profile', values, response);
        renderer.view('footer', {}, response);
        response.end();
      });

      // on 'error'
      studentProfile.on("error", function(error) {
        // show error
        renderer.view('error', {errorMessage: error.message}, response);
        renderer.view('search', {}, response);
        renderer.view('footer', {}, response);
        response.end();
      });

    }
  }

module.exports.home = home;
module.exports.user = user;

var Profile = require('./profile.js');
var renderer = require('./renderer.js')

// handle http route GET / and POST /
function home(request, response) {
  //if the url = '/' && GET
  if (request.url === "/") {
    // show search field
    response.writeHead(200, {'Content-Type': 'text/plain'});
    renderer.view('header', {}, response);
    renderer.view('search', {}, response);
    renderer.view('footer', {}, response);
    response.end();
  }
  //if url = '/' && POST
    // redirect to /:username
}

// handle http route GET /:username
  function user(request, response) {
    // if url ='/...'
    var username = request.url.replace("/", "");
    if (username.length > 0) {
      response.writeHead(200, {'Content-Type': 'text/plain'});
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

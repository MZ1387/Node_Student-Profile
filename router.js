var Profile = require("./profile.js");

// handle http route GET / and POST /
function home(request, response) {
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

// handle http route GET /:username
  function user(request, response) {
    // if url ='/...'
    var username = request.url.replace("/", "");
    if (username.length > 0) {
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.write("Header\n");

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
        response.write(values.username +  " has " + values.badges +" badges\n");
        response.end("Footer\n");
      });

      // on 'error'
      studentProfile.on("error", function(error) {
        // show error
        response.write(error.message + "\n");
        response.end("Footer\n");
      });

    }
  }

module.exports.home = home;
module.exports.user = user;

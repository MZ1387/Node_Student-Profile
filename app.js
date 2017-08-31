// Problem: a simple way to look at a users badge count and points from a web browser
// Soloutin: use node js to perform the profile lookup and serve our template via http

// 1. create a web server

// 2. handle http route GET / and POST /
  //if the url = '/' && GET
    // show search field
  //if url = '/' && POST
    // redirect to /:username

// 3. handle http route GET /:username
  // if url ='/...'
    // get json from treehouse
      // on 'end'
        // show profile
      // on 'error'
        // show error

// 4. function that handles the reading of files and merges in values

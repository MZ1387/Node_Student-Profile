var fs = require('fs');

function view(templateName, values, response) {
  // read from the template files
  var fileContents = fs.readFileSync('./views/' + templateName + '.html');
  
  // insert values into the content

  // write out the response
    response.write(fileContents);
}

module.exports.view = view;

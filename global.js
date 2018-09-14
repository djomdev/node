var path = require('path');

var name = "Diego Ortega";

var newName = name.toUpperCase(name);

global.console.log(`newName variable is ${newName}`);

console.log(__dirname);

console.log(path.basename(__filename)); 

// node does not declare variables not add variables to the global object which is just one to its
// global object. But what it does is that every file that you create is separate in
// node js is it's own module. In order for us to use a variable from another file. We need
// to import it. We need to actually export it from the file that we are using it and
// import it from the file that we want to use it in. 






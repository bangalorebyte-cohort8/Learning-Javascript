// Node.js uses a module architecture to simplify the creation of complex applications.
// Node js modules are equivalent to python modules 
// Including a module is easy; simply call the require() function, like this:
// Node.js is only an environment; you have to do everything yourself.

// example : var http = require('http');
// The require() function returns the reference to the specified module. 
// In the case of this code, a reference to the http module is stored in the http variable.

// Calling a module from your system example 
// var myModule = require('./myModule.js');

// Modules are encapsulated pieces of code. 
// The code within a module is mostly private - meaning that the functions and variables defined within them are only accessible from the inside of the module. 
// You can, however, expose functions and/or variables to be used outside of the module. 
// To do so, use the exports object and populate its properties and methods with the pieces of code that you want to expose. 

var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello from Node JS App');
});
server.listen(8080);
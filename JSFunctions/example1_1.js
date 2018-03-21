//1. Immediately invoked function expressions
//An immediately invoked function expression (IIFE) is a function 
//that's executed as soon as it's created. 
//It has no connection with any events or asynchronous execution. 
// You can define an IIFE as shown below:

// The first pair of parentheses function(){...} converts the code inside the 
// parentheses into an expression.
// The second pair of parentheses calls the function resulting from the expression. 
// An IIFE can also be described as a self-invoking anonymous function. 
//Its most common usage is to limit the scope of a variable made via var or to encapsulate 
//context to avoid name collisions.

module.exports.foo = "Hello Foo";

var myFunction = (function() {

  return {
    innerFunction: function () {
      var innerFoo = module.exports.foo;
        console.log("inner",innerFoo)
      return "Returning innerFunction with " + innerFoo;
        
    }
  };
})();

module.exports.myFunction = myFunction;	


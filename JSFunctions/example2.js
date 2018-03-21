//2. Closures

// A closure in JavaScript is an inner function that has access to its outer 
// function's scope, even after the outer function has returned control. 
// A closure makes the variables of the inner function private. 
// A simple example of a closure is shown below:

// The variable count is assigned an outer function. The outer function runs only once, 
// which sets the counter to zero and returns an inner function. 
// The _counter variable can be accessed only by the inner function, which makes it behave 
// like a private variable.


var count = (function () {
     var _counter = 0;
     return function () {return _counter += 1;}
})();

var a = count();

console.log("count is ", a)

a = count();

console.log("count is ", a)

a = count();

console.log("count is ", a)

// the counter is now 3
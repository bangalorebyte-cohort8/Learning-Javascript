// Memoization is an optimization technique that speeds up function execution by storing results of expensive 
// operations and returning the cached results 
// when the same set of inputs occur again. 
// JavaScript objects behave like associative arrays, making it easy to implement memoization in JavaScript. 
// For example, we can convert a recursive factorial function into a memoized factorial function as shown below:

// In the following example, the original Fibonacci function is rewritten to include memoization. 
// In the example, a self-executing anonymous function returns an inner function, f(), 
// which is used as the Fibonacci function. When f() is returned, its closure allows it to continue to access the “memo” object, 
// which stores all of its previous results. Each time f() is executed, it first checks to see if a result exists for the current value of “n”. 
// If it does, then the cached value is returned. Otherwise, the original Fibonacci code is executed. Note that “memo” is defined outside of f() 
// so that it can retain its value over multiple function calls.
// Recall that the original recursive function was called over 40 billion times to compute the 50th Fibonacci number. 
// By implementing memoization, this number drops to 99.

function memoizeFunction(func) {
     var cache = {};
     return function() {
          var key = arguments[0];
          if(cache[key]) {
          return cache[key];
          }
          else {
          var val = func.apply(this, arguments);
          cache[key] = val;
          return val;
          }
     };
}


var fibonacci = memoizeFunction(function(n) {
     return (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
});


for( i = 0 ; i < 30 ; i++){
	console.log(fibonacci(i))
}

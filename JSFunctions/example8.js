// Currying is a method of making functions more flexible. 
// With a curried function, you can pass all of the arguments that the function is expecting and get the result, 
// or you can pass only a subset of arguments and receive a function back that waits for the rest of the arguments. 
// A simple example of a curry is given below:

var myFirstCurry = function(word) {
     return function(user) {
            return [word , ", " , user].join("");
     };
};

var HelloUser = myFirstCurry("Hello");
var output = HelloUser("User"); // Output: "Hello, Rahul"

console.log(output)

var output = myFirstCurry("Hey there, Hello!")("User");

console.log(output)
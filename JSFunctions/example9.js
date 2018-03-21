// The apply, call, and bind methods

// It’s imperative for any JavaScript developer to understand the difference between the call, apply, and bind methods. 
// The three functions are similar in that their first argument is always the “this” value, or context, 
// that you want to give the function you are calling the method on.

// Of the three, call is the easiest. It's the same as invoking a function while specifying its context. Here’s an example:

var user = {
     name: "Mickey Mouse",
     whatIsYourName: function() {
     console.log(this.name);
     }
};

var output = user.whatIsYourName(); // Output: "Rahul Mhatre",

console.log(output)

var user2 = {
     name: "Minnie Mouse"
};

var output = user.whatIsYourName.call(user2); // Output: "Neha Sampat"

console.log(output)

console.log("-------------------------------------------------------------------------------------------")
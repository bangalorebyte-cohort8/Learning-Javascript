// apply is nearly the same as call. 
// The only difference is that you pass arguments as an array and not separately.
// Arrays are easier to manipulate in JavaScript, opening a larger number of possibilities for working with functions. 
// Here is an example using apply and call:

var user = {
     greet: "Hello!",
     greetUser: function(userName) {
     console.log(this.greet + " " + userName);
     }
};

var greet1 = {
     greet: "Hola"
};

user.greetUser.call(user,"Mickey Mouse") 
user.greetUser.apply(greet1,["Minnie Mouse"])
//user.greetUser.apply(greet1,["Donald"])


// The bind method allows you to pass arguments to a function without invoking it. 
// A new function is returned with arguments bounded preceding any further arguments. 
// Here is an example:

var user = {
     greet: "Hello!",
     greetUser: function(userName) {
     console.log(this.greet + " " + userName);
     }
};

var greetHola = user.greetUser.bind({greet: "Hola"});
var greetBonjour = user.greetUser.bind({greet: "Bonjour"});

greetHola("Mickey Mouse") 
greetBonjour("Minnie Mouse") 
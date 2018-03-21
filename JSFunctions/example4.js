//JavaScript lets you define private properties by using the underscore prefix as shown in the above example. However, this does not prevent a user from 
//directly accessing or modifying a property that is supposed to be private.

//Defining private properties using closures will help you solve this problem. The member functions that need access to private properties should be defined on 
//the object itself. You can make private properties using closures as shown below:

var Person = (function() {
    var store = {}, guid = 0;

    function Person () {
        this.__guid = ++guid;
        store[guid] = { 
            fName: "Dave",
            lName: "Smith"
        };
    }

    Person.prototype.fullName = function() {
        var privates = store[this.__guid];
        return privates.fName + " " + privates.lName;
    };

    Person.prototype.destroy = function() {
        delete store[this.__guid];
    };

    return Person; 
})();


var myPerson = new Person();

console.log(myPerson.fullName());

// in the end, destroy the instance to avoid a memory leak
myPerson.destroy(); 
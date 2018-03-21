// Every JavaScript function has a prototype property that is used to attach 
// properties and methods. 
// This property is not enumerable. It allows the developer to attach methods or 
// member functions to its objects.
// JavaScript supports inheritance only through the prototype property. 
// In case of an inherited object, the prototype property points to the object’s parent. 
// A common approach to attach methods to a function is to use prototypes as shown below:


function Person(first, last, age, eyecolor,address) {
    
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.address = address
}
var myFather = new Person("John", "Doe", 50, "blue", 'domlur');
console.log("my Father  ", myFather  )


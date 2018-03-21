// Method overloading allows multiple methods to have the same name but different arguments. 
// The compiler or interpreter determines which function to call based on the number of arguments passed. 
// Method overloading is not directly supported in JavaScript. But you can achieve something very much like it as shown below:

function somefunction() {
    if (arguments.length == 0) { // a, b are undefined
        // 1st body
        console.log("Overload function 1",arguments)
        
    } else if (arguments.length == 1) { // b is undefined
        // 2nd body
        console.log("Overload function 2",arguments[0])
        
    } else if (arguments.length == 2) { // both have values
        // 3rd body
        console.log("Overload function 3",arguments[0],arguments[1])
        
    } // else throw new SyntaxError?
    else{
        console.log("Overload function Unsupported")
       
    }
}


somefunction()

console.log("\n")

somefunction("Hello")

console.log("\n")

somefunction("Hello World")

console.log("\n")

somefunction("Hello","World")

console.log("\n")

somefunction("Hello","There","Mickey")

console.log("\n")

somefunction("Hello","There","Mickey","Mouse")
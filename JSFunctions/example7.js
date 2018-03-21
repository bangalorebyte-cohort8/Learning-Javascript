// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// this means that no matter where functions and variables are declared
// they are moved to the top of their scope regardless of whether their scope is global or local. 

var b = 10;

function hoist() {
    
  a = 20;
  b = 100;
  console.log('Inside hoist')
}

hoist();


/* 
Accessible as a global variable outside hoist() function
Output: 20
*/
c = hoist;

console.log(a); 
console.log(b); 
/*
Since it was declared, it is confined to the hoist() function scope.
We can't print it out outside the confines of the hoist() function.
Output: ReferenceError: b is not defined
*/
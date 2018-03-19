var http = require('http');

// One line comments - Variable declarations are case sensitive

var Faur = 'abcd';

/* Multi Line comments
 * 
 */
/* you can't however /* nest comments */ /* Syntax Error */

// 3 kinds of declarations

var dec = 0; // declares a variable and optionaly initialize the value

let x = 1; // block scope variable optinally initialize the value

if (x === 1) {
  let x = 2;
  dec = 1;

  console.log(x,dec);
  // expected output: 2
}

console.log(x,dec);
// expected output: 1

foo(); // "bar"

function foo() {
  console.log('bar');
}

// Data type conversion 

var y = 42;
console.log(y);
y = 'hello world';
console.log(y);

// convert numeric value to strings
x = 'the answer is ' + 42;
console.log(x);

function getMonthName(mo) {
  mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (months[mo]) {
    return months[mo];
  } else {
    throw 'InvalidMonthNo'; //throw keyword is used here
  }
}

try { // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
}
catch (e) {
  monthName = 'unknown';
  logMyErrors(e); // pass exception object to error handler -> your own function
}

try {
  writeMyFile(theData); //This may throw an error
} catch(e) {  
  handleError(e); // If we got an error we handle it
} finally {
  closeMyFile(); // always close the resource
}




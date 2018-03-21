//The Module pattern is the most frequently used design pattern in JavaScript for achieving loosely coupled, well-structured code. 
//It allows you to create public and private access levels. One way to achieve a Module pattern is shown below:

var Direction = (function() {
     var _direction = 'forward'
     var changeDirection = function(d) {
          _direction = d;
     }

     return {
          setDirection: function(d) {
          changeDirection(d);
          console.log(_direction);
          }
     };

})();

Direction.setDirection('back');     // Outputs: 'backward'
console.log(Direction._direction);
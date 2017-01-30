/*
 * Write Compose and Pipe functions.
 * 
 * Step 1: Implement the function Compose: 
 *
 * Compose should return a function that is the composition of a list of
 * functions.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view Compose as moving RIGTH to LEFT through its arguments.
 *
 * Compose Example:
   var greet = function(name){ return 'hello ' + name;}
   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
   var welcome = compose(exclaim, greet);
   welcome('phillip'); // 'hello PHILLIP!'

 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 * 
 * Each function is called on the return value of the preceding function.
 *
 * You can view Pipe as moving LEFT to RIGHT through its arguments.
 * 
 * Pipe Example:
  var add2 = function(number){ return number + 2; }
  var multiplyBy3 = function(number){ return number * 3; }
  var addAndMultiply = pipe(add2, multiplyBy3);
  addAndMultiply(5);//should be 21
  var addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);
  addAndMultiplyTwice(5); //should be 63
 */

'use strict';
var add2 = function(number){ return number + 2; }
var multiplyBy3 = function(number){ return number * 3; }

function pipe() {     // O(n)
  var func = arguments;  // func to hold all function
  return function() {
    var value = arguments;  // the value thet user will insert to basic function
    for(var i = 0; i < func.length; i++) {
      value = [func[i].apply(null,value)];  // here we will apply evry function to the value
    }
    return value[0];
   //func1(func2(arguments))
  }
}


var addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);

//==============================================================================

 var greet = function(name){ return 'hello ' + name;}
 var exclaim = function(statement) { return statement.toUpperCase() + '!';}

var compose = function(){  // O(n)
  var func = arguments;    // func to hold all function
  return function(){
    var value = arguments; // the value thet user will insert to basic function
    for (var i = func.length-1 ; i >= 0; i--) {
       value= [func[i].apply(null,value)]    // here we will apply function to the value
    }
    return value[0]
  }
};


var welcome = compose(greet, exclaim);
/*

**** PICK ONE OF THE TWO PROBLEMS ****

Problem 1 (Medium):
Create a function named "rotate" that takes an array and returns a new one
with the elements inside rotated n spaces.

If n is greater than 0 it should rotate the array to the right. 
If n is less than 0 it should rotate the array to the left. 
If n is 0, then it should return the array unchanged.

Examples:

Should work on arrays of any data types:
rotate(['a', 'b', 'c'], 1)     // => ['c', 'a', 'b']
rotate([1.0, 2.0, 3.0], 1)     // => [3.0, 1.0, 2.0]
rotate([true, true, false], 1) // => [false, true, true]

var data = [1, 2, 3, 4, 5];
rotate(data, 1) // => [5, 1, 2, 3, 4]
rotate(data, 2) // => [4, 5, 1, 2, 3] 5 4 
rotate(data, 5) // => [1, 2, 3, 4, 5] 
rotate(data, 0) // => [1, 2, 3, 4, 5]
rotate(data, -1) // => [2, 3, 4, 5, 1]
rotate(data, -2) // => [3, 4, 5, 1, 2]
rotate(data, -5) // => [1, 2, 3, 4, 5]

The rotation shouldn't be limited by the indices available in the array. 
Meaning that if we exceed the indices of the array it keeps rotating.

rotate(data, 7)     // => [4, 5, 1, 2, 3]
rotate(data, 11)    // => [5, 1, 2, 3, 4]
rotate(data, 12478) // => [3, 4, 5, 1, 2]

*/
// first solution modifay the origin array
function rotate(array, steps){  //O(n)
  if(steps>0){
    while(steps--){   // O(n)
      var x = array.pop()
      array.unshift(x)
    }
  }else{
    while(steps++){ //O(n)
     var x = array.shift()
      array.push(x) 
    }
  }
  return array
}

function rotatexxx(array, steps){ //O(n)
  if(steps>0){
    while(steps--){  //O(n)
      var x = array.slice(-1)[0]
      array = array.slice(0,-1)
      array.splice(0,0,x)
    }
  }else{
    while(steps++){  //O(n)
     var x = array.slice(0,1)[0]
     array=array.slice(1)
      array.splice(array.length,0,x) 
    }
  }
  return array
}


/*
Problem 2 (Advanced)
You have to create a function that takes a positive integer number and returns the 
next bigger number formed by the same digits:

Exanmples:
nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071

If no bigger number can be composed using those digits, return -1:

nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
*/

// not solving
function nextBigger(num){
  num=num+"";
 num=num.split("");
 for (var i = 0; i < num.length; i++) {
    if(parseInt(num[i]) <parseInt(num[i+1])){
      var x=num[i]
      num[i]=num[i+1]
      num[i+1]=x
    }
  } 
  return parseInt(num)
}
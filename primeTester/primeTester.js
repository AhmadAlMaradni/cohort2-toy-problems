/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */
var primeTester = function(n) {

	for (var i = 2; i < n; i++) {
		if(n % i === 0){
			return false
		}
	}
	return true
}
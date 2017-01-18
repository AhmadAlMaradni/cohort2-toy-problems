/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(num){
    var x = Math.pow(2,num)
    x = x.toString()
    x= x.split('')
    var sum = 0;
    // var n = Number.MAX_VALUE.toString();
    // var parts = n.split("e+");
    // var first = parts[0].replace('.', "");
    // var zeroes = parseInt(parts[1], 10) - (first.length - 1);
    // for(var i = 0; i < zeroes; i++){ first += "0"; }

    for (var i = 0; i < x.length; i++) {
        if(!isNaN(x[i])){
           sum+=parseInt(x[i])
      }
    }
    return sum
}
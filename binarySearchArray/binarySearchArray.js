/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */

var binarySearch = function (array, target) {  // time complexte : O(log(n))

    var mid = array[Math.floor(array.length/2)]
        if(target <= mid){
    for (var i = 0; i < mid; i++) {

        if(array[i] === target){
            return i;
        }
    }

        }else if(target >= mid){
            for (var i = mid; i < array.length; i++) {
                if(array[i] === target){
                    return i;
                }
            }
        }

};


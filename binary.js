/*
PSEUDOCODE BINARY SEARCH

DECLARE Function binarySearch with parameter (sortedArray, element)
LET var min equals to 0
LET var max equals to length of sortedArray
LOOP FOR initiate i start with 0 until i less than length of sortedArray,  DO
    LET med equals to integer min plus max devide by 2
    IF element equals to element sortedArray with index med DO
        RETURN value to med; 
    ELSE IF element less than element of sortedArray with index med DO
        max equals to  med minus 1
    ELSE IF element equals to element of sortedArray with index med DO
        min equals to med plus 1
    END IF
END FOR
RETURN value to -1 (if element searched doesnt exist in sortedArray)
*/

'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i=1; i<arr.length; i++){
    var store = arr[i];
    for (var j=i-1; j>=0; j--){
        if (store < arr[j]){
            var swap = arr[j];        
            arr[j] = arr[j+1];
            arr[j+1] = swap;
        }
    }
  }
  return arr;
}


function binary_search (search, array) {
  var min = 0
  var max = array.length;

  for(var i= 0; i<array.length; i++){
    var med = Math.floor((min+max)/2)
    if (search == array[med]){
      return med
    }else if (search<array[med]){
      max = med - 1
    }else {
      min = med + 1
    }
  }
 return -1
}


var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// // Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}

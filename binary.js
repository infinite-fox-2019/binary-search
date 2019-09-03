'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(var i = 0; i < arr.length; i++){
    for(var j = i; j >= 0; j--){
      if(arr[j] > arr[j+1]){
        var temp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = temp;
      }
      
    }
  }
  return arr
}

function binary_search (search, arr) {
  var low = 0;
  var high = arr.length-1;
  while(low <= high){
    var mid = Math.floor((low + high)/2)
    if(arr[mid] == search){
      return mid;
    }
    else if(arr[mid] < search){
      low = mid + 1;
    }
    else{
      high = mid -1;
    }
  }
  return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}

// PSEUDOCODE
// SORT all array/data from small to big
// STORE data with array
// STORE search with value want to search
// STORE low with 0
// STORE high with last index of array
// WHILE low <= high
//  STORE mid with CALCULATE (low add high) divide 2
//   IF mid equals to search THEN
//    RETURN mid
//  ELSE IF mid < search THEN
//    SET low with mid add 1
//  ELSE
//    SET high with mide minus 1
//  END IF
// END WHILE
// IF dont math with all data THEN
//  RETURN -1
// END IF
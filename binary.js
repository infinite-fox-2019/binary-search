'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var temp = arr[i];
    var index = i;
    for (var j = i - 1; j >= 0; j--) {
        if (temp < arr[j]) {
            arr[j + 1] = arr[j];
            index = j;
        } 
    }
    arr[index] = temp;
}
return arr
}

function binary_search (search, array) {
  var left = 0;
  var right = array.length;
  for (var i = 0; i < array.length; i++) {
    var center = Math.floor((right+left)/2);
      if (array[center] === search) {
        return center;
      } else if (search < array[center]) {
        right = center;
      } else if (search > array[center]) {
        left = center;
      }
  }
  return -1;
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
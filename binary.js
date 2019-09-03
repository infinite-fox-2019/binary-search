'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var currentElement = arr[i];
    for(var j = i - 1; j >= 0; j--) {
      if(arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        arr[j] = currentElement;
      }
    }
  }
      
  return arr;
}

function binarySearch (search, arr) {
  var start = 0;
  var end = arr.length - 1;
  while(start <= end) {
    var midIndex = Math.floor((start + end) / 2);
    if(search === arr[midIndex]) {
      return midIndex;
    } else {
      if(search < arr[midIndex]) {
        end = midIndex - 1;
      } else {
        start = midIndex + 1;
      }
    }
  }
  return -1;
}

//ensuring accuracy
let test_array = [1, 2, 3, 4, 5];
console.log(binarySearch(3, test_array) === 2);

test_array = [13, 19, 24, 29, 32, 37, 43];
console.log(binarySearch(35, test_array) === -1);

test_array = [100, 120, 130, 135, 150, 170];
console.log(binarySearch(135, test_array) === 3);

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}

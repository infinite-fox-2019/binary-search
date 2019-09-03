'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var temp = arr[i];
    var index = i;
    for(var j = i-1; j >= 0; j--) {
        if(temp < arr[j]) {
            arr[j+1] = arr[j];
            index = j;
        }
    }
    arr[index] = temp;
  }
  return arr;
}

function binary_search (search, array) {
  var sortedArr = ownSort(array);
  var min = 0;
  var max = sortedArr.length-1;

  while (min <= max) {
    var mid = Math.floor((min+max)/2);
    if(search === sortedArr[mid]) {
      return mid;
    } else if (search < sortedArr[mid]) {
      max = mid-1;
    } else if (search > sortedArr[mid]) {
      min = mid+1;
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

// module.exports = {
//   binary_search
// }

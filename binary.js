'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var i = 1; i < arr.length; i++) {
    var holdNumber = arr[i];
    for (var j = i-1; j >= 0; j--) {
      if (arr[j] > holdNumber) {
        var tukar = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tukar;
      } else {
        break;
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  var batasBawah = 0;
  var batasAtas = array.length-1;
  while (batasBawah <= batasAtas) {
    var tengah = Math.ceil((batasAtas + batasBawah) / 2);
    if (search == array[tengah]) {
      return tengah;
    } else if (search > array[tengah]) {
      batasBawah = tengah + 1;
    } else {
      batasAtas = tengah - 1
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

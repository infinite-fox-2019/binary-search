'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var i = 0; i < arr.length-1; i++) {
    var holdNumber = arr[i+1];
    for (var j = i; j >= 0; j--) {
        if (arr[j] > holdNumber) {
            arr[j+1] = arr[j]
            if (holdNumber >= arr[j-1] || arr[j-1] == undefined) {
                arr[j] = holdNumber;
                break;
            }
        }
    }
  }
  return arr
}

/*
PSEUDOCODE
  STORE search with any number
  STORE array with array of number
  STORE batasBawah with 0
  STORE batasAtas with length of array minus by 1
  WHILE batasBawah LESS THAN OR EQUALS TO batasAtas
    STORE tengah with (CALCULATE batasAtas + batasBawah divide by 2)
    IF search EQUALS TO array[tengah] THEN
      DISPLAY tengah
    ELSE IF search GREATER THAN array[tengah] THEN
      SET batasBawah with tengah add by 1
    ELSE
      SET batasAtas with tengah minus by 1
  ENDWHILE
  DISPLAY -1

*/

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
console.log(arrayGenapSorted);
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(arrayGanjilSorted);
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}

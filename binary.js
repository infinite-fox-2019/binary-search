'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
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
  // Your searching code
    var indekstart = 0
    var indeksstop = array.length-1
    var mid = 1
    while (indekstart <= indeksstop) {
        mid = indekstart + Math.floor((indeksstop - indekstart)/2)
        if (array[mid] == search) return mid
        if (search < array[mid]) {
            indeksstop = mid-1
        } else if (search > array[mid]) {
            indekstart = mid+1
        }
    }
    return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGenapSorted)
console.log(arrayGanjilSorted)
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

'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
    for (var i = 0; i < arr.length; i++) {
      var current = arr[i]
      for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
        arr[j + 1] = arr[j]
        // console.log(arr)
      }
      arr[j + 1] = current
      // console.log(arr)

    }
    return arr
}

function binary_search (search, array) {
  // Your searching code
  var min = 0
  var max = array.length - 1
  while (min <= max) {
    // console.log(max,min,mid)
    var mid = Math.floor((min + max) / 2)
    if (array[mid] === search) {
      return mid
    }
    else if (array[mid] < search){
      min = mid + 1
    }
    else {
      max = mid - 1
    }
  }
  return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
// console.log(arrayGenapSorted)
// console.log(arrayGanjilSorted)
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
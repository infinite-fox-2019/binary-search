'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 0; i < arr.length; i++) {
    let selected = arr[i]
    let j = i
    while (selected < arr[j - 1] && j > 0) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = selected
  }
  return arr
}

function binarySearch(search, array) {
  // Your searching code
  let right = array.length - 1
  let left = 0

  while (right >= left) {
    let middle = Math.floor((right + left) / 2)

    if (search === array[middle]) {
      return middle;
    } else if (search < array[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1
    }

  }

  return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

console.log(arrayGenapSorted);
console.log(arrayGanjilSorted);

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

'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  // insertion
  for (let i = 1; i < arr.length; i++) {
    let sortValue = arr[i];
    while(sortValue < arr[i - 1]) {
      arr[i] = arr[i - 1];
      i--
    }
    arr[i] = sortValue;
  }
  // console.log(arr)
  return arr
}

function binary_search(search, array) {
  // Your searching code
  let left = 0
  let right = array.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (array[mid] === search) return mid
    if (array[mid] < search) left = mid + 1
    if (array[mid] > search) right = mid - 1
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

'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(array) {
  for (let i = 0; i < array.length; i++) {
    let count = i
    let selected = array[i]
    while (selected < array[count - 1]) {
      array[count] = array[count - 1]
      count--
    }
    array[count] = selected
  }
  return array
}

// TIDAK RECURSIVE
// function binary_search(search, array) {
//   let left = 0
//   let right = array.length
//   while (left <= right) {
//     let mid = Math.floor((right + left) / 2)
//     let target = array[mid]
//     if (target === search) return mid
//     else target < search ? left = mid + 1 : right = mid - 1
//   }
//   return -1
// }


// RECURSIVE
function binary_search(search, array, left, right) {
  left == undefined ? left = 0 : left = left
  right == undefined ? right = array.length : right = right

  let mid = Math.floor((right + left) / 2)
  let target = array[mid]
  if (target === search) return mid
  if (left > right) return -1
  else return target < search ? binary_search(search, array, mid + 1, right) : binary_search(search, array, left, mid - 1)
}


var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code untuk recursive
console.log(binary_search(8, arrayGenapSorted))//0
console.log(binary_search(10, arrayGenapSorted))//1
console.log(binary_search(33, arrayGenapSorted))//-1
console.log('');
console.log(binary_search(53, arrayGanjilSorted))//4
console.log(binary_search(3, arrayGanjilSorted))//0
console.log(binary_search(2, arrayGanjilSorted))//-1

module.exports = {
  binary_search
}

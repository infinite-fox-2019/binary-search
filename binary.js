'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code

  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];

    for (let j = i; j > 0; j--) {
      if (arr[j-1] > arr[j]) {
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      }
    }
  }
  return arr;
}


function binary_search (search, array) {
  // Your searching code
  let width = array.length

  let center = (width-1)/2;
  while (width > 0) {
    if (search > array[center]) {
      center+=Math.floor((center/2)+1)
    }else if (search < array[center]) {
      center -= Math.floor((center/2)+1)
    }else if (search == array[center]) {
      return `Terdapat ${search} di index ke-${center}`
    }
    width--
  }

  return `Item yang dicari tida ada`;
}//end function binarySearch

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// console.log(arrayGanjilSorted);
// console.log(testArrayGanjil)

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

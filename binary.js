'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(let i=0 ; i<arr.length ; i++){
    for(let j=0 ; j<arr.length ; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

/*
Pseudocode:
initiate start with 0
initiate end with the array's length -1
while(start is less than or equal to end)
  initiate mid with (start+end)/2 rounded down
  if search is equals to array in index mid
    return the index
  else if search is less than the value in array index mid
    end equals to mid - 1
  else if search is more than the value in array index mid
    start equals to mid + 1
ENDWHILE
*/

function binary_search (search, array) {
  // Your searching code
  var start = 0
  var end = array.length -1

  while(start <= end){
    var mid = Math.floor((start+end)/2)
    if(search === array[mid]){
      return mid
    } else if (search < array[mid]){
      end = mid -1
    } else if (search > array[mid]){
      start = mid + 1
    }

  }

  // notes:
  // find the end of the array
  // find the start of the array
  // while the start index is lower or equals to end index
  // define mid with (startofindex + endofindex /2)
  // if search equals to the middle index, return mid
  // if search is less than mid array
  // the endindex becomes mid -1
  // if search is more than mid array
  // the the startindex becomes mid + 1

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

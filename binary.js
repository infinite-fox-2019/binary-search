'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i=0;i<arr.length;i++){
    for (var j=i;j>=0;j--){
      if (arr[j]>arr[i]){
        var temp = arr[j]
        arr[j]=arr[i]
        arr[i]=temp 
        i=j
      }
    }
  }
  return arr;
}

function binary_search (search, array) {
  var min = 0
  var max = array.length-1
  var tengah = Math.floor((max-min)/2)
  loop1:
  for (var i=min;i<max;i++){
    if (search == array[tengah]){
      return tengah-1
    } else if (search == array[min]){
      return min
    } else if (search == array[max]){
      return max
    } else if (search < array[tengah]){
      min = 0
      max = tengah
      var tengah = Math.floor((max-min)/2)
      continue loop1;
    } else if (search > array[tengah]){
      min = tengah
      max = array.length-1
      var tengah = tengah + Math.floor((max-min)/2)
      continue loop1;
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted) === 0)
console.log(binary_search(10, arrayGenapSorted) === 1)
console.log(binary_search(33, arrayGenapSorted) === -1)

console.log(binary_search(53, arrayGanjilSorted) === 3)
console.log(binary_search(3, arrayGanjilSorted) === 0)
console.log(binary_search(2, arrayGanjilSorted) === -1)

module.exports = {
  binary_search
}

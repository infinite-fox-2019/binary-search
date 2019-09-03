'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i=1; i<arr.length; i++){
    var store = arr[i];
    for (var j=i-1; j>=0; j--){
        if (store < arr[j]){
            var swap = arr[j];        
            arr[j] = arr[j+1];
            arr[j+1] = swap;
        }
    }
  }
  return arr;
}


function binary_search (search, array) {
  var min = 0
  var max = array.length;

  for(var i = 0; i < array.length; i++){
    var med = Math.floor((min+max)/2)
    if (search == array[med]){
      return med
    }else if (search<array[med]){
      max = med - 1
    }else {
      min = med + 1
    }
  }
 return -1
}


var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

console.log('ganjil ' + arrayGanjilSorted, 'genap ' + arrayGenapSorted)
// // Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}

'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]


function insertionSort(arr) {
  // Your sorting code
  for(var i = 1; i < arr.length; i++){
    var temp = arr[i]
    for(var j = i; j >= 0; j--){
      if(temp < arr[j]){
        var tampung = arr[j]
        arr[j] = temp
        arr[j+1] = tampung
      }
    }
    // console.log(arr)
  }
  return arr
}



function binary_search (search, array) {
  // Your searching code
  var min = 0;
  var max = array.length-1;
  var med = Math.floor((max - min)/2);
  for(var i = 0; i < array.length; i++){
    if(array[med] === search)return med
    if(search < array[med]){
      max = med
      med = Math.floor((max - med)/2)
    }else if(search > array[med]){
      min = med
      med += Math.floor((max - med)/2)
    }
  }
  return -1  
}  



// console.log(testArrayGenap)
var arrayGenapSorted = insertionSort(testArrayGenap)
var arrayGanjilSorted = insertionSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }

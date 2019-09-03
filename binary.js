'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  var len = arr.length
  for(var i=0; i<len; i++){
    var tampung = arr[i]
    for(var j=i-1; j>=0 && arr[j]>tampung; j-=1){
      arr[j+1] = arr[j]
    }
    arr[j+1] = tampung 
  }
  return arr
}

function binary_search (search, array) {
  var start = 0
  var end = array.length - 1
  while(start<=end){
    var tengah = Math.floor((start+end)/2)
    if(array[tengah]===search){
      return tengah
    }else if(array[tengah]<search){
      start = tengah +1
    }else{
      end = tengah - 1
    }
  }
  return -1;
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

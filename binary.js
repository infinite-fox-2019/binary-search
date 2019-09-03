'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i = 0; i<arr.length;i++){
    for (var j = i ; j>=0;j--){
      if (arr[j+1]<arr[j]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] =temp;
      }
    }
  }
  return arr
}

function binarySearch (search, array) {
  var high = array.length-1;
  var low = 0;
  while(low<=high){
    var mid = Math.floor((low+high)/2);
    if(array[mid]==search){
      return mid;
    } else if (search<array[mid]){
      high = mid-1;
    } else {
      low= mid+1;
    }
  }
  return -1;
}
console.log(ownSort(testArrayGenap))
console.log(ownSort(testArrayGanjil))
var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

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

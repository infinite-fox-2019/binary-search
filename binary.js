'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  
  for(var i = 1; i<arr.length; i++){
    var start = arr[i]
    for(var j = i-1; j>=0; j--){

      if(arr[j] > start){
        var temp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = temp
        
      }else{
        break
      } 
    }
  }
  // console.log(arr)

  return arr
}

function binary_search (search, array) {
  // Your searching code
  // console.log(array)
  var min = 0
  var max = Math.floor(array.length-1)
  
  while(min<=max){
    var mid = Math.floor((max+min)/2)

    if(array[mid] === search){
      return mid
    }
    else if(array[mid] < search){
      min = mid + 1
    } else {
      max = mid - 1
    }
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

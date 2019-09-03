'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [31, 3, 89, 53, 53, 85, 77, 21, 55]

//harus sort dg insertion

function ownSort(arr) {
 
  for (var i=0; i<arr.length; i++) {
    var temp = arr[i+1] 
    console.log(arr);
    for (var j=i; j>=0; j--) {
      if (temp < arr[j]) {
        arr[j+1] = arr[j]
        if (temp >= arr[j-1] || arr[j-1] == undefined){
          arr[j] = temp 
          break
        }
      }
      
    }
  }
  console.log(arr);
  
  return arr
}

function binary_search (search, array) {
  var L = 0
  var R = array.length-1
  
  for (var i=L; i<array.length; i++) {
    var m = Math.floor((R+L)/2)
    if (array[m] === search) {
      return m
      
    }
    else if (search > array[m]) {
        L = m
    }
    else if (search < array[m]) {
      R = m
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

'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(var i = 0 ; i<arr.length ; i++){
    var penampung = 0
    var j = i
    while(j>=0){
        if (arr[j+1] < arr[j]){
            penampung = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = penampung
            j--
        }
        else{
            break
        }
    }
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
    var i = 0
    var j = array.length
    for(var k = 0 ; k<array.length ; k++){
        var tengah = Math.floor((j+i)/2)
        if(search == array[tengah]){
            return tengah
        }
        else if(search < array[tengah]){
            j = tengah
        }
        else if(search > array[tengah]){
            i = tengah
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

console.log(arrayGenapSorted);
console.log(arrayGanjilSorted);
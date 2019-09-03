'use strict'
//SORT input array FROM lower TO upper
//STORE batasAwal with ZERO
//STORE batasAkhir with length of array
//FOR FROM zero TO length of array
//STORE tengah with batasAwal PLUS batasAkhir DIVIDED TWO
// IF input search EQUAL TO array index of tengah
//return tengah
//ELSE IF input search LESS THAN array index of tengah
//SET batasAkhir with tengah
//ELSE 
// SET batasAwal with tengah
//ENDIF
//ENDFOR
//RETURN Minus One

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(var i = 0; i<arr.length;i++){
    var cek = arr[i]
  for(var j = i-1; j > -1 && arr[j] > cek ; j--){
      arr[j+1] = arr[j]
    }
      arr[j+1] = cek
  }
  return arr
}

function binary_search(search, array) {
  // Your searching code
  var batasAwal = 0
  var batasAkhir = array.length
  for(var i = 0; i < array.length;i++){
    var tengah = Math.floor((batasAwal + batasAkhir)/2)
    if (search == array[tengah]){
      return tengah
    }
    else if (search < array[tengah]){ 
      batasAkhir = tengah
    } else {
      batasAwal = tengah
      
    }
  }
  return -1;  
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
//console.log(arrayGanjilSorted)

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

// PSEUDOCODE
// SORT array from the small to big
// STORE search to any value
// STORE nilaiRendah to 0
// STORE nilaiTertinggi to array of length -1
// WHILE nilaiRendah less than nilaiTertinggi
// STORE nilaiTengah nilaiRendah add nilaiTertinggi divide 2
// IF array to nilaiTengah equals to search
// DISPLAY nilaiTengah
// ELSE IF  array to nilaiTengah less than search
// nilaiRendah equals to nilaiTengah add 1
// ELSE nilaiTertinggi equals to nilaiTengah minus 1
// END IF
// return -1


'use strict'
var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]
function ownSort(arr) {
  // Your sorting code
  for(let i = 0; i < arr.length; i++){
    for(var j = i ; j >= 0; j--){
      if (arr[j] > arr[j+1]) {
        var swap = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = swap
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  // Your searching 
  console.log(array);
  // binary
  let nilaiRendah = 0
  let nilaiTertinggi = array.length -1
  while( nilaiRendah <= nilaiTertinggi ){
    let nilaiTengah = Math.floor((nilaiRendah + nilaiTertinggi)/2)
    if(array[nilaiTengah] == search){
      return nilaiTengah
    } else if (array[nilaiTengah] < search){
      nilaiRendah = nilaiTengah + 1
    } else {
      nilaiTertinggi = nilaiTengah - 1
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
'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

// [ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
// [ 3, 31, 89, 53, 53, 85, 77, 21, 55 ]

function ownSort(arr) {
  for(var i = 0; i<arr.length; i++){
    if(i !== 0){
      for(var j = i+1; j>=0; j--){
        if(arr[j] <= arr[j-1]){
          var swap = arr[j];
          arr[j] = arr[j-1];
          arr[j-1] = swap;
        }
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  var awal = 0;
  var akhir = array.length-1;

  while(!(awal == akhir || awal == tengah || akhir == tengah)){
  var tengah = Math.floor((akhir + awal) / 2);
    if(array[awal] == search || array[akhir] == search || array[tengah] == search){
      if(array[awal] == search){
        return awal;
      }
      else if(array[akhir] == search){
        return akhir;
      }
      return tengah;
    }
    if(array[tengah] > search){
      akhir = tengah - 1;
    }
    else{
      awal = tengah + 1;
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(32, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}

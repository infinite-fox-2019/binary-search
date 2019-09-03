'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
    for( var i = 0; i < arr.length; i++){
        var temp = arr[i]
        for( var j = i; j >= 0; j--){
            if(temp < arr[j]){
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
  return arr
}


// PSEUDOCODE BINARY SEARCH
// SET indexAwal with 0
// SET indexAkhir with array.length minus 1
// SET indexTengah with Math.floor(array.length/2)

// IF array[tengah] equals search
//     DISPLAY indexTengah
// ELSE IF search less than array[tengah]
//     SET indexAkhir equal indexTengah
//     SET tengah equal Math.floor((indexAwal + indexAkhir)/2)
//     RETURN function binary_search(search, array.slice(indexAwal,indexAkhir))
// ELSE IF search more than array[tengah]
//     SET indexAwal equal indexTengah
//     SET tengah equal Math.floor((indexAwal + indexAkhir)/2)
//     RETURN function binary_search(search, array.slice(indexAwal,indexAkhir))
// ELSE 
//     DISPLAY -1
// END IF


function binary_search (search, array) {
    // Your searching code
    var indexAwal = 0
    var indexAkhir = array.length-1
    var tengah = Math.floor(array.length/2)
    
    if(array[tengah] == search){
        return tengah
    } else if(search < array[tengah]){
        indexAkhir = tengah
        tengah = Math.floor((indexAwal + indexAkhir)/2)
        return binary_search(search, array.slice(indexAwal,indexAkhir))
    } else if (search > array[tengah]){
        indexAwal = tengah
        tengah = Math.floor((indexAwal + indexAkhir)/2)
        return binary_search(search, array.slice(indexAwal,indexAkhir))
    } else {
        return -1
    }
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

'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(let i=0; i<arr.length; i++){
    debugger;
    var tamp = arr[i]
    var j = i-1;
    while(j>=0 && arr[j]>tamp){ //Base case dimana ketika j>=0 dan arr[j] lebih besar dari tamp
      arr[j+1] = arr[j];
      j = j-1;
    }
    arr[j+1]=tamp;
  }
  return arr
}

console.log(ownSort([40, 18, 22, 32, 90, 10, 10, 22, 8]))
console.log(ownSort([3, 31, 89, 53, 53, 85, 77, 21, 55]))

function binary_search (search, array) {
  // Your searching code
  let sorting = ownSort(array);
  let startIndeks =  0;
  let endIndeks = sorting.length-1
  // console.log(middle)
  while(startIndeks<=endIndeks){
    let middle = Math.floor((startIndeks + endIndeks )/2);
    if(search === sorting[middle]){
      return middle
    }
    if(search > sorting[middle]){
      startIndeks = middle +1;
    }else if( search < sorting[middle]){
      endIndeks = middle -1;
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
console.log(binary_search(77, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}

/**
 * PSEUDOCODE
 * STORE 'sorting' with call function ownSort of 'array'
 * STORE 'startIndex' with value 0
 * STORE 'endIndex' with value length sorting min 1
 * 
 * WHILE 'startIndex' less equals to 'endIndex' THEN
 *  STORE 'middle' with Math.floor(('startIndex'+endIndex')/2)
 *  IF 'score' triple equals to 'sorting'[middle] THEN RETURN 'middle'
 *  ELSE IF 'score' > 'sorting'[middle] THEN 'startIndex' equals to 'middle' plus 1
 *  ELSE IF 'score' < 'sorting'[middle] THEN 'endIndex' equals to 'middle' min 1
 *  END IF
 * END WHILE
 * RETURN -1
 */
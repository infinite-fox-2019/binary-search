/*
PSEUDOCODE

SET FUNCTION binary_search with parameter(search, array)
  SET VARIABLE i as MATH.FLOOR(array length DIVIDED by 2)

  IF array[i] is EQUAL to search
    RETURN i

  ELSE IF array[i] is MORE than search
    WHILE array[i] is MORE than search
      MATH.FLOOR(i DIVIDED by 2)
      IF array[i] is EQUAL to search
        RETURN i
      ELSE IF i is EQUAL to 0
        RETURN -1
      END IF
    END WHILE

  ELSE IF array[i] is LESS than search
    WHILE array[i] is LESS than search
      ADD i by MATH.FLOOR(array length SUBTRACTED BY i) DIVIDED by 2
      IF array[i] is EQUAL to search
        RETURN i
      ELSE IF i is EQUAL to 0
        RETURN -1
      END IF
      RETURN -1
    END WHILE
  
  ELSE
    RETURN -1
  END IF
END FUNCTION

*/

'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
// INSERTION SORT
  // loop from the second element in the arr
  for (var i = 1; i < arr.length; i++) {
    // store the element i
    var temp = arr[i];
    // loop starting from the left of the element i
    for (var j = i-1; j >= 0; j--) {
      // if element j is bigger than temp, move element j to the right
      if (arr[j] > temp) {
        arr[j+1] = arr[j]
      } 
      else {
        // if not, element to the right of j becomes temp, break if
        arr[j+1] = temp
        break
      }
      // when j is 0, element[0] becomes temp
      if (j === 0 ) {
        arr[j] = temp
      } 
    }
  }
  return arr
}

function binary_search (search, array) {

  var i = Math.floor(array.length / 2);

  if (array[i] === search) {
    return i;
  }
  else if (array[i] > search) {
    while (array[i] > search) {
      i = Math.floor(i/2);
      if (array[i] === search) {
        return i;
      }
      else if (i === 0) {
        return -1;
      }
    }
    return -1;
  }
  else if (array[i] < search) {
    while (array[i] < search) {
      i = i + Math.floor((array.length - i) / 2);
      if (array[i] === search) {
        return i;
      }
      else if (i === 0) {
        return -1;
      }
    }
    return -1;
  }
  else {
    return -1;
  }
}

var arrayGenapSorted = ownSort(testArrayGenap) // [ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
var arrayGanjilSorted = ownSort(testArrayGanjil); // [ 3, 21, 31, 53, 53, 55, 77, 85, 89 ]

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
console.log(binary_search(40, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))
console.log(binary_search(85, arrayGanjilSorted))

module.exports = {
  binary_search
}

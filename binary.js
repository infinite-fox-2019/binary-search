// STORE result from function `ownSort` with params `array` in variable `sort`
// SET `lowest` with 0
// SET `highest` with length of `array` minus 1
//
// WHILE `lowest` LESS THAN OR EQUALS TO `highest` THEN
//   CALCULATE (`lowest PLUS `highest`) DIVIDED by 2 and put in variable `middle`
//   IF `sort` in index `middle` EQUALS TO `search` THEN
//     RETURN `middle`
//   ELSE IF `sort` in index `middle` GREATER THAN `search` THEN
//     SET `highest` with `middle` - 1`
//   ELSE
//     SET `lowest` with `middle` + 1`
//   ENDIF
// ENDWHILE
//
// RETURN -1

'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      const temp = arr[i + 1]
      arr[i + 1]  = arr[i]
      arr[i] = temp
      for (let j = i; j >= 0; j--) {
        if (arr[j] < arr[j - 1]) {
          const temp = arr[j - 1]
          arr[j - 1]  = arr[j]
          arr[j] = temp
        }
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  const sort = ownSort(array)
  let lowest = 0
  let highest = array.length - 1

  while (lowest <= highest) {
    const middle = Math.floor((lowest + highest) / 2)
    if (sort[middle] == search) {
      return middle
    } else if (sort[middle] > search) {
      highest = middle - 1
    } else {
      lowest = middle + 1
    }
  }

  return -1;
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

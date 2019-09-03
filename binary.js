'use strict'
/*
PSEUDUCODE :
Insertion Sort :
CREATE function ownSort with parameter arr 
  LOOP for i with 0, i Less Then length of arr, i plus 1
    if arr[index i plus 1] Less Then arr[index i] Then
      STORE temp
      SET temp with arr[index i + 1];
      arr[index i + 1] Equal to arr[index i];
      arr[index i] Equal to temp;
      LOOP for j with i, j Higher Then 0, j Minus 1
        if arr[index j] Less Then arr[index j - 1] Then
          STORE temp
          SET temp = arr[index j];
          arr[index j] = arr[index j - 1];
          arr[index j - 1] = temp
        END IF
      END LOOP
    END IF
  END LOOP
  return value from arr
END Function
Binary Search :
CREATE function binary_search with parameter search and array
  STORE titikAwal with 0
  STORE titikAkhir with length of array -1
  while titikAwal Less Then titikAkhir THEN
    STORE titikTengah with value use build in function Math.floor to get value from titikAwal + titikAkhir devide 2
    if array[index together with titikTengah] Equal to search Then
      return value titikTengah
    else if array[index together with titikTengah] Less Then search Then
      SET titikAwal with titikTengah plus 1
    else Then
      SET titikAkhir with titikTengah minus 1
    END IF
  END WHILE
  return -1
END Function
*/
var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var i = 0; i < arr.length; i++) {
    if (arr[i+1] < arr[i]) {
      var temp = arr[i+1];
      arr[i+1] = arr[i];
      arr[i] = temp;
      for (var j = i; j >= 0; j--) {
        if (arr[j] < arr[j-1]) {
          var temp = arr[j];
          arr[j] = arr[j-1];
          arr[j-1] = temp
        }
      }
    }
  }
  return arr;
}

function binary_search (search, array) {
  // Your searching code
 
  var titikAwal = 0;
  var titikAkhir = array.length-1;
  while (titikAwal <= titikAkhir) {
    var titikTengah = Math.floor((titikAwal + titikAkhir) / 2);
    if (array[titikTengah] === search) {
      return titikTengah;
    } else if (array[titikTengah] < search) {
      titikAwal = titikTengah + 1;
    } else {
      titikAkhir = titikTengah - 1;
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

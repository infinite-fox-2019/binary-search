'use strict'
/* 
PSEUDOCODE

DEF ownSort with parameter arr
  FOR i = 0 and i < length of array, i increment by 1, THEN
    FOR j = i and j>= 0, j decrease by 1, THEN
      IF value of arr with index of next number of j < value of arr with index of j, THEN
        SET temp with value of arr with index j
        SET value of arr with index j to value of arr with index of next number of j
        SET value of arr with index of next number of j with temp
      ENDIF
    ENDFOR
  ENDFOR
  RETURN arr as result

DEF binarySearch with parameter search and array
  SET high as number with value length of array minus 1
  SET low as number with value 0
  WHILE low less than or equal to high,THEN
    SET mid as number with value sum of low and high and divided by two
    mid will be rounded to smallest decimal place
    IF value of array with index of mid equal to search,THEN
      RETURN mid as result
    ELSE IF search < value of array with index of mid,THEN
      high equal mid - 1;
    ELSE
      low = mid + 1;
    ENDIF
  ENDLOOP
  RETURN -1 as result
*/

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
  for (var i = 0; i<arr.length;i++){
    for (var j = i ; j>=0;j--){
      if (arr[j+1]<arr[j]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] =temp;
      }
    }
  }
  return arr
}

function binarySearch (search, array) {
  var high = array.length-1;
  var low = 0;
  while(low<=high){
    var mid = Math.floor((low+high)/2);
    if(array[mid]==search){
      return mid;
    } else if (search<array[mid]){
      high = mid-1;
    } else {
      low= mid+1;
    }
  }
  return -1;
}
console.log(ownSort(testArrayGenap))
console.log(ownSort(testArrayGanjil))
var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(51, arrayGanjilSorted))

module.exports = {
  binarySearch
}

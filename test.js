var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]
// var testArrayGanjil = [3, 1, 8, 6, 5] t=

function ownSort(arr) {
      for(var i = 0; i < arr.length; i++) {
        var temp = arr[i+1];
        for(var j = i; j >= 0; j--) {
          if(temp < arr[j]) {
            arr[j+1] = arr[j];
            if(temp >= arr[j-1] || arr[j-1] === undefined) {
              arr[j] = temp;
              break;
            }
          }
        }
      }
      return arr;
    }

console.log(ownSort(testArrayGenap));
// console.log(ownSort(testArrayGanjil));
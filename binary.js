'use strict'
/*
PSEUDOCODE

  FUNCTION sorting with conditional 'arr'
    STORE 'i' with 0
    FOR 'i' less than length of 'arr'
      IF 'i' is not equals 0
        STORE 'j' with value 'i' PLUS 1
        FOR 'j' more than equals 0
          IF index 'j' in 'arr' less than equals index 'j' - 1 in 'arr'
            STORE 'swap' with index 'j' in 'arr'
            SET index 'j' in 'arr' equals to index 'j' - 1 in 'arr'
            SET index 'j' - 1 in 'arr' equals to 'swap'
          END IF
        END FOR
      END IF
    END FOR
  END FUNCTION

  FUNCTION search value in array with conditional 'search' and 'array'
    STORE 'awal' with 0
    STORE 'akhir' with 0
    WHILE 'awal' is not equals 'akhir' or 'awal' is not equals 'tengah' or 'akhir' is not equals 'tengah'
      STORE 'tengah' with rounding off of 'akhir' PLUS 'awal' and DIVIDED with 2
      IF index 'awal' or 'akhir' or 'tengah' in 'array' is equals to 'search'
        IF index 'awal' in 'array' is equals to 'search'
          RETURN 'awal'
        ELSE IF index 'akhir' in 'array' is equals to 'search'
          RETURN 'akhir'
        END IF

        RETURN tengah
      END IF

      IF index 'tengah' in 'array' is greater than 'search'
        SET 'akhir' to 'tengah' - 1
      ELSE
        SET 'awal' to 'tengah' + 1
      END IF
    RETURN -1
    END WHILE
  END FUNCTION
*/




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
var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

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

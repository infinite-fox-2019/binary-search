'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(var i = 0 ; i<arr.length-1 ; i++){
    var penampung = arr[i+1]
    for(var j = i ; j>=0; j--){
        if (penampung < arr[j]){
            arr[j+1] = arr[j]
            if (penampung >= arr[j-1] || arr[j-1] == undefined){
                arr[j] = penampung
                break
            }
        }        
    }
}
  return arr
}

function binary_search (search, array) {
  // Your searching code
    var i = 0
    var j = array.length
    for(var k = 0 ; k<array.length ; k++){
        var tengah = Math.floor((j+i)/2)
        if(search == array[tengah]){
            return tengah
        }
        else if(search < array[tengah]){
            j = tengah
        }
        else if(search > array[tengah]){
            i = tengah
        }
    }
    return -1
}

/*
PSEUDOCODE

    FUNCTION name 'binary_search' with parameters 'search', 'array'
        STORE 'i' with 0
        STORE 'j' with length of 'array'
        STORE 'k' with 0
        STORE 'tengah' with any number value
        FOR 'k' less than length of 'array' DO
            SET 'tengah' with rounding off (('j' PLUS 'i') DIV by 2)
            IF 'search' equals to 'array' index 'tengah' DO
                RETURN 'tengah'
            ELSE IF 'search' less than 'array' index 'tengah' DO
                SET 'j' with 'tengah'
            ELSE IF 'search' greater than 'array' index 'tengah' DO
                SET 'i' with 'tengah'
            END IF
        END FOR
        RETURN -1
    END FUNCTION
    
*/

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

console.log(arrayGenapSorted);
console.log(arrayGanjilSorted);

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
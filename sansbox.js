
var array = [ 22,40 , 8]
var temp = 8

function insertion(arr,pivot){
    
    for(var i = arr.length-2; i >= 0; i--){
        console.log(arr)
        console.log(pivot,arr[i],arr[i+1])
        if(pivot < arr[i]){
            arr[i+1] = arr[i]
        }else{
            arr[i+1] = pivot
        }
        console.log(arr)
    }
    if(arr.length === 2)arr[i+1] = pivot
    return arr

}
console.log(insertion(array,temp))

// var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
// var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

// function insertionSort(arr) {
//   // Your sorting code
//   for(var i = 1; i < 4; i++){
//     var temp = arr[i]
//     var insertionArr = arr.slice(0,i+1)
//     var sisaArray = arr.slice(i+1)
//     console.log(temp,insertionArr,sisaArray)
//     insertionArr = insertion(insertionArr,temp)
//     console.log(insertionArr.concat(sisaArray))
//     arr = insertionArr.concat(sisaArray)
//   }
// }

// // insertionSort(testArrayGenap)

// // console.log(insertion([40,18],18))
// console.log(insertion([18,22,40,32],1))
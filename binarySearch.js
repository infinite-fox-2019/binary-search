function binary_search(input, arr){
    var low= 0
    var high= arr.length-1
    
    debugger  
    while(low<=high){
        var tambah = low+high
        var mid= Math.floor(tambah/2)
        if(arr[mid]===input){
            return mid
        }else if(arr[mid]<input){
            low=mid+1
        }else{
            high=mid-1
            
        }
    }
    return -1


}
console.log(binary_search(3, [1,2,3,4,5]))
console.log(binary_search(35, [13,19,24,29,32,37,43]))
console.log(binary_search(135, [100,120,130,135,150,170]))
console.log(binary_search(150, [100,120,130,135,150,170]))

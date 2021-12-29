

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let current = arr[i]
        let j = i - 1
         while(j >= 0 && arr[j] > current ){
             arr[j + 1] = arr[j]
             j--
         }
         arr[j+1] = current
    }

}
let arr =[7,9,2,1,4,5,5,6]
console.log(insertionSort(arr))


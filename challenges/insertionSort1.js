
let arr1 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];

function insertionSort1(arr) {
    // Write your code here
    let currentIndex = arr.length - 1;
    let current = arr[arr.length - 1];
    let left;
    
    for(let i = arr.length - 1; i >= 0; i--){
        left = arr[i-1];
        if(current < left) {
            arr[i] = left;
            console.log(...arr)
            continue
        }
        if(current > left){
            arr[i] = current;
            console.log(...arr)
            break
        }
        if(i === 0){
            arr[i] = current;
            console.log(...arr)
        }

    }
}
console.log(insertionSort1(arr1))
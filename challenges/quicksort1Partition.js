/*
 * Complete the 'quickSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

let arr1 = [4, 5, 3, 7, 2];

function quickSort(arr) {
    // Write your code here
    let p = arr[0];
    let result;
    let left = [];
    let right = [];
    let equal = [];
    for(let i = 0; i < arr.length; i++){
        console.log(left)
        console.log(equal)
        console.log(right)
        if(arr[i] < p){
            left.push(arr[i])
            continue
        };
        if(arr[i] > p){
            right.push(arr[i])
            continue
        };
        if(arr[i] === p) equal.push(arr[i]);
    }
    result = [...left, ...equal, ...right]
    return result
}

console.log(quickSort(arr1))
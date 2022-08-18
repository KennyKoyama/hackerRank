/*
 * Complete the 'beautifulTriplets' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

let d1 = 1;
let arr1 = [2, 2, 3, 4, 5];
let d2 = 3;
let arr2 = [1, 2, 4, 5, 7, 8, 10];

function beautifulTriplets(d, arr) {
    // Write your code here
    let result = 0;
    for(const num of arr){
        if( arr.includes(num + d) && arr.includes(num + (2 * d))){
            result++
        }
    }
    console.log(teste)
    return result
}

console.log(beautifulTriplets(d1, arr1))
console.log('')
console.log(beautifulTriplets(d2, arr2))
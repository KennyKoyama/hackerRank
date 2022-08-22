/*
 * Complete the 'missingNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER_ARRAY brr
 */

let arr1 = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
let brr1 = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];

let arr2 = [11, 4, 11, 7, 13, 4, 12, 11, 10, 14];
let brr2 = [11, 4, 11, 7, 3, 7, 10, 13, 4, 8, 12, 11, 10, 14, 12];


function missingNumbers(arr, brr) {
    // Write your code here
    let result = [];
    // let sortedA = arr.sort();
    // let sortedB = brr.sort();
    let index;
    let setS;
    // console.log(sortedA)
    // console.log(sortedB)

    arr.forEach(num => {
        // console.log(num)
        index = brr.indexOf(num);
        if(index >= 0){
            // console.log(num)
            brr.splice(index,1)
        }        
    });
    setS = new Set(brr);
    result = Array.from(setS);
    return result.sort((a,b) => a - b)
}

console.log(missingNumbers(arr1, brr1))
console.log(missingNumbers(arr2, brr2))
console.log(missingNumbers(crr, drr))
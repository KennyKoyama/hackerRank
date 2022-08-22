/*
 * Complete the 'balancedSums' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 3];

let arr3 = [1];
let arr4 = [2];
let arr5 = [3];
let arr6 = [1, 2];
let arr7 = [1, 4, 1];
let arr8 = [1, 5, 1];
let arr9 = [234];
let arr10 = [20000];
let arr11 = [6, 23, 6];
let arr12 = [1];


function balancedSums(arr) {
    // Write your code here
    let result;
    let max = arr.length;
    let left = 0;
    let right = arr.reduce((total, current) => total+current,0);
    if(max <= 1) return 'YES';
    result = arr.some((value) => {
        left += value;
        
         console.log(left)
        console.log(right)
        if (left === right) return true;
        right -= value;
    })
    console.log(result)

    return result ? 'YES' : 'NO'
}

// console.log(balancedSums(arr1))
// console.log(balancedSums(arr2))
console.log(balancedSums(arr3))
console.log(balancedSums(arr4))
console.log(balancedSums(arr5))
console.log(balancedSums(arr6))
console.log(balancedSums(arr7))
console.log(balancedSums(arr8))
console.log(balancedSums(arr9))
console.log(balancedSums(arr10))
console.log(balancedSums(arr11))
console.log(balancedSums(arr12))


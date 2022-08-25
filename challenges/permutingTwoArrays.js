/*
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

let k1 = 10;
let A1 = [2, 1, 3];
let B1 = [7, 8, 9];

let k2 = 5;
let A2 = [1, 2, 2, 1];
let B2 = [3, 3, 3, 4];

function twoArrays(k, A, B) {
    // Write your code here
    let first = [...A].sort((a,b) => a - b);
    let second = [...B].sort((a,b) => b - a);
    let sum = first.map((nA, i) => nA + second[i]);
    console.log(sum)
    let check = sum.every((value) => value >= k);
    console.log(check)
    let result = check ? 'YES' : 'NO';


    console.log(result)
    return result
}

console.log(twoArrays(k1, A1, B1))
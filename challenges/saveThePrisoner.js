/*
 * Complete the 'saveThePrisoner' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. INTEGER s
 */

let n1 = 5;  // 2   Prisoners
let m1 = 2;  //     Sweets
let s1 = 1;  //     Chair number to start passing out treats at
let n2 = 5;  // 3
let m2 = 2;
let s2 = 2;

let n3 = 7;  // 6
let m3 = 19;
let s3 = 2;
let n4 = 3;  // 3
let m4 = 7;
let s4 = 3;

let n5 = 499999999;
let m5 = 999999998;
let s5 = 2;
let n6 = 999999999;
let m6 = 999999999;
let s6 = 1;

function saveThePrisoner(n, m, s) {
    // Write your code here
    return (((m % n) + (s - 1)) % n) || n;
}

console.log(saveThePrisoner(n1, m1, s1))
console.log('')
console.log(saveThePrisoner(n2, m2, s2))
console.log('')
console.log('')
console.log(saveThePrisoner(n3, m3, s3))
console.log('')
console.log(saveThePrisoner(n4, m4, s4))
console.log('')
console.log('')
console.log(saveThePrisoner(n5, m5, s5))
console.log('')
console.log(saveThePrisoner(n6, m6, s6))
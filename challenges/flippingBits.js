/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

let n1 = 2147483647; // 2147483648
let n2 = 1; // 4294967294
let n3 = 9; // 4294967295

function flippingBits(n) {
    // Write your code here
    let bits = n.toString(2).padStart(32, '0').split('');
    let reverse = bits.map((bit) => bit === '0' ? '1' : '0');
    let result = parseInt(reverse.join(''),2);

    return result
}

console.log(flippingBits(n1))
console.log(flippingBits(n2))
console.log(flippingBits(n3))


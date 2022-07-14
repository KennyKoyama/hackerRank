/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

let n1 = 9;
let ar1 = [10, 20, 20, 10, 10, 30, 50, 10, 20]; //3

function sockMerchant(n, ar) {
    // Write your code here
    let result = 0;
    let obj = {};

    for (const color of ar) {
        obj[color] = 0;
    }

    for (const check of ar){
        obj[check] = obj[check] + 1;
    }
    console.log(ar)
    console.log(obj)
    for (const [key, value] of Object.entries(obj)) {
        let current = Math.floor(value / 2);
        console.log('Color: ' + key  + '   Total: ' + value + '   Pairs: ' + current)
        result += current
    }
    console.log('Total pairs: ' + result)
    return result
}

console.log(sockMerchant(n1, ar1))
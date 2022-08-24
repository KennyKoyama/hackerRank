/*
 * Complete the 'maximizingXor' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER l
 *  2. INTEGER r
 */

let l1 = 10;
let r1 = 15;

function maximizingXor(l, r) {
    // Write your code here
    let result = 0;
    for(let n1 = l; n1 <= r; n1++){
        for(let n2 = n1; n2 <= r; n2++){
            result = (n1 ^ n2) > result ? (n1 ^ n2) : result;
        }
    }
    return result
}

console.log(maximizingXor(l1,r1))
/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

let n1 = 25; // 

function extraLongFactorials(n) {
    // Write your code here
    let result = 0;
    let bigN = BigInt(n);
    for (let i = (n - 1); i >= 1; i-- ) {
        console.log('Current:', bigN, 'x', i)
        bigN *= BigInt(i);
    }
    result = String(bigN).replace('n',);
    console.log(result)
    return result
}

console.log(extraLongFactorials(n1))
console.log('')
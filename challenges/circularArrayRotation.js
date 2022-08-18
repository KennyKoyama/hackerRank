/*
 * Complete the 'circularArrayRotation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k
 *  3. INTEGER_ARRAY queries
 */

// pop the last and unshift to first

let a1 = [1, 2, 3];
let k1 = 2;
let queries1 = [0, 1, 2]; // 2 3 1

let a2 = [3, 4, 5];
let k2 = 2;
let queries2 = [1,2];

function circularArrayRotation(a, k, queries) {
    // Write your code here
    let result = [];
    let lastValue = 0;
    
    for (let rotation = 1; rotation <= k; rotation++){
        lastValue = a[a.length - 1];
        a.pop()
        a.unshift(lastValue)
    }
    for (const query of queries){
        result.push(a[query])
    }
    return result
}

console.log(circularArrayRotation(a1, k1, queries1))
console.log('')
console.log(circularArrayRotation(a2, k2, queries2))
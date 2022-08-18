/*
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

let k1 = 3;
let s1 = [1, 7, 2, 4];
let k2 = 7;
let s2 = [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]
let k3 = 4;
let s3 = [19, 10, 12, 24, 25, 22];

function nonDivisibleSubset(k, s) {
    // Write your code here
    let result = 0;
    let remainder = new Array(k);
    for(let item = 0; item < k; item++){
        remainder[item] = 0;
    }
    for(const number of s) {
        console.log('Number:', number, ' Remainder:' ,number%k)
        remainder[number%k] += 1;
        console.log('RList: ', remainder, '\n')
    }
    console.log('before:', remainder[0])
    result = Math.min(remainder[0], 1)
    console.log('after:', remainder[0])
    console.log('Min:', result)
    for (let i = 1; i < (k / 2); i++){
        console.log('R1:', remainder[i], ' R2:', remainder[k-1], ' Max:' , Math.max(remainder[i], remainder[k-i]))
        console.log('Res:', result)
        if (i != k-i){
            console.log('i != k-1', i, (k-1))
            result += Math.max(remainder[i], remainder[k-i])
        }
    }
    if (k % 2 === 0){
        result += 1
    }

    return 'Result:' + result
}

console.log(nonDivisibleSubset(k1, s1))
console.log('\n')
console.log('\n')
console.log(nonDivisibleSubset(k2, s2))
console.log('\n')
console.log('\n')
console.log(nonDivisibleSubset(k3, s3))
/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

let n1 = 6; //array size
let k1 = 3; //divisor
let ar1 = [1, 3, 2, 6, 1, 2]; //array of integers  Output 5

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let result = 0;
    let current = 0;

    for(let i = 0; i < n; i++){
        console.log('Array: ' + ar + '.  ' + 'Divisor: ' + k)
        for(let j = 0; j < n; j++){

            if (j == i || j < i){
                continue
            }

            current = ar[i] + ar[j];
            console.log('i' + i + '+' + 'i' + j + ': ' + ar[i] + ' + ' + ar[j] + 
                        ' = ' + current + '  ' + (current % k === 0) + 
                        '  Result: ' + result);
            if (current % k === 0){
                result++
                //console.log('Result: ' + result)
            }

        }
        console.log(' ')
    }
    return result
}
console.log(divisibleSumPairs(n1, k1, ar1))
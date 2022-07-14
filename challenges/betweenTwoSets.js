/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

let a = [2,4];
let b = [16, 32, 96]

function getTotalX(a, b) {
    // Write your code here
    let lastA = a[a.length - 1];
    let firstB = b[0];
    let between = [];
    let current = 0;
    let result = 0;

    while (current < firstB){
        between.push(current + lastA);
        current += lastA;
    }
    
    for (const numberBetween of between){
        let countA = 0;
        let countB = 0;
        for (const numberA of a){
            if (numberBetween % numberA === 0){
                countA++;
            }
        }
        for (const numberB of b){
            if (numberB % numberBetween === 0){
                countB++;
            }
        }
        console.log('A: ' + countA + '   ' + 'size: ' + a.length + '  ' + (countA == a.length))
        console.log('B: ' + countB + '   ' + 'size: ' + b.length + '  ' + (countB == b.length))
        if ((countA + countB) == (a.length + b.length)){
            result++
        }
        console.log('Result: ' + result + '\n')
    }
    console.log(result)
    return result
}
getTotalX(a,b)
/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

let a1 = [4, 6, 5, 3, 3, 1]; //3
let a2 = [1, 1, 2, 2, 4, 4, 5, 5, 5]; //5 elements

function pickingNumbers(a) {
    // Write your code here
    let longest = 0;
    let arraySize = 0
    let cycle = 0;

    for (const match of a){
        cycle++
        arraySize = 0;
        console.log('')
        console.log('Cycle: ' + cycle)
        for (const number of a){
            let diff = number - match;
            console.log('  ' + 'Match: ' + match + '   ' + 'Number: ' + number + '   ' + 'Diff: ' + diff )
            if (diff <= 1 && diff >= 0){
                arraySize++
            }
        }
        console.log('Array:   ' + a)
        console.log('Matched: ' + arraySize)
        console.log('Longest: ' + longest)
        if (arraySize > longest){
            longest = arraySize
        }
    }
    return longest
}

console.log(pickingNumbers(a1))
console.log('')
console.log('--------------------------------------')
console.log('')
console.log(pickingNumbers(a2))
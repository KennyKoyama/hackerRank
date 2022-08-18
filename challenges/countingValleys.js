/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

let steps1 = 8; // Output 1
let path1 = 'UDDDUDUU';

function countingValleys(steps, path) {
    // Write your code here
    let result = 0;
    let seaLevel = 0;

    for(const step of path){
        if (step == 'U'){
            seaLevel += 1;
            console.log(seaLevel)
            if (seaLevel == 0){
                result += 1;
            }

        } else if (step == 'D'){
            seaLevel -= 1;
            console.log(seaLevel)

        }

    }
    console.log('Result: ' + result)
    return result
}
console.log(countingValleys(steps1, path1))
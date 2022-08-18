/*
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

let arr1 = [5, 4, 4, 2, 2, 8]; // 6 4 2 1

function cutTheSticks(arr) {
    // Write your code here
    let result = [];
    let current = arr.sort((a, b) => a - b);
    let min = current[0];
    let count = 0;
    let cycle = 0;
    console.log(current)
    while (cycle < arr.length) {
        cycle++
        count = 0;
        for (let j of current){
            console.log(j)
            if (j > 0){
                min = j;
                break
            }
        }

        console.log('min', min)
        for (let n = 0; n <= current.length; n++){
            if (current[n] > 0){
                current[n] -= min;
                count++
                console.log(current)
                console.log(count)
                console.log('')
            }
        }

        if (count > 0){
            result.push(count)
            console.log(current)
        }
    };
    return result
};

console.log(cutTheSticks(arr1))


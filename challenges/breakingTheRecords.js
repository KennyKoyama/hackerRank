/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

let scores1 = [10, 5, 20, 20, 4, 5, 2, 25, 1];

function breakingRecords(scores) {
    // Write your code here
    let min = scores[0];
    let max = scores[0];
    let minCount = 0;
    let maxCount = 0;
    let result = [];

    for (const score of scores) {
        if (score < min) {
            minCount++
            min = score;
        }
        if (score > max) {
            maxCount++
            max = score;
        }
    }
    result.push(maxCount, minCount)
    return result
}

console.log(breakingRecords(scores1))

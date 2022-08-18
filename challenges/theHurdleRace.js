/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

let k1 = 4;
let height1 = [1, 6, 3, 5, 2];
let k2 = 7;
let height2 = [2, 5, 4, 5, 2];
let k3 = 53;
let height3 = [86, 4, 83, 20, 6, 81, 58, 59, 53, 2, 54, 62, 25, 35, 79, 64, 27, 49, 32, 95, 100, 20, 58, 39, 92, 30, 67, 89, 58, 81, 100, 66, 73, 29, 75, 81, 70, 55, 18, 28, 7, 35, 98, 52, 30, 11, 69, 48, 84, 54, 13, 14, 15, 86, 34, 82, 92, 26, 8, 53, 62, 57, 50, 31, 61, 85, 88, 5, 80, 64, 90, 52, 47, 43, 40, 93, 69, 70, 16, 43, 7, 25, 99, 12, 63, 99, 71, 76, 55, 17, 90, 43, 27, 20, 42, 84, 39, 96, 75, 1]

function hurdleRace(k, height) {
    // Write your code here
    let sorted = height.sort(function(a, b) {
        return a - b;});
    let biggest = sorted[sorted.length - 1];
    let result = 0;
    console.log('Sorted: ' + sorted)
    if (biggest > k){
        console.log('Biggest: ' + biggest + '   ' + 'K: ' + k)
        result = biggest - k;
        console.log(result)
    }
    return result
}

console.log(hurdleRace(k1, height1))
console.log('')
console.log(hurdleRace(k3, height3))
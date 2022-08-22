/*
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

let arr1 = [3, -7, 0];

function minimumAbsoluteDifference(arr) {
    // Write your code here
    let sorted = arr.sort((a,b) => a - b);
    let min = 10000000000;
    let calc;

    sorted.forEach((num, i) => {
        calc = Math.abs(num - sorted[i+1]);
        min = calc < min ? calc : min;
    });
    console.log(min)
    return min
}

console.log(minimumAbsoluteDifference(arr1))
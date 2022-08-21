/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

let arr1 = [0, 1, 2, 4, 6, 5, 3];

function findMedian(arr) {
    // Write your code here
    arr.sort((a,b) => a - b)
    let result = arr[Math.floor(arr.length / 2)];
    console.log(result)
    return result
}

findMedian(arr1)
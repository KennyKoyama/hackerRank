/*
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

let n1 = 5;

function viralAdvertising(n) {
    // Write your code here
    let result = 0;
    let shared = 5;
    let liked = 0;
    for(let day = 1; day <= n; day++){
        liked = Math.floor(shared / 2);
        shared = liked * 3;
        result += liked;
    }
    return result
}

console.log(viralAdvertising(n1))

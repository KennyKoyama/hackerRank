/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */


let n1 = 124; // 3
let n2 = 111; // 3
let n3 =10; // 1

function findDigits(n) {
    // Write your code here
    let nString = String(n)
    let result = 0;
    for (const digit of nString) {
        if (n % digit == 0){
            result++
        }
    }
    return result
}

console.log(findDigits(n1))
console.log(findDigits(n2))
console.log(findDigits(n3))
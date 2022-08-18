/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

let s1 = 'SOSSPSSQSSOR'; // 3
let s2 = 'SOSSOT'; // 0

function marsExploration(s) {
    // Write your code here
    let result = 0;
    let j = 0;
    let sSize = s.length;
    let message = ['S', 'O', 'S'];
    let mSize = message.length;
    for (let i = 0; i < sSize; i++){
        j = ((i % mSize) + mSize) % mSize;
        if(message[j] !== s[i]) result++;
        console.log(message[j], s[i], message[j] !== s[i], result)
    }
    return result
}

console.log(marsExploration(s1))
// console.log(marsExploration(s2))
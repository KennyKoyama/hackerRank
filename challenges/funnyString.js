/*
 * Complete the 'funnyString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

let s1 = 'acxz'; // Funny
let s2 = 'bcxz'; // Not Funny
let s3 = 'lmnop'; // Funny

function funnyString(s) {
    // Write your code here
    let first = [];
    let second = [];
    let result;
    let size = s.length;
    let current;
    let rev;
    for(let i = 0; i < size - 1; i++){
        current = s.charCodeAt(i) - s.charCodeAt(i+1);
        console.log(current)
        first.push(Math.abs(current))
        rev = s.charCodeAt(i+1) - s.charCodeAt(i);
        console.log(rev)
        second.unshift(Math.abs(rev))
    }

    console.log(first)
    console.log(second)
    result = first.join('') === second.join('') ? 'Funny' : 'Not Funny';
    console.log(result)
    return result
}

console.log(funnyString(s1))
console.log(funnyString(s2))
console.log(funnyString(s3))
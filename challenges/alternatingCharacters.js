/*
 * Complete the 'alternatingCharacters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

let s1 = 'AAAA';
let s2 = 'BBBBB';
let s3 = 'ABABABAB';
let s4 = 'BABABA';
let s5 = 'AAABBB';

function alternatingCharacters(s) {
    // Write your code here
    let size = s.length;
    let result = 0;

    for(let i = 0; i < size; i++){
        if(s[i-1] === s[i]){
            result++
        }
    }
    console.log(result)
    return result
}

console.log(alternatingCharacters(s1))
console.log(alternatingCharacters(s2))
console.log(alternatingCharacters(s3))
console.log(alternatingCharacters(s4))
console.log(alternatingCharacters(s5))

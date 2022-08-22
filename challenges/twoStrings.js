/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

let s11 = 'hello';
let s12 = 'world';
let s21 = 'hi';
let s22 = 'world';


function twoStrings(s1, s2) {
    // Write your code here
    for(const letter of s1){
        if(s2.includes(letter)) return 'YES';
    }
    return 'NO'
}

console.log(twoStrings(s11,s12))
console.log(twoStrings(s21,s22))
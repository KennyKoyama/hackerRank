/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

let s1 = 'abcdefghijklmnopqrstuvwxyz';
let k1 = 3;
let s2 = "There's-a-starman-waiting-in-the-sky";
let k2 = 3;
let s3 = 'middle-Outz';
let k3 = 2;
let s4 = 'www.abc.xy';
let k4 = 87;

function caesarCipher(s, k) {
    // Write your code here
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const size = alphabet.length;
    let cIndex = ((k % size) + size) % size;
    let cipher = alphabet.substring(cIndex) + alphabet.substring(0,cIndex);
    console.log(cipher);
    let result = '';
    let isUpper = (elem) => /[A-Z]/.test(elem);
    let i;
    let current;
    for (const letter of s) {
        current = letter;
        i = alphabet.indexOf(letter.toLowerCase());
        isUpper(current)
        if(isUpper(current)) result += cipher[i].toUpperCase() || letter;
        if(!isUpper(current)) result += cipher[i] || letter;
        console.log(letter, current, i, cipher[i], isUpper(current))
        // result += cipher[i] || letter;
        // console.log(result)
    }
    return result
}

// console.log(caesarCipher(s1,k1))
// console.log(caesarCipher(s2,k2))
// console.log(caesarCipher(s3,k3))
console.log(caesarCipher(s4,k4))


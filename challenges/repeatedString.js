/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

let s1 = 'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm'; //  abcac
let n1 = 736778906400;
let s2 = 'aba';
let n2 = 10;

function repeatedString(s, n) {
    // Write your code here
    let result = 0;
    let size = s.length;
    let complete = Math.trunc(n / size);
    let rest = n % size;
    let count = 0;
    let xA = 0;
    console.log(complete)

    for (let i = 0; i < size; i++) {
        let letter = s[i];
        if (letter == 'a'){
            xA++
        }
    }
    result = xA * complete;
    for (let a = 0; a < rest; a++ ){
        if (s[a] == 'a'){
            result++
        }
    }

    return result
}

console.log(repeatedString(s1, n1))
console.log(repeatedString(s2, n2))
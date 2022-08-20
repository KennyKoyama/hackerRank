/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

let s1 = 'We promptly judged antique ivory buckles for the next prize';
let s2 = 'pangram';


function pangrams(s) {
    // Write your code here
    let result;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let sorted = new Set(s.toLowerCase().split('').sort());
    let str = [...sorted].join('').trim();
    console.log(alphabet)
    console.log(str)
    console.log(str === alphabet)
    result = str === alphabet ? 'pangram': 'not pangram';
    console.log(result)
    return result
}

pangrams(s1)
pangrams(s2)

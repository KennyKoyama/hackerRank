/*
 * Complete the 'stringConstruction' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

let s1 = 'abcd';
let s2 = 'abab';


function stringConstruction(s) {
    // Write your code here
    let setS = new Set(s.split(''))

    console.log(setS)
    console.log(setS.size)
    return setS.size
}

console.log(stringConstruction(s1))
// console.log(stringConstruction(s2))
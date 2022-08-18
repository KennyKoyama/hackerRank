/*
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

let s1 = 'hackerhappy';  // initial string
let t1 = 'hackerrank';  // desired string
let k1 = 9;  // number of operations that must be performed
let s2 = 'aba';  // initial string
let t2 = 'aba';  // desired string
let k2 = 7;  // number of operations that must be performed

function appendAndDelete(s, t, k) {
    // Write your code here
    let result = 0;
    let equals = 0;
    let firstString = s.split('');
    let secondString = t.split('');
    let smallestSize = s.length > t.length ? s.length : t.length;
    let sSize = s.length;
    let tSize = t.length;
    let diff = 0;
    console.log(firstString)
    if(s === t){
        result = ((sSize * 2) + 1) === k ? 'Yes' : 'No';
        return result
    }
    for (let i = 0; i < smallestSize; i++){
        console.log('')
        console.log('S:', firstString[i], ' T:', secondString[i], 'Equals:', equals)
        if (firstString[i] == secondString[i]){
            equals++
        } else {
            break
        }
    }
    console.log('Equals:', equals)
    diff = (sSize - equals) + (tSize - equals);
    if (k >= diff && (k % 2) == (diff % 2) || k >= (sSize + tSize)){
        return 'Yes'
    } else {
        return 'No'
    }
}

console.log(appendAndDelete(s1, t1, k1))
console.log('\n', '\n')
console.log(appendAndDelete(s2, t2, k2))
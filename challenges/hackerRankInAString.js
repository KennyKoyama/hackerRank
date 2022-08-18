/*
 * Complete the 'hackerrankInString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

let s1 = 'hereiamstackerrank'; // YES
let s2 = 'hackerworld'; // NO
let s3 = 'hhaacckkekraraannk'; // YES
let s4 = 'rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt'; // NO

function hackerrankInString(s) {
    // Write your code here
    console.log('')
    let sub = '';
    let hR = ['h', 'a', 'c', 'k', 'e', 'r', 'r', 'a', 'n', 'k'];
    let sSize = s.length;
    let hSize = hR.length;
    let j = 0;
    for(let i = 0; i < sSize; i++){
        console.log(hR[j], s[i], s[i] === hR[j], j)
        if(s[i] === hR[j]){
            sub += s[i];
            j++
        }
    }
    console.log(s)
    console.log(sub)
    if(hR.join('') === sub) return 'YES';
    return 'NO'
}

console.log(hackerrankInString(s1))
console.log(hackerrankInString(s2))
console.log(hackerrankInString(s3))
console.log(hackerrankInString(s4))
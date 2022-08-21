/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

let s1 = 'aaab';
let s2 = 'baa';
let s3 = 'aaa';

function palindromeIndex(s) {
    // Write your code here
    let splited = s.split('');
    let rev = [...splited].reverse();
    if(rev.join('') === s) return -1;
    let size = s.length;
    let r = size - 1;
    let half = Math.floor(size);
    let result;
    let sample1;
    let sampleR1;
    let sample2;
    let sampleR2;
    for(let i = 0; i < half; i++){
        console.log(splited[i], splited[r])
        if(splited[i] === splited[r]){
            r--
            continue
        };
        if(splited[i] !== splited[r]){
            console.log(i,r)
            sample1 = splited.slice(0,i).join('') + splited.slice(i+1).join('');
            sampleR1 = sample1.split('').reverse().join('');
            if(sample1 === sampleR1) return i;
            sample2 = splited.slice(0,r).join('') + splited.slice(r+1).join('');
            sampleR2 = sample2.split('').reverse().join('');
            if(sample2 === sampleR2) return r;
            console.log(sample1, sampleR1)
            console.log(sample2, sampleR2)
        }
        r--
    }
    return result
}

console.log(palindromeIndex(s1))
// console.log(palindromeIndex(s2))
// console.log(palindromeIndex(s3))
// console.log(palindromeIndex(s4))
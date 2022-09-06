/*
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

let s1 = 'beabeefeab';
let s2 = 'abaacdabd';
let s3 = 'asdcbsdcagfsdbgdfanfghbsfdab';
let s4 = 'asvkugfiugsalddlasguifgukvsa';
let s5 = 'cwomzxmuelmangtosqkgfdqvkzdnxerhravxndvomhbokqmvsfcaddgxgwtpgpqrmeoxvkkjunkbjeyteccpugbkvhljxsshpoymkryydtmfhaogepvbwmypeiqumcibjskmsrpllgbvc';

function alternate(s) {
    // Write your code here
    let result = 0;
    let splited = s.split('');
    console.log(splited)
    let lettersSet = [...new Set(splited)];
    console.log(lettersSet)
    let choices = [];
    lettersSet.forEach((value,index) => {
        for(let i = index + 1, setSize = lettersSet.length; i < setSize; i++){
            choices.push([value, lettersSet[i]])
        }
    })
    console.log(choices)
    let hasSeq = (arr) => /(\w)\1/.test(arr);
    let possibilities = [];
    choices.forEach((choice) => {
        let possible = splited.filter((letter) => choice.includes(letter));
        if(!hasSeq([...possible].join(''))){
            possibilities.push(possible);
            result = result > possible.length ? result : possible.length;
        };
    })
    console.log(possibilities)
    console.log(result)
    return result
}

console.log(alternate(s1))
// console.log('\n')
// console.log(alternate(s2))
// console.log('\n')
// console.log(alternate(s3))
// console.log('\n')
// console.log(alternate(s4))
// console.log('\n')
// console.log(alternate(s5))
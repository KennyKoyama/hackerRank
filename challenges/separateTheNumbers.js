/*
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

let s1 = '1234';
let s2 = '91011';
let s3 = '99100';
let s4 = '101103';
let s5 = '010203';
let s6 = '13';
let s7 = '1';

let s8 = '99910001001';
let s9 = '7891011';
let s10 = '9899100';
let s11 = '999100010001';

let s12 = '90071992547409929007199254740993';
let s13 = '45035996273704964503599627370497';
let s14 = '22517998136852482251799813685249';
let s15 = '11258999068426241125899906842625';
let s16 = '562949953421312562949953421313';
let s17 = '90071992547409928007199254740993';
let s18 = '45035996273704963503599627370497';
let s19 = '22517998136852481251799813685249';
let s20 = '11258999068426240125899906842625';
let s21 = '562949953421312462949953421313';

function separateNumbers(s) {
    // Write your code here
    let result = '';
    let j = 1;
    let current;
    let expected;
    let half = Math.round(s.length/2);
    for(let i = 1, sSize = s.length; i <= half; i++){
        current = s.slice(0,i);
        result = current;
        expected = BigInt(current) + 1n;
        result += expected;

        while(result.length < sSize){
            expected += 1n;
            result += expected;
        }
        if (result === s){
            console.log('YES' + ' ' + current)
            return
        }
        if(j > (sSize/2)) break;
    }
    console.log('NO')
    return
}
// console.log(separateNumbers(s1))
// console.log(separateNumbers(s2))
// console.log(separateNumbers(s3))
// console.log(separateNumbers(s4))
// console.log(separateNumbers(s5))
// console.log(separateNumbers(s6))
// console.log(separateNumbers(s7))

// console.log(separateNumbers(s8))
// console.log(separateNumbers(s9))
// console.log(separateNumbers(s10))
// console.log(separateNumbers(s11))

console.log(separateNumbers(s12))
console.log(separateNumbers(s13))
console.log(separateNumbers(s14))
console.log(separateNumbers(s15))
console.log(separateNumbers(s16))
console.log(separateNumbers(s17))
console.log(separateNumbers(s18))
console.log(separateNumbers(s19))
console.log(separateNumbers(s20))
console.log(separateNumbers(s21))

/*
   '9 007 199 254 740 992
    9 007 199 254 740 993'

YES 9 007 199 254 740 992
YES 4503599627370496
YES 2251799813685248
YES 1125899906842624
YES 562949953421312
NO
NO
NO
NO
NO
*/
/*
 * Complete the 'theLoveLetterMystery' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
//query = 'abc'
let s1 = 'abc'; // 2
let s2 = 'abcba'; // 0
let s3 = 'abcd'; // 4
let s4 = 'cba'; // 2

function theLoveLetterMystery(s) {
    // Write your code here
    let alphabet = ['a','b','c','d','e','f','g',
                    'h','i','j','k','l','m','n',
                    'o','p','q','r','s','t','u',
                    'v','w','x','y','z'];

    let result = 0;
    let arr = s.split('');
    let rev = [...arr].reverse().join('');
    if(s === rev) return 0;
    console.log(rev)
    let size = arr.length;
    let firstHalf = Math.trunc(size/2);
    let secondHalf = Math.round(size/2);
    console.log(firstHalf)
    let first = arr.slice(0,firstHalf);
    let second = arr.slice(secondHalf).reverse();
    let diff;
      console.log(arr)
    console.log(rev)
    console.log(first)
    console.log(second)
    for(let i = 0; i < firstHalf; i++){
        diff = alphabet.indexOf(second[i]) - alphabet.indexOf(first[i])
        console.log(diff)
        result += Math.abs(diff);
    }
    console.log(result)
    return result
}

console.log(theLoveLetterMystery(s1))
console.log(theLoveLetterMystery(s2))
console.log(theLoveLetterMystery(s3))
console.log(theLoveLetterMystery(s4))
/*
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

let s1 = 'aaabbb';
let s2 = 'ab';
let s3 = 'abc';
let s4 = 'mnop';
let s5 = 'xyyx';
let s6 = 'xaxbbbxx';

let s7 = 'asdfjoieufoa';
let s8 = 'fdhlvosfpafhalll';
let s9 = 'mvdalvkiopaufl';

let s10 = 'hhpddlnnsjfoyxpciioigvjqzfbpllssuj';
let s11 = 'xulkowreuowzxgnhmiqekxhzistdocbnyozmnqthhpievvlj';
let s12 = 'dnqaurlplofnrtmh';
let s13 = 'aujteqimwfkjoqodgqaxbrkrwykpmuimqtgulojjwtukjiqrasqejbvfbixnchzsahpnyayutsgecwvcqngzoehrmeeqlgknnb';
let s14 = 'lbafwuoawkxydlfcbjjtxpzpchzrvbtievqbpedlqbktorypcjkzzkodrpvosqzxmpad';
let s15 = 'drngbjuuhmwqwxrinxccsqxkpwygwcdbtriwaesjsobrntzaqbe';
let s16 = 'ubulzt';
let s17 = 'vxxzsqjqsnibgydzlyynqcrayvwjurfsqfrivayopgrxewwruvemzy';
let s18 = 'xtnipeqhxvafqaggqoanvwkmthtfirwhmjrbphlmeluvoa';
let s19 = 'gqdvlchavotcykafyjzbbgmnlajiqlnwctrnvznspiwquxxsiwuldizqkkaawpyyisnftdzklwagv';

function anagram(s){
    // Write your code here
    let result = 0;
    let size = s.length;
    if(size % 2 !== 0) return -1;
    let first = s.split('').slice(0,(size/2)).sort();
    let second = s.split('').slice((size/2)).sort();
    let count = {};
     console.log(first)
    console.log(second)
    first.forEach((letter) => {count[letter] = count[letter] + 1 || 1});
    console.log(count)
    second.forEach(letter => {
        if(Object.hasOwn(count, letter)) count[letter]--;
    })
    console.log(count)
    result = Object.values(count).filter(value => value > 0).reduce((sum,current) => sum + current,0)
    console.log(result)
    return result
}

// console.log(anagram(s1))
// console.log(anagram(s2))
// console.log(anagram(s3))
// console.log(anagram(s4))
console.log(anagram(s5))
// console.log(anagram(s6))
// console.log(anagram(s7))
// console.log(anagram(s8))
// console.log(anagram(s9))
// console.log(anagram(s10)) // 10
// console.log(anagram(s11)) // 13
// console.log(anagram(s12)) //  5 
// console.log(anagram(s13)) // 26
// console.log(anagram(s14)) // 15
// console.log(anagram(s15)) // -1
// console.log(anagram(s16)) //  3 
// console.log(anagram(s17)) // 13
// console.log(anagram(s18)) // 13
// console.log(anagram(s19)) // -1
/*
 * Complete the 'biggerIsGreater' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING w as parameter.
 */

let w1 = 'abcd';
let w2 = 'dkhc';
let w3 = 'abdc';
let w4 = 'azzyyxxxxxwwwwwvvvvutttttsssssrrrrqqqppponnnnmmmmllkkjjjjiiggffffffeedddddbbbbbba';


function biggerIsGreater(w) {
    // Write your code here
    let result;
    let word = w;
    let firstPart = '';
    let secondPart = '';
    let toSwap = '';
    let smallest = '';
    let highest = word.split('').sort().reverse().join('');
    let letterA = '';
    let letterB = '';
    let compare;
    let size = word.length;
    let count = 0;
    let current;
    
    // Check if has answer
    if (highest <= w){
        return 'no answer'
    }
    
    // Find where to split and the letter to swap    
    for (let i = size - 1; i > 0; i--){
        count++
        letterA = word[i - 1];
        letterB = word[i];
        compare = letterA < letterB;
        if (compare === true){
            firstPart = word.substring(0, i - 1);
            toSwap = letterA;
            secondPart = word.substring(i);
            break
        }
    }
    
    // If swap on the last letter
    if (count === 1){
        result = firstPart + secondPart + toSwap;
        return result

    }

    smallest = 'z';
    for (let j = 0; j < secondPart.length; j++){
        current = secondPart.charAt(j);
        smallest = current < smallest && current > toSwap ? current : smallest;
    }
    secondPart = secondPart.replace(smallest, toSwap).split('').sort().join('');
    result = firstPart + smallest + secondPart
    return result
}
console.log('1:')
console.log(biggerIsGreater(w1))
console.log('')
console.log('2:')
console.log(biggerIsGreater(w2))
console.log('')
console.log('3:')
console.log(biggerIsGreater(w3))
console.log('')
console.log('4:')
// console.log(biggerIsGreater(w4))
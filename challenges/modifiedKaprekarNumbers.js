/*
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */

let p1 = 1;   // Lower Limit
let q1 = 100; // Upper Limit
let p2 = 100;   // Lower Limit
let q2 = 300; // Upper Limit
let p3 = 400;   // Lower Limit
let q3 = 700; // Upper Limit
let p4 = 1000;   // Lower Limit
let q4 = 10000; // Upper Limit

function kaprekarNumbers(p, q) {
    // Write your code here
    let result = '';
    let slice1;
    let slice2;
    let half;
    for (let num = p; num <= q; num++) {
        if (num === 1){
            result = '1';
            continue
        }
        if (num === 10){
            continue
        }        
        if (num === q && result === ''){
            console.log('INVALID RANGE')
            return 'INVALID RANGE'
        }
        let square = (num**2);
        let squareSize = square.toString().length;
        if (squareSize > 1){
            if (squareSize % 2 !== 0){
                squareSize--
            }
            half = squareSize / 2;
            slice1 = square.toString().slice(0,half);
            slice2 = square.toString().slice(half);
        }
        let current = parseInt(slice1) + parseInt(slice2);
        if (current == num && result === ''){
            result += num;
            continue
        }
        if (current == num && result !== ''){
            result += ' ' + num;
        }
    }
    return result
}

console.log(kaprekarNumbers(p1,q1))
console.log('\n')
console.log(kaprekarNumbers(p2,q2))
console.log('\n')
console.log(kaprekarNumbers(p3,q3))
console.log('\n')
console.log(kaprekarNumbers(p4,q4))

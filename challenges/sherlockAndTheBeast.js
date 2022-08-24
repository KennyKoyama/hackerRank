/*
 * Complete the 'decentNumber' function below.

 * A Decent Number has the following properties:
 *  Its digits can only be 3's and/or 5's.
 *  The number of 3's it contains is divisible by 5.
 *  The number of 5's it contains is divisible by 3.
 *  It is the largest such number for its length.
 * 
 * The function accepts INTEGER n as parameter.
 */

let n1 = 15;
let n2 = 3;
let n3 = 5;
let n4 = 11;

function decentNumber(n) {
    // Write your code here
    const d3 = '555';
    const d5 = '33333';
    let divBy3 = (num) => num % 3 === 0;
    let divBy5 = (num) => num % 5 === 0;
    let test = n;
    let count = 0;

    while(test % 3 !==0 && test >= 0){
        count++
        test -= 5;
    }
    if(test < 0){
        console.log(-1)
        return -1;
    }
    if(test + (count * 5) === n){
        console.log(d3.repeat(test/3) + d5.repeat(count))
    return d3.repeat(test/3) + d5.repeat(count)
    }
}

console.log(decentNumber(n1))
// console.log(decentNumber(n2))
// console.log(decentNumber(n3))
// console.log(decentNumber(n4))
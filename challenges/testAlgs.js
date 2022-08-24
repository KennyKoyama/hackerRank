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

let n1 = 4;
let n2 = 3;
let n3 = 5;
let n4 = 11;

function decentNumber(n) {
    // Write your code here
    let result = '';
    const min = 3;
    const d3 = '555';
    const d5 = '33333';
    let n3 = Number.isInteger(n/3) ? n/3 : n%3;
    let n5 = Number.isInteger(n/5) ? n/5 : n%5;
    let divBy3 = (num) => num % 3 === 0;
    let divBy5 = (num) => num % 5 === 0;
    let equalN = (num) => num === n;
    let test = n;
    let count = 0;

    console.log((n%3))
    console.log((n%5))
    console.log(3 + (Math.floor(n/5) * 5))
    console.log(5 + (Math.floor(n/3) * 3))
    console.log((n/3))
    console.log((n/5))
    console.log(n-3)
    console.log(n-5)
    console.log((n-3)/5)
    console.log((n-5)%3)
    console.log((((n-5)/3) * 3) + 5)
    console.log((n - (n%3)) / 3, (n - (n%5)) / 5)
    console.log(((n%3) * 3) + (Math.floor(n/5) * 5))
    console.log((Math.floor(n/3) * 3) + ((n%5) * 5))
    console.log((n-10)/3)

    while(test % 3 !==0 && test >= 0){
        count++
        test -= 5;
    }
    if(test < 0){
        console.log(-1)
        return -1;
    }
    if(test + (count * 5) === n){
        console.log(count,test)
        console.log(d3.repeat(test/3) + d5.repeat(count))
    return d3.repeat(test/3) + d5.repeat(count)
    }
}

// console.log(decentNumber(n1))
// console.log(decentNumber(n2))
// console.log(decentNumber(n3))
// console.log(decentNumber(n4))
// console.log(decentNumber(2194))
// console.log(decentNumber(12002))
// console.log(decentNumber(21965))
// console.log(decentNumber(55140))
// console.log(decentNumber(57634))

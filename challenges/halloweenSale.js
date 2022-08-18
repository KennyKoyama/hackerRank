/*
 * Complete the 'howManyGames' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER p price
 *  2. INTEGER d discount
 *  3. INTEGER m minimum
 *  4. INTEGER s max
 */

let p1 = 20;
let d1 = 3;
let m1 = 6;
let s1 = 70;
let p2 = 20;
let d2 = 3;
let m2 = 6;
let s2 = 85;
let p3 = 100;
let d3 = 19;
let m3 = 1;
let s3 = 180;

function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let result = 0;
    let price = p;
    let discount = d;
    let minimum = m;
    let balance = s;
    if (price > balance){
        return 0
    }
    while (balance >= m && balance >= price){
        console.log('balance:', balance, 'p1:', p)
        balance -= price;
        result++
        price = price > minimum && (price - discount) >= minimum ? price - discount : minimum;
    }
    console.log(result)
    return result
}

console.log(howManyGames(p1,d1,m1,s1))
console.log('\n')
console.log(howManyGames(p2,d2,m2,s2))
console.log('\n')
console.log(howManyGames(p3,d3,m3,s3))
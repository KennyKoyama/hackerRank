/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

let i1 = 20; //2 starting day number
let j1 = 23; //2 ending day number
let k1 = 6; //2 divisor

function beautifulDays(i, j, k) {
    // Write your code here
    let result = 0;
    let range = (j - i) + 1;
    let reverse = 0;

    for(let day = 0; day < range; day++){
        let current = i + day;
        reverse = Number(String(current).split('').reverse().join(''));
        if ((current - reverse) % k === 0){
            result += 1
        }
        console.log('current: ' + current + '   ' + 'Reverse: ' + reverse + '   ' + 'Beautiful: ' + ((current - reverse) % k === 0))
    }

    console.log(result)
    return result
}

console.log(beautifulDays(i1, j1, k1))
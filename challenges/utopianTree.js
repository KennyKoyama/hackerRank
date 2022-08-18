/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

let n1 = 0; //1
let n2 = 1; //2
let n3 = 4; //7
let n4 = 5;

function utopianTree(n) {
    // Write your code here
    let result = 0;
    for(let cycle = 0; cycle <= n; cycle++){
        if (cycle === 0 || cycle % 2 === 0){
            console.log('grow 1m: ' + result)
            result += 1
            continue
        }
        if(cycle % 2 !== 0){
            result *= 2;
            console.log('doubles ' + result)
        }
    }
    return result
}

console.log(utopianTree(n1))
console.log(utopianTree(n2))
console.log(utopianTree(n3))
//console.log(utopianTree(n4))
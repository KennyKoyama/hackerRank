/*
 * Complete the 'permutationEquation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY p as parameter.
 */

let p1 = [2, 3, 1];  // 2 3 1
let p2 = [4, 3, 5, 1, 2]; // 1 3 5 4 2
let p3 = [5, 2, 1, 3, 4]; // 4 2 5 1 3

function permutationEquation(p) {
    // Write your code here
    let result = [];
    let firstP = 0;
    let secondP = 0;
    let pSize = p.length;
    for (let i = 1; i <= pSize ; i++){
        firstP = p.indexOf(i) + 1;
        secondP = p.indexOf(firstP) + 1;
        result.push(secondP)
        console.log('1: ' + firstP)
    }
    return result
}

console.log(permutationEquation(p1))
console.log('')
console.log(permutationEquation(p2))
console.log('')
console.log(permutationEquation(p3))
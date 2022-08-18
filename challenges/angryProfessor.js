/*
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */

let k1 = 3;
let a1 = [-1, -3, 4, 2];
let k2 = 2
let a2 = [0, -1, 2, 1];

function angryProfessor(k, a) {
    // Write your code here
    let result;
    let arrived = 0;
    for(const student of a){
        if(student <= 0){
            arrived += 1;
        }
    }
    result = arrived < k ? 'YES' : 'NO';
    return result
}

console.log(angryProfessor(k1, a1))
console.log(angryProfessor(k2, a2))
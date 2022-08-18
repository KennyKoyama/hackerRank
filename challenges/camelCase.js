/*
 * Complete the 'camelcase' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

let s1 = 'saveChangesInTheEditor';

function camelcase(s) {
    // Write your code here
    let result = 1;
    let isUpper =(letter) => /[A-Z]/.test(letter);
    for(const elem of s){
        if(isUpper(elem)) result++;
    }
    return result
}

console.log(camelcase(s1))
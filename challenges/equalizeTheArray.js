/*
 * Complete the 'equalizeArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

let arr1 = [1, 2, 2, 3];
let arr2 =[3, 3, 2, 1, 3];

function equalizeArray(arr) {
    // Write your code here
    let deletions = 0;
    let equals = 0;
    let size = arr.length;
    let current = 0;
    let result = size;

    for (let i = 0; i < size; i++){
        current = arr[i];
        equals = 0;
        for (const number of arr) {
            if (number === current){
                equals++
            }
        }
        deletions = size - equals;
        if (deletions < result){
            result = deletions
        }
    }
    return result
}

console.log(equalizeArray(arr1))
console.log(equalizeArray(arr2))
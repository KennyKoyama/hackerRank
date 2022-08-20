/*
 * Complete the 'countSort' function below.
 *
 * The function accepts 2D_STRING_ARRAY arr as parameter.
 */

let arr1 = [
    [0, 'ab'],
    [6, 'cd'],
    [0, 'ef'],
    [6, 'gh'],
    [4, 'ij'],
    [0, 'ab'],
    [6, 'cd'],
    [0, 'ef'],
    [6, 'gh'],
    [0, 'ij'],
    [4, 'that'],
    [3, 'be'],
    [0, 'to'],
    [1, 'be'],
    [5, 'question'],
    [1, 'or'],
    [2, 'not'],
    [4, 'is'],
    [2, 'to'],
    [4, 'the']];

/* sorted = [['-', '-', '-', '-', '-', 'to'],
             ['be', 'or'],
             ['not', 'to'],
             ['be'],
             ['-', 'that', 'is', 'the'],
             ['question'],
             ['-', '-', '-', '-'],
             [],
             [],
             [],
             []]
*/
function countSort(arr) {
    // Write your code here
    let size = arr.length;
    let half = size / 2;
    let result = '';
    let sub = [];
    let sorted = [];
    let max = 0;

    // Convert first half to dash
    for(let i = 0; i < size; i++){
        if(i < half)arr[i][1] = '-';
        sub.push(arr[i]);
        console.log(arr[i])
        max = max > arr[i][0] ? max : arr[i][0];
    }
    console.log(sub)
    console.log(max)
    for(let count = 0; count <= max; count++){
        sorted.push([])
    }

    console.log(sorted)
    // Sort elements
    for(let j = 0; j < size; j++){
        sorted[sub[j][0]].push(sub[j][1])
    }
    console.log(sorted)
    console.log(sub)
    
    result = sorted.flat().join(' ');
    console.log(result)
    return result
}

console.log(countSort(arr1))

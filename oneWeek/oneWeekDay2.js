// Day 2
// Exercício 1:
var teste3 = [1,2,1];
function lonelyinteger(a) {
    let count = 0;
    let inspector;
    let sample;
    let lonely = [];
    for(let i = 0; i < a.length; i++){
        inspector = teste3[i];
        count = 0;
        for (let j = 0; j < a.length; j++){
            sample = teste3[j];
            console.log('Comparador: ' + inspector + '   ' +
                        'Comparado: ' + sample + '   ' +
                        'Count: ' + (inspector == sample));
            if (sample === inspector){
                count += 1;
            }
        }
        if (count < 2){
            lonely.push(inspector)
            console.log('Lonelys: ' + lonely)
        } else {
            console.log('Lonelys: ' + lonely)
        }
    }
    return lonely
}
console.log('DAY 2 - Exercício 1:')
lonelyinteger(teste3)
console.log('')


//Exercício 2:
// First line contains a number that represents
// the row and columns. arr[r][c]
//                   R  C        R  C        R  C
// Diagonal 1  = arr[1][0] + arr[2][1] + arr[3][2].
// Diagonal 2  = arr[1][2] + arr[2][1] + arr[3][0].
//
// let l = arr.length
// let i = -1
// let total = 0
//
// Alternative Method 1:
// while(i++, l--) total += arr[i][i] - arr[l][i]
//
// Alternative Method 2:
// total = arr.reduce((t, c, i) => t + c[i] - c[l-1-i], 0) 
//
// return Math.abs(total)

var teste4 = [[4],
              [11,2,4,10],
              [4,5,6,10],
              [10,8,-12,10],
            [10,10,10,10]]


//    console.log('Base: ' + teste4[0] + '\n' + 'R1: ' + teste4[1] + '\n' + 'R2: ' + teste4[2] + '\n' + 'R3: ' + teste4[3])
function diagonalDifference(arr3) {
    // Write your code here
    let diag1 = 0;
    let diag2 = 0;
    let result = 0;
    let base = arr3[0][0];
    console.log(base)
    var col1 = 0;
    var col2 = 0;

    for (let row = 1; row <= base; row++){
        col1 = row - 1;
        col2 = base - row;
        console.log('Diag1: ' + 'Row: ' + row + '  ' + 'Col: ' + col1 + '  ' + 'Val: ' + arr3[row][col1] + '  ' + 'Total: ' + (diag1 + arr3[row][col1]) + '\n' +
                    'Diag2: ' + 'Row: ' + row + '  ' + 'Col: ' + (col2 + 1) + '  ' + 'Val: ' + arr3[row][col2] + '  ' + 'Total: ' + (diag2 + arr3[row][col2])+ '\n')
        diag1 = diag1 + arr3[row][col1];
        diag2 = diag2 + arr3[row][col2];
    }
    if (diag1 > diag2){
        result = diag1 - diag2;
    } else {
        result = diag2 - diag1;
    }
    console.log('Log: ' + Math.abs(result))
    return Math.abs(result);
}
console.log('DAY2 - Exercício 2:')
diagonalDifference(teste4)
//console.log('Log2: ' + diagonalDifference(teste4))
console.log('')



// Exercício 3
var cSTest = [63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70, 33];
function countingSort(arr) {
    // Write your code here
    let sorted = arr.sort((a, b) => a - b);
    let result = [];
    let count = 0;
// Ascending sorting numbers:
    function compareNumbers(a, b) {
//        console.log('a: ' + a + '   ' + 'b: ' + b + '   ' + 'a-b: ' + (a-b))
        return a - b;   
    }
    sorted.push(arr.sort(compareNumbers));
//    console.log('Sorted: ' + sorted)

// Create Array of zeros:
    while (result.length < 100) {
        result.push(0)
    }

// Count itens and return the count at the right index:
    for (let i = 0; i < 100; i++){
        count = 0;
        for (const sample of arr){
            if (sample === i){
                count += 1;
            }
            result.splice(i, 1, count);
        }
    }
    console.log(sorted)
    console.log(result);
    return result
}
console.log('DAY2 - Exercício 3:');
countingSort(cSTest)
console.log('')
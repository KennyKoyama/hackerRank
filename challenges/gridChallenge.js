/*
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

let grid1 = ['abc',
             'ade',
             'efg'];

let grid2 = ['ebacd',
             'fghij',
             'olmkn',
             'trpqs',
             'xywuv'];

let grid3 = ['abc',
             'lmp',
             'qrt'];
             
let grid4 = ['mpxz',
             'abcd',
             'wlmf'];
             
let grid5 = ['abc',
             'hjk',
             'mpq',
             'rtv'];

function gridChallenge(grid) {
    // Write your code here
    let result;
    // let size = grid.length;
    let sortedRow = [];
    let sortedCol = [];
    let col = [];
    let isSorted = (values) => values.every((letter,i,arr) => {
        console.log(letter,(arr[i+1] || 'z'))
        return letter <= (arr[i+1] || 'z')
    }); 
    console.log(grid)

    grid.forEach(row => {
        sortedRow.push(row.split('').sort().join(''))
    });
    console.log(sortedRow)

    for(let i = 0, size = sortedRow[0].length; i < size; i++){
        col = [];
        console.log(size)
        console.log(sortedRow[i])
        for(let j = 0, rSize = sortedRow.length; j < rSize; j++){
            console.log(rSize)
            console.log(sortedRow[j])
            col.push(sortedRow[j][i]);
        }
        console.log(isSorted(col))
        if(!isSorted(col)) return 'NO'
        sortedCol.push(col)
    }
    console.log(sortedCol)
    console.log('a' < 'b')

    return 'YES'
}

// console.log(gridChallenge(grid1))
// console.log(gridChallenge(grid2))
// console.log(gridChallenge(grid3))
console.log(gridChallenge(grid4))
// console.log(gridChallenge(grid5))

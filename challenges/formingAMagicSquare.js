let s1 = [[5, 3, 4], [1, 5, 8], [6, 4, 2]]; // 834 159 672
let s2 = [[4, 9, 2], [3, 5, 7], [8, 1, 5]]; // 1
let s3 = [[4, 8, 2], [4, 5, 7], [6, 1, 6]]; // 4
let s4 = [[4, 5, 8], [2, 4, 1], [1, 9, 7]]; // 14

/*
 * Complete the 'formingMagicSquare' function below.
 * SUDOKU
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */

// all = 15
// index: 0,1,2 = Row 1
// index: 3,4,5 = Row 2
// index: 6,7,8 = Row 3
// index: 0,3,6 = Column 1
// index: 1,4,7 = Column 2
// index: 2,5,8 = Column 3

function formingMagicSquare(s) {
    // Write your code here
    const squares = ['618753294', '816357492', '834159672', '438951276', '672159834', '276951438', '294753618', '492357816'];
    let result = 100;
    let testString = '';
    let minimalCost = {};
    let bestOption = '';

    for (const row of s){
        for(const col of row){
            testString += col;
        }
    }

    for(const square of squares){
        minimalCost[square] = 0;

        for(let i = 0; i <= 10; i++){
            if(square[i] != testString[i]){
                let diff = Math.abs(square[i] - testString[i]);
                minimalCost[square] = minimalCost[square] + diff;
            }
        }
        if(minimalCost[square] < result){
            result = minimalCost[square];
            bestOption = square;
        }
    }
    console.log('')
    console.log(minimalCost)
    console.log('T: ' + testString)
    console.log('B: ' + bestOption)
    console.log('Minimal Cost: ' + result)
    console.log('')
    
    return result
}

console.log(formingMagicSquare(s1))
console.log('________________________________________')
console.log('')
console.log(formingMagicSquare(s2))
console.log('________________________________________')
console.log('')
console.log(formingMagicSquare(s3))
console.log('________________________________________')
console.log('')
console.log(formingMagicSquare(s4))
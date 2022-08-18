/*
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER r_q
 *  4. INTEGER c_q
 *  5. 2D_INTEGER_ARRAY obstacles
 */

let n1 = 4; // number of rows and columns  9
let k1 = 0; // number of obstacles
let r_q1 = 4; // the row number of the queen
let c_q1 = 4; // the column number of the queen
let obstacles1 = [[5, 5], [4, 2], [2, 3]];
let n2 = 5;
let k2 = 3;
let r_q2 = 4;
let c_q2 = 3;
let obstacles2 = [[5, 5], [4, 2], [2, 3]]; // 10
let n3 = 100000;
let k3 = 0;
let r_q3 = 4187
let c_q3 = 5068
let obstacles3 = [];
let n4 = 100; // 40
let k4 = 100;
let r_q4 = 48;
let c_q4 = 81;
let obstacles4 = [
    [54, 87],
    [64, 97],
    [42, 75],
    [32, 65],
    [42, 87],
    [32, 97],
    [54, 75],
    [64, 65],
    [48, 87],
    [48, 75],
    [54, 81],
    [42, 81],
    [45, 17],
    [14, 24],
    [35, 15],
    [95, 64],
    [63, 87],
    [25, 72],
    [71, 38],
    [96, 97],
    [16, 30],
    [60, 34],
    [31, 67],
    [26, 82],
    [20, 93],
    [81, 38],
    [51, 94],
    [75, 41],
    [79, 84],
    [79, 65],
    [76, 80],
    [52, 87],
    [81, 54],
    [89, 52],
    [20, 31],
    [10, 41],
    [32, 73],
    [83, 98],
    [87, 61],
    [82, 52],
    [80, 64],
    [82, 46],
    [49, 21],
    [73, 86],
    [37, 70],
    [43, 12],
    [94, 28],
    [10, 93],
    [52, 25],
    [50, 61],
    [52, 68],
    [52, 23],
    [60, 91],
    [79, 17],
    [93, 82],
    [12, 18],
    [75, 64],
    [69, 69],
    [94, 74],
    [61, 61],
    [46, 57],
    [67, 45],
    [96, 64],
    [83, 89],
    [58, 87],
    [76, 53],
    [79, 21],
    [94, 70],
    [16, 10],
    [50, 82],
    [92, 20],
    [40, 51],
    [49, 28],
    [51, 82],
    [35, 16],
    [15, 86],
    [78, 89],
    [41, 98],
    [70, 46],
    [79, 79],
    [24, 40],
    [91, 13],
    [59, 73],
    [35, 32],
    [40, 31],
    [14, 31],
    [71, 35],
    [96, 18],
    [27, 39],
    [28, 38],
    [41, 36],
    [31, 63],
    [52, 48],
    [81, 25],
    [49, 90],
    [32, 65],
    [25, 45],
    [63, 94],
    [89, 50],
    [43, 41]
] 


function queensAttack(n, k, r_q, c_q, obstacles) {
    // Write your code here
    let result = 0;
    let board = [];
    let rowCraft = [];
    let currentRow = r_q - 1;
    let currentCol = c_q - 1;
    let dRow = 0;
    let dCol = 0;
    let rowCol = 2 * (n - 1);
    let diags = 0;
    let mid = Math.ceil(n / 2);
    let diffDiag = Math.abs(mid - r_q);
    let diagUR;
    let diagDR;
    let diagDL;
    let diagUL;

    //console.log(diffDiag) 

    if (k === 0){
        if (r_q === n && c_q === n|| r_q === 1 && c_q === 1 || r_q === n && c_q === 1 || r_q === 1 && c_q === n) {
            console.log('Corner!')
            return 3 * (n - 1)
        }
        if (n % 2 === 0){
            diagUR = (n - r_q) < (n - c_q) ? (n - r_q) : (n - c_q);
            diagDR = (n - r_q) < (c_q - 1) ? (n - r_q) : (c_q - 1);
            diagDL = (r_q - 1) < (c_q - 1) ? (r_q - 1) : (c_q - 1);
            diagUL = (r_q - 1) < (n - c_q) ? (r_q - 1) : (n - c_q);

            diags = diagUR + diagDR + diagDL + diagUL;
            console.log('Row+Col:', rowCol)
            console.log('Diags:  ', diags)
        }
        return 'Result:  '+ (rowCol + diags)
    }

    let directions = [
        [1, 0],
        [-1, 0],
        [0, -1],
        [0, 1],
        [1, 1],
        [-1, 1],
        [1, -1],
        [-1, -1]
    ]

    // Craft Board:
    for (let r = 1; r <= n; r++){
        rowCraft = [];
        for (let c = 1; c <= n; c++){
                rowCraft.push(0)
        }
        board.push(rowCraft)
        //console.log(rowCraft)
    }

    // Insert Queen:
    board[r_q - 1][c_q - 1] = 1;

    // Insert Obstacles:
    console.log('Obstacles:')
    for (let i = 0; i < k; i++){
        let obsRow = obstacles[i][0] - 1;
        let obsCol = obstacles[i][1] - 1;
        
        console.log('Row:', obsCol, ' Col:', obsRow)
        board[obsRow][obsCol] = 5;
    }
    console.log('')
    console.log(board)
    console.log(board[0].length)

    // Calculate Moves:
    /*
    let currentSquare;
    for (let d = 0; d < 8; d++){
        currentRow = r_q - 1;
        currentCol = c_q - 1;
        currentSquare = 0;
        dRow = directions[d][0];
        dCol = directions[d][1];
        console.log('DRow:', dRow, ' DCol:', dCol, ' Value:', currentSquare)
        //console.log('  ', currentSquare)
        console.log('  sRow:', currentRow + 1, ' sCol:', currentCol + 1)
        for (let dCount = 0; dCount < (n * n); dCount++){
            console.log('  1CRowIndex:', currentRow + 1, ' CColIndex:', currentCol + 1, ' CValue:', currentSquare)
            if (currentRow === (n - 1) && dRow === 1 || currentRow === 0 || currentCol === (n - 1) && dCol === 1 || currentCol === 0 || currentSquare === 5){
                if(currentSquare === 5){
                    result--
                }
                break
            }
            currentRow += dRow;
            currentCol += dCol;
            result++
            currentSquare = board[currentRow][currentCol];
            console.log('  result++:', result) 
            console.log('  CRowIndex:', currentRow + 1, ' CColIndex:', currentCol + 1, ' CValue:', currentSquare)
        }
        console.log('  Result:', result)
        console.log('')
    } */
    // console.table(board)
    return result
}
//console.log(queensAttack(n1, k1, r_q1, c_q1, obstacles1))
// console.log(queensAttack(n2, k2, r_q2, c_q2, obstacles2))
// console.log(queensAttack(n3, k3, r_q3, c_q3, obstacles3))
console.log(queensAttack(n4, k4, r_q4, c_q4, obstacles4))

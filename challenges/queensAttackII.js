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
];
let n5 = 100; // 62
let k5 = 100;
let r_q5 = 54;
let c_q5 = 30;
let obstacles5 = [
[48, 36],
[38, 46],
[60, 24],
[70, 14],
[54, 36],
[54, 24],
[60, 30],
[48, 30],
[71, 50],
[14, 97],
[47, 31],
[29, 68],
[90, 10],
[36, 85],
[63, 24],
[32, 13],
[64, 57],
[45, 57],
[86, 19],
[43, 86],
[68, 72],
[29, 25],
[48, 59],
[38, 78],
[45, 16],
[40, 92],
[76, 85],
[40, 10],
[65, 16],
[71, 18],
[90, 40],
[65, 45],
[10, 37],
[19, 82],
[42, 56],
[46, 60],
[94, 14],
[34, 36],
[95, 49],
[78, 67],
[86, 23],
[28, 12],
[95, 57],
[38, 19],
[61, 49],
[67, 42],
[28, 25],
[38, 28],
[91, 20],
[90, 86],
[81, 19],
[18, 43],
[29, 69],
[36, 20],
[72, 75],
[39, 50],
[17, 92],
[48, 25],
[20, 79],
[82, 57],
[58, 50],
[94, 70],
[17, 19],
[73, 20],
[45, 12],
[19, 89],
[45, 12],
[59, 74],
[63, 71],
[32, 23],
[67, 85],
[24, 25],
[18, 61],
[97, 50],
[70, 37],
[30, 10],
[39, 90],
[75, 58],
[58, 34],
[47, 62],
[28, 28],
[79, 34],
[73, 80],
[93, 36],
[25, 45],
[48, 75],
[42, 13],
[18, 69],
[35, 21],
[18, 87],
[57, 19],
[26, 92],
[94, 34],
[84, 48],
[61, 95],
[62, 89],
[59, 74],
[50, 40],
[36, 37],
[95, 62]
]


function queensAttack(n, k, r_q, c_q, obstacles) {
    // Write your code here
    let result = 0;
    let queenRow = r_q;
    let queenCol = c_q;
    let boardSize = n;
    let rowCol = 2 * (n - 1);
    let diags = 0;
    let diagUR;
    let diagDR;
    let diagDL;
    let diagUL;
    let rowU = n - r_q;
    let colR = n - c_q;
    let rowD = r_q - 1;
    let colL = c_q - 1;

    if (queenRow > boardSize || queenCol > boardSize || n < 0 || n > 10000 || k > 10000){
        return false
    }

    if (k === 0){
        if (queenRow === boardSize && queenCol === boardSize || queenRow === 1 && queenCol === 1 || queenRow === boardSize && queenCol === 1 || queenRow === 1 && queenCol === boardSize) {
            console.log('Corner!')
            return 3 * (boardSize - 1)
        }
    }

    diagUR = (rowU) < (colR) ? (rowU) : (colR);
    diagDR = (rowD) < (colR) ? (rowD) : (colR);
    diagDL = (rowD) < (colL) ? (rowD) : (colL);
    diagUL = (rowU) < (colL) ? (rowU) : (colL);
    diags = diagUR + diagDR + diagDL + diagUL;
    console.log('Row+Col:', rowCol)
    console.log('Diags:  ', diags)    

    // result if no obstacles
    result = rowCol + diags;
    console.log('Result:', result)

    if (k > 0){
        let obsOnTop;
        let obsOnRight;
        let obsOnBottom;
        let obsOnLeft;
        let obsOnDiag;
        for (const [obsRow, obsCol] of obstacles) {
            obsOnTop = obsRow > queenRow;
            obsOnBottom = obsRow < queenRow;
            obsOnLeft = obsCol < queenCol;
            obsOnRight = obsCol > queenCol;
            obsOnDiag = Math.abs(obsRow - queenRow) === Math.abs(obsCol - queenCol);
            //console.log('ObsRow:', obsRow, ' QueenRow:', queenRow, ' ObsCol:', obsCol, ' QueenCol:', queenCol)
            // Col Obstacles
            if (obsRow === queenRow){
                // Left
                if (obsOnLeft === true && colL > (queenCol - obsCol - 1)){
                    colL = queenCol - obsCol - 1;
                    console.log(' Left:', colL)
                    continue
                }
                // Right
                if (obsOnRight === true && colR > (obsCol - queenCol - 1)){
                    colR = obsCol - queenCol - 1;
                    console.log(' Right:', colR)
                    continue
                }
            }

            // Row Obstacles
            if (obsCol === queenCol){
                // Down
                if (obsOnBottom === true && rowD > (queenRow - obsRow - 1)){
                    rowD = queenRow - obsRow - 1;
                    console.log(' Down:', rowD)
                    continue
                }
                // Up
                if (obsOnTop === true && rowU > (obsRow - queenRow - 1)){
                    rowU = obsRow - queenRow - 1;
                    console.log(' Top:', rowU)
                    continue
                }
            }

            // Diag Up Right Obstacles
            if (obsOnTop === obsOnRight && obsOnDiag === true && diagUR > (Math.abs(queenRow - obsRow) - 1)){
                console.log(' TOP RIGHT', ' QueenRow:', queenRow, ' ObsRow:', obsRow, ' DiagDR:',diagDR, ' Queen - Obst:', (Math.abs(queenRow - obsRow) - 1))
                diagUR = Math.abs(queenRow - obsRow) - 1;
                continue
            }

            // Diag Down Right Obstacles
            if (obsOnBottom === obsOnRight && obsOnDiag === true && diagDR > (Math.abs(queenRow - obsRow) - 1)){
                console.log(' BOT RIGHT', ' QueenRow:', queenRow, ' ObsRow:', obsRow, ' DiagDR:',diagDR, ' Queen - Obst:', (Math.abs(queenRow - obsRow) - 1))
                diagDR = Math.abs(queenRow - obsRow) - 1;
                continue
            }

            // Diag Down Left Obstacles
            if (obsOnBottom === obsOnLeft && obsOnDiag === true && diagDL > (Math.abs(queenRow - obsRow) - 1)){
                console.log(' BOT LEFT', '  QueenRow:', queenRow, ' ObsRow:', obsRow, ' DiagDR:',diagDR, ' Queen - Obst:', (Math.abs(queenRow - obsRow) - 1))
                diagDL = Math.abs(queenRow - obsRow) - 1;
                continue
            }

            // Diag Up Left Obstacles
            if (obsOnTop === obsOnLeft && obsOnDiag === true && diagUL > (Math.abs(queenRow - obsRow) - 1)){
                console.log(' TOP LEFT', '  QueenRow:', queenRow, ' ObsRow:', obsRow, ' DiagDR:', diagDR, ' Queen - Obst:', (Math.abs(queenRow - obsRow) - 1))
                diagUL = Math.abs(queenRow - obsRow) - 1;
                continue
                
            }

        };
        console.log('rows:', (rowU + rowD + colL + colR))
        console.log('diags:', (diagUR + diagDR + diagDL + diagUL))
        result = rowU + rowD + colL + colR + diagUR + diagDR + diagDL + diagUL;
    }
    
    return result
}
console.log(queensAttack(n1, k1, r_q1, c_q1, obstacles1))
console.log('\n')
console.log(queensAttack(n2, k2, r_q2, c_q2, obstacles2))
console.log('\n')
console.log(queensAttack(n3, k3, r_q3, c_q3, obstacles3))
console.log('\n')
console.log(queensAttack(n4, k4, r_q4, c_q4, obstacles4))
console.log('\n')
console.log(queensAttack(n5, k5, r_q5, c_q5, obstacles5))

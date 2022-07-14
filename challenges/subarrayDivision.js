/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

let chocolateSquares = [1, 2, 1, 3, 2];
let ronDay = 3; //sum of squares
let ronMonth = 2; //consecutives

let s2 = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1]; //expect 3
let d2 = 18;
let m2 = 7;

function birthday(s, d, m) {
    // Write your code here
    let chocolateSize = s.length;
    let result = 0;
    let index = 0;



    for (const square of s) {
        let squaresSum = square;
        let consecutives = index;
        let squaresLeft = index + (m-1);

        if (squaresLeft >= chocolateSize){
            return result
        }

        while (consecutives < (m - 1 + index)){

            //squaresSum = square
            consecutives++
            squaresSum += s[consecutives];

            console.log(s)
            console.log('ConStart: ' + (index + 1) + '  ' + 'Max: ' + (squaresLeft))
            console.log('startV:   ' + square + '  ' + 'Index: ' + index)
            console.log('Next:     ' + s[consecutives] + '  ' + 'Index: ' + consecutives)
            console.log('Sum:      ' + (squaresSum - s[consecutives]) + ' + ' + s[consecutives] + ' = ' + squaresSum + '  ' + 'Expect:   ' + d)
            //console.log('Expect:   ' + d)

        }
            console.log('Compare:  ' + squaresSum + ' == ' + d + '  ' + (squaresSum == d) + '\n' )
        if (squaresSum == d){
            result++
            console.log('Result:   ' + result + '\n')
        }
        index++
    }
    //console.log(result)
    return result

}
//console.log(birthday(chocolateSquares, ronDay, ronMonth))
//result
//Lily wants to give Ron M = 2 squares summing to Day = 3.
console.log(' ')
console.log('Teste 2:')
console.log(birthday(s2, d2, m2))

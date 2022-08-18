/*
 * Complete the 'libraryFine' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d1
 *  2. INTEGER m1
 *  3. INTEGER y1
 *  4. INTEGER d2
 *  5. INTEGER m2
 *  6. INTEGER y2
 */

let dt1 = 14;
let mt1 = 7;
let yt1 = 2018;
let dt2 = 5;
let mt2 = 7;
let yt2 = 2018;


function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
    if (y1 > y2){
        return 10000
    }
    if (y1 < y2){
        return 0
    }
    if (y1 === y2 && m1 < m2){
        return 0
    }
    if (y1 === y2 && m1 === m2 && d1 <= d2){
        return 0
    }
    if (y1 === y2 && m1 === m2 && d1 > d2){
        return 15 * (d1 - d2)
    }
    if (y1 === y2 && m1 >= m2){
        return 500 * (m1 - m2)
    }

}

console.log(libraryFine(dt1,mt1,yt1,dt2,mt2,yt2))
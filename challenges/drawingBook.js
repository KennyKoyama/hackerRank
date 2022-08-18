/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 * Return the minimum number of pages to turn
 */

let n1 = 6; // result 1    n is number or pages
let p1 = 2; // result 1    p is the page number to turn
let n2 = 5; // 0
let p2 = 4; // 0

function pageCount(n, p) {
    // Write your code here
    let book = [];
    let pages = Math.floor(n/2) + 1;
    let result = 0;
    let page = 0;
    let countFor = 0;
    let countBack = 0;

    for (let i = 0; i < pages; i++){
        if (page < n){
            book.push({'left':page, 'right':(page+1)})
        } else {
            book.push({'left':page, 'right': 0})
        }
        page += 2; 
    }

    let index = book.findIndex(pg => {
        if (pg.left === p || pg.right === p){
            return true
        }
    })
    countFor = index;
    countBack = book.length - (index + 1);
    if (countFor < countBack){
        result = countFor;
    } else {
        result = countBack;
    }
    console.log(book)
    console.log ('Forward: ' + countFor + '   ' + 'Backward: ' + countBack)
    return 'Result: '+ result
}

console.log(pageCount(n1, p1))
console.log('\nTest2:')
console.log(pageCount(n2, p2))
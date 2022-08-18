let n1 = 5; // n of charpters
let k1 = 3; // n of problems per page
let arr1 = [4, 2, 6, 1, 10]; // n of problems in each chapter
/*
 * Complete the 'workbook' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY arr
 */

function workbook(n, k, arr) {
    // Write your code here
    let result = 0;
    let sub = [];
    let book = []
    let numOfPages = 0;
    let count = 0;
    let pageNum = 1;
    for (const problems of arr){
        numOfPages = Math.ceil(problems / k);
        count = 0;
        for (let page = 0; page < numOfPages; page++){
            sub = [];
            for (let probPerPage = 1; probPerPage <= k && count < problems; probPerPage++){
                count++
                sub.push(count)
                console.log('count:', count, '  page:', pageNum, n)
                if (count === pageNum){
                    result++
                }
            }
            pageNum++
            book.push(sub)
            
        }
    }
    console.log(book)

    return result
}

console.log(workbook(n1, k1, arr1))
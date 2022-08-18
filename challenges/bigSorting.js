/*
 * Complete the 'bigSorting' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY unsorted as parameter.
 */

let unsorted1 = ['31415926535897932384626433832795','1','3','10','3','5']

function bigSorting(unsorted) {
    // Write your code here
    unsorted.sort((a,b) => a.length - b.length);
    unsorted.sort((a, b) => (BigInt(a) < BigInt(b)) ? -1 : ((BigInt(a) > BigInt(b)) ? 1 : 0));
    return unsorted
}

console.log(bigSorting(unsorted1))
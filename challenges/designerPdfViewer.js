/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

let h1 = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
let word1 = 'abc';
let h2 = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
let word2 = 'zaba';

function designerPdfViewer(h, word) {
    // Write your code here
    let result;
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let size = letters.length;
    let letterHeight = {};
    let tallest = 0;
    for(let i = 0; i < size; i++){
        letterHeight[letters[i]] = h[i];
    }
    for(let letter of word){
        let found = letterHeight[letter];
        if(found > tallest){
            tallest = found;
        }

    }
    result = tallest * word.length;
    console.log()
    console.log(letterHeight)
    console.log('')
    return result
}

console.log(designerPdfViewer(h1, word1))
console.log('')
console.log(designerPdfViewer(h2, word2))
console.log('')
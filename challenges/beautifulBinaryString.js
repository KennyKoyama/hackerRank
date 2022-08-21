/*
 * Complete the 'beautifulBinaryString' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING b as parameter.
 */

let b1 = '0101010'; // 2
let b2 = '01100'; // 0
let b3 = '0100101010'; // 3


function beautifulBinaryString(b) {
    // Write your code here
    let result = 0;
    let size = b.length;
    for(let i = 1; i < size - 1; i++){
        console.log(b[i-1], b[i], b[i+1], b[i-1] == 0 && b[i+1] == 0)
        
        if(b[i-1] == 0 && b[i] == 1 && b[i+1] == 0){
            result++
            i+=2
        }
    }
    console.log(result)
    return result
}

// console.log(beautifulBinaryString(b1))
// console.log(beautifulBinaryString(b2))
console.log(beautifulBinaryString(b3))
/*
 * Complete the 'toys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY w as parameter.
 */

let w1 = [1, 2, 3, 21, 7, 12, 14, 21]
let w2 = [12, 15, 7, 8, 19, 24];

function toys(w) {
    // Write your code here
    w.sort((a,b) => a - b)
    let current = w[0];
    let result = 1;
    let diff;
    for(const num of w) {
        diff = (current + 4) - num;
        console.log(diff)
        console.log(current)
        if(diff <= 4 && diff >= 0){
            console.log(num)
            continue
        }
        console.log(num)
        current = num;
        result++
    }
    return result
}

console.log(toys(w1))
console.log(toys(w2))
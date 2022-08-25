/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

let a1 = [1,2,3,4,3,2,1];

function lonelyinteger(a) {
    // Write your code here
    let size = a.length;
    let sorted = [...a].sort((a,b) => a - b);
    console.log(sorted)
    for(let i = 0; i < size; i++){
        console.log(sorted[i], sorted[i+1])
            console.log(sorted[i] === sorted[i+1])
            if(sorted[i] === sorted[i+1]){
                i++
                continue
            };
            return sorted[i]
    }
}

console.log(lonelyinteger(a1))
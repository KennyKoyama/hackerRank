/*
 * Complete the 'maximumToys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY prices
 *  2. INTEGER k
 */

let prices1 = [1, 12, 5, 111, 200, 1000, 10];
let k1 = 50;

function maximumToys(prices, k) {
    // Write your code here
    let result = 0;
    let sorted = [...prices].sort((a,b)=> a - b);
    let sum = 0;
    for(const price of sorted){
        sum += price;
        if(sum <= k){
            result++
            continue
        }
        break
    }
    return result
}

console.log(maximumToys(prices1, k1))
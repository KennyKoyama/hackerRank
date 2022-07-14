/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

let bill1 = [3, 10, 2, 9];
let k1 = 1; // Anna declines index
let b1 = 12; // Brian charged Anna
//Bonappetit if charged is equal division minus decline

function bonAppetit(bill, k, b) {
    // Write your code here
    let result;
    let sum = 0;
    for (let i = 0; i < bill.length; i++){
        if (i == k){
            continue
        }
        sum += bill[i]
    }
    let split = sum / 2;
    if (split == b){
        result = 'Bon Appetit';
    } else {
        result = b - split;
    }
    return result
}

console.log(bonAppetit(bill1, k1, b1))
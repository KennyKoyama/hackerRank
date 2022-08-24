/*
 * Complete the 'largestPermutation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

let k1 = 1;
let arr1 = [4, 2, 3, 5, 1];

let k2 = 1;
let arr2 = [2, 1, 3];

let k3 = 1;
let arr3 = [2,1];

let k4 = 2;
let arr4 = [138, 163, 109, 46, 85, 21, 18, 124, 149, 139, 128, 156, 73, 2, 129, 142, 166, 78, 162, 102, 13, 36, 150, 161, 134, 69, 41, 111, 31, 116, 87, 12, 47, 72, 22, 35, 82, 89, 130, 43, 44, 71, 115, 66, 90, 178, 40, 7, 67, 95, 146, 88, 59, 34, 154, 81, 137, 99, 159, 174, 96, 14, 32, 8, 24, 77, 160, 170, 5, 70, 97, 172, 83, 151, 33, 145, 68, 127, 51, 56, 4, 126, 55, 177, 29, 123, 148, 108, 53, 57, 17, 135, 63, 114, 143, 94, 19, 157, 171, 26, 110, 11, 173, 10, 106, 100, 30, 58, 74, 45, 120, 144, 39, 175, 48, 20, 37, 42, 75, 25, 141, 50, 153, 80, 49, 132, 65, 140, 152, 54, 64, 101, 92, 103, 155, 61, 60, 121, 107, 76, 136, 79, 117, 133, 104, 86, 16, 91, 179, 118, 122, 169, 168, 84, 113, 28, 3, 164, 105, 62, 38, 125, 147, 52, 119, 112, 1, 15, 23, 176, 27, 158, 93, 98, 165, 167, 6, 131, 9];

function largestPermutation(k, arr) {
    // Write your code here
    let result;
    let sorted = [...arr].sort((a,b) => b - a);
    let size = arr.length;
    let current;
    let highest = arr[0];
    let hIndex;
    if(arr.join('') === sorted.join('')) return arr;

    for(let i = 0; i < k; i++){
        current = arr[i];
        highest = current;
        for(let j = i; j < size; j++){
            if(arr[j] > highest){
                hIndex = j;
                highest = arr[j];
            }
        }
        if(highest > current){
            arr.splice(i,1,highest)
            arr.splice(hIndex,1,current)
            continue
        }
        k++
    }
    return arr
}

// console.log(largestPermutation(k1,arr1))
// console.log(largestPermutation(k2,arr2))
// console.log(largestPermutation(k3,arr3))
console.log(largestPermutation(k4,arr4))


/*
 * Complete the 'runningTime' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

let arr1 = [2, 1, 3, 1, 2];
let arr2 = [406, 157, 415, 318, 472, 46, 252, 187, 364,
            481, 450, 90, 390, 35, 452, 74, 196, 312, 142,
            160, 143, 220, 483, 392, 443, 488, 79, 234, 68,
            150, 356, 496, 69, 88, 177, 12, 288, 120, 222, 270,
            441, 422, 103, 321, 65, 316, 448, 331, 117, 183,
            184, 128, 323, 141, 467, 31, 172, 48, 95, 359, 239,
            209, 398, 99, 440, 171, 86, 233, 293, 162, 121, 61,
            317, 52, 54, 273, 30, 226, 421, 64, 204, 444, 418,
            275, 263, 108, 10, 149, 497, 20, 97, 136, 139, 200,
            266, 238, 493, 22, 17, 39];

function runningTime(arr) {
    // Write your code here
    let result = 0;
    let count = 0;
    for(let i = 1, size = arr.length; i < size; i++){
        let current = arr[i];
        count = 0;
        console.log('')
        console.log('  ', arr)
        console.log('   result:', result)
        for(let j = i - 1; j >= 0; j--){
            let left = arr[j];
            console.log(left,'<', current, left <= current)
            // console.log('  ', arr)
            if(left > current){
                count++
            };
            if(left <= current && count === 0) break;
            console.log('   count:', count)
            
            if(left <= current || j === 0){
                arr.splice(i,1);
                if(left <= current) arr.splice(j+1,0,current);
                if( left > current) arr.unshift(current);
                result += count;
                // console.log('   count:', count)
                // console.log('   result:', result)
                // console.log('  ', arr)
                // console.log('')
                break
            }
        }

    }
    console.log(arr)
    return result

}

// console.log(runningTime(arr1))
console.log(runningTime(arr2))


/*
Iteration   Array      Shifts
0           2 1 3 1 2
1           1 2 3 1 2     1
2           1 2 3 1 2     0
3           1 1 2 3 2     2
4           1 1 2 2 3     1

Total                     4
*/
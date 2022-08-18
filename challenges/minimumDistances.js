/*
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

let a1 = [3, 2, 1, 2, 3];

function minimumDistances(a) {
    // Write your code here
    let result = a.length;
    let current;
    let first;
    let last;
    for (let i = 0, half = a.length; i < half; i++){
        console.log('i:', i, ' Value:', a[i])
        // current = 0;
        first = i;
        console.log(' value:', a[i], ' firstIndex:', first,)
        last = undefined;   
        for (let j = i + 1, size = a.length; j < size; j++){
            // console.log('    j:', j,' Value:', a[j])
            if (a[j] === a[i] && first !== undefined){
                last = j;
                console.log('   last', last,' value:', a[j])
                break
            }
        }
        console.log('    First:', first, ' Last:', last, ' diff:', last - first)
        if (last === undefined){
            console.log('     last2', last)
            continue
        }
        current = last - first;
        
        result = result < current && current > 0 ? result : current;
        console.log('    result', result, ' current', current)
    }
    if (result === a.length){
        result = -1;
    }
    return result
}

console.log(minimumDistances(a2))
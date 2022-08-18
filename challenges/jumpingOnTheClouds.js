/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */
let c1 = [0, 0, 1, 0, 0, 1, 0];
let c2 = [0, 0, 0, 0, 0, 1, 0];

function jumpingOnClouds(c) {
    // Write your code here
    let jumps = 0;
    let paths = [];
    let subPaths = [];
    let size = c.length;
    let cloud = 0;
    let result = size;

    for (let i = 0; i < size;) {
        cloud = c[i];
        if (cloud === 0){
            console.log('start:' + i, cloud, ' jump2:' + (i+2), c[i+2], ' jump1:' + (i+1), c[i+1])
            if (c[i+2] === 0){
                jumps++
                i += 2
                continue
            }
            if (c[i+1] === 0) {
                jumps++
                i++
                continue
            }
            if (c[i+2] == undefined) {
                result = jumps
                break
            }
        }
    }
    if(jumps < result){
        result = jumps
    }
    return result
}

console.log(jumpingOnClouds(c1))
console.log(jumpingOnClouds(c2))
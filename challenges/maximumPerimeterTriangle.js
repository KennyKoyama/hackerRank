/*
 * Complete the 'maximumPerimeterTriangle' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY sticks as parameter.
 */

let sticks1 = [1, 1, 1, 3, 3]; // 1 3 3
let sticks2 = [1, 2, 3]; // -1
let sticks3 = [1, 1, 1, 2, 3, 5]; // 1 1 1
let sticks4 = [3, 9, 2, 15, 3]; // 2 3 3

function maximumPerimeterTriangle(sticks) {
    // Write your code here
    let triangles = [];
    sticks.sort((a,b) => a - b)
    sticks.forEach((stick, i, arr) => {
        console.log(stick, arr[i+1], arr[i+2])
        if(stick + arr[i+1] > arr[i+2] && arr[i+2] !== undefined){
            triangles.push([stick, arr[i+1], arr[i+2], (stick + arr[i+1] + arr[i+2])])
        }
    });
    if(triangles.length <= 0) return [-1];
    console.log(triangles)
    triangles.sort((a,b) => b[3] - a[3])
    console.log(triangles)
    console.log(result)
    return [triangles[0][0], triangles[0][1], triangles[0][2]]
}

// console.log(maximumPerimeterTriangle(sticks1))
// console.log(maximumPerimeterTriangle(sticks2))
// console.log(maximumPerimeterTriangle(sticks3))
console.log(maximumPerimeterTriangle(sticks4))


/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

let arr1 = [1, 4, 4, 4, 5, 3];  // 4
let arr2 = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]; // 3

// function migratoryBirds(arr) {
//     // Write your code here
//     let result = {'1':0, '2':0, '3':0, '4':0, '5':0};
//     let size = arr.length;
//     for (let i = 0; i < size; i++){
//         let type = arr[i];

//         if (type in result === false){
//             continue
//         } else {
//             result[type] = 1;
//             console.log('T: ' + type + ' NEW ' + ' ' + (type == type) + '    Total: ' + result[type])
//         }

//         for (let j = 0; j < size; j++){
//             let current = arr[j];


//             if (j == i || j < i){
//                 continue
//             }


//             if (current == type){
//                 result[type] = result[type] + 1;
//                 //console.log('T: ' + type + ' Total: ' + result[type])
//             }
//             console.log('T: ' + type + ' == ' + current + ' ' + (type == current) + '   Total: ' + result[type])
//         }
//         console.log(' ')
//     }
//     console.log(arr)
//     return result
// }

function migratoryBirds(arr) {
    // Write your code here
    let result = {'1':0, '2':0, '3':0, '4':0, '5':0};
    let lowestType = '';
    let typeFrequency = 0;
    let size = arr.length;

    for (const type of arr) {
        result[type] = result[type] + 1;
    }
    //console.log(result)
    for (const [key, value] of Object.entries(result)) {
        console.log(value)
        console.log('Key: ' + key + '   ' + 'Value: ' + value)

        if (value > typeFrequency){
            lowestType = key;
            typeFrequency = value;
        }
    }
    console.log(result)
    console.log('Type: ' + lowestType + '   ' + 'Frequency: ' + typeFrequency)
    return result
}

console.log(migratoryBirds(arr2))
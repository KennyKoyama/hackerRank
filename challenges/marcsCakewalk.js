/*
 * Complete the 'marcsCakewalk' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY calorie as parameter.
 */

let calorie1 = [1, 3, 2];
let calorie2 = [7, 4, 9, 6];

function marcsCakewalk(calorie) {
    // Write your code here
    let sorted = calorie.sort((a,b) => b - a);
    console.log(sorted)
    let result = 0;
    let distance = (j,c) => 2**j * c;
    calorie.forEach((cal,i) => {
        result += distance(i,cal);
    });

    console.log(result)
    return result
}

console.log(marcsCakewalk(calorie1))
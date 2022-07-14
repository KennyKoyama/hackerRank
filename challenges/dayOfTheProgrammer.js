/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

let year1 = 2017;  // 13.09.2017
let year2 = 2016;
let year3 = 1800;
let year4 = 1918;

function dayOfProgrammer(year) {
    // Write your code here
    let days = 256;
    let normal = '13';
    let leap = '12';
    let result;

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        //leap year
        result = '12.09.'+ year;
        return result
    } else if (year < 1918 && year % 4 == 0){
        //leap year
        result = '12.09.' + year;
        return result
    } else if (year == 1918){
        result = '26.09.' + year;
        return result
    } else {
        //not a leap year
        result = '13.09.'+ year;
        return result
    }
}

console.log(dayOfProgrammer(year1))
console.log(dayOfProgrammer(year2))
console.log(dayOfProgrammer(year3))
console.log(dayOfProgrammer(year4))
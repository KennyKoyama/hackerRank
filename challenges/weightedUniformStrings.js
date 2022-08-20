/* Complete the 'weightedUniformStrings' function below.
*
* The function is expected to return a STRING_ARRAY.
* The function accepts following parameters:
*  1. STRING s
*  2. INTEGER_ARRAY queries
*/

let s1 = 'abccddde';
let queries1 = [1, 3, 12, 5, 9, 10];
//              Y  Y  Y   Y  N   N


function weightedUniformStrings(s, queries) {
   // Write your code here
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let stringWeigths = [];
    let weigths = [];
    let hasWeight = (elem) => weigths.includes(elem);
    let lastLetter = s[0];
    let str = '';
    let weight = 0;
    let result = [];
    for(const letter of s){
        if(lastLetter !== letter) {
            str = ''
            weight = 0;
        };
        str += letter;
        weight += alphabet.indexOf(letter) + 1;
        weigths.push(weight)
        stringWeigths.push({s: str, w:weight})
        lastLetter = letter
    }
    for(const value of queries){
        console.log(hasWeight(value))
        if(hasWeight(value)) result.push('YES');
        if(!hasWeight(value)) result.push('NO');
    }
    console.log(result)
    console.log(weigths)
    console.log(stringWeigths)
    
    return result

}

console.log(weightedUniformStrings(s1,queries1))


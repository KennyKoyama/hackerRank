
/*
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

let s1 = 'haveaniceday';
let s2 = 'feedthedog';
let s3 = 'chillout';
let s4 = 'roqfqeylxuyxjfyqterizzkhgvngapvudnztsxeprfp';

function encryption(s) {
    let result = '';
    let arr = [];
    let subStr = '';
    let size = s.length;
    let square = Math.sqrt(size);
    let round = Math.ceil(square);
    let count = 0;
    while (count < size){
        let subArr = [];
        for (let col = 0; col < round; col++){
            if (s[count] === undefined){
                subArr.push('')
                continue
            }
            subArr.push(s[count])
            count++
        }
        arr.push(subArr)
    }
    count = 0;
    let arrSize = arr.length;
    for (let i = 0; count < size; i++){
        subStr = '';
        for (let j = 0; j < arrSize; j++){
            if (arr[j][i] === undefined){
                continue
            }
            subStr += arr[j][i];
            count++
        }
        subStr += ' ';
        result += subStr;
    }
    return result
}

console.log(encryption(s1))
console.log('\n')
console.log(encryption(s2))
console.log('\n')
console.log(encryption(s3))
console.log('\n')
console.log(encryption(s4))
console.log('\n')
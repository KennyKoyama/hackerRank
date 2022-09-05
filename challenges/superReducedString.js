/*
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function superReducedString(s) {
    // Write your code here
    let result = '';
    let splited = s.split('');
    console.log(splited)
    let size = splited.length;
    for (let i = 0; i < size; i++){
        let letterA = splited[i];
        let letterB = splited[i+1];
        // console.log(splited.length)

        if(letterA === letterB){
                splited.splice(i+1,1)
                splited.splice(i,1)
                i = -1;
                size = splited.length;
      
        }
    };
    result = splited.join('') || 'Empty String';
    console.log(result)
    return result
}

// console.log(superReducedString('aaabccddd'))
console.log(superReducedString('zztqooauhujtmxnsbzpykwlvpfyqijvdhuhiroodmuxiobyvwwxupqwydkpeebxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh'))
// console.log(superReducedString('baab'))
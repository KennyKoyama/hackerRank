/*
 * Complete the 'makingAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

let s11 = 'abc';
let s12 = 'amnop';

let s21 = 'absdjkvuahdakejfnfauhdsaavasdlkj';
let s22 = 'djfladfhiawasdkjvalskufhafablsdkashlahdfa';

function makingAnagrams(s1, s2) {
    // Write your code here
    let result = 0;
    let test = 0;
    let test2 = 0
    let first = s1.split('');
    let second = s2.split('');
    let index;
    for(const letter of first) {
        index = second.indexOf(letter);
        console.log(letter)
        console.log(index)
        if(index < 0){
            result++
            continue
        }
        console.log(index >= 0)
        console.log(second)
        
        if(index >= 0){
            second.splice(index,1)
            console.log(second)
        }
    };
    console.log([...first].sort())
    console.log([...second].sort())
    result += second.length;
    console.log(result)
    return result
    
}

// console.log(makingAnagrams(s11,s12))
console.log(makingAnagrams(s21,s22)) // 19
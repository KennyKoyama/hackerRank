/*
 * Complete the 'gameOfThrones' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

let s1 = 'aaabbbb';
let s2 = 'cdefghmnopqrstuvw';
let s3 = 'cdcdcdcdeeeef';

function gameOfThrones(s) {
    // Write your code here
    let result;
    let sorted = s.split('').sort();
    let even = 0;
    let odd = 0;
    let set = new Set(sorted);
    let count = 0;
    console.log(sorted)
    console.log(set)
    
    set.forEach(value =>{
        console.log(value)
        count = 0;
        let index = sorted.indexOf(value)
        console.log(index)
        for(;index< sorted.length;index++){
            let letter = sorted[index];
            console.log(value,letter)
            if(value === letter){
                count++
                continue
            }
            console.log(count)
            if(count % 2 === 0){
                even++
                break
            }
            odd++
            break
        }
    })
    console.log(even, odd)
    result = odd > 1 ? 'NO': 'YES';
    console.log(result)
    return result
}

console.log(gameOfThrones(s1))
console.log(gameOfThrones(s2))
console.log(gameOfThrones(s3))
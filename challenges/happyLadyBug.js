/*
 * Complete the 'happyLadybugs' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING b as parameter.
 */

let b1 = 'RBY_YBR';
let b2 = 'X_Y__X';
let b3 = '__';
let b4 = 'B_RRBR';

let b5 = 'AABBCC';
let b6 = 'AABBC_C';
let b7 = '_';
let b8 = 'DD__FQ_QQF';
let b9 = 'RRRR';

function happyLadybugs(b) {
    // Write your code here
    let arr = b.split('');
    let hasBugs = /[A-Z]/.test(b);
    let check = arr.every((color, i) => (color === arr[i-1] || color === arr[i+1]));
    let hasEmpty = /\_/.test(b);
    //let singleColor = arr.every((elem) => elem == arr[0]);
    if(check) return 'YES';
    //if(singleColor) return 'YES';
    console.log('check', check)
    // console.log('single',singleColor)
    if(!hasEmpty) return 'NO';
    console.log('')

    console.log(hasBugs)
    console.log(hasEmpty)
    let sorted = arr.sort();
    for(let i = 0, size = sorted.length; i < size; i++){
        let count = 0;
        let current = sorted[i];
        console.log(current)
        if (current == '_') break;
        for(let j = 0; j < size; j++){
            console.log(' ', sorted[j])
            if(current === arr[j]){
                count++
            }
        }
        console.log(count)
        if(count < 2){
            console.log('NO')
            return 'NO'
        }
    }
    console.log('YES')
    return 'YES'
}

happyLadybugs(b1)
console.log('B2:')
console.log(happyLadybugs(b2))
console.log('B2 end')
happyLadybugs(b3)
happyLadybugs(b4)
console.log('\n BBB 5')
console.log(happyLadybugs(b5))
happyLadybugs(b6)
happyLadybugs(b7)
happyLadybugs(b8)
console.log(happyLadybugs(b9))
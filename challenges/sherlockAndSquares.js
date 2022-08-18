/*
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 */
let a1 = 24;
let b1 = 49;
let a2 = 3;
let b2 = 9;

function squares(a, b) {
    // Write your code here
    let result = 0;
    let result2 = 0;
    let result3 = 0;
    let current = 0;
    let odd = 1;
// first method
    for (let n = a; n <= b; n++){
        console.log('current', n)
        console.log('sqrt', Math.sqrt(n))
        if(n > 0 && Math.sqrt(n) % 1 === 0){
            result++
        }
        console.log('pow', Math.pow(n, 0.5))
        console.log('')
    }

// second method    
    for (let n = a; n <= b; n++){
        current = n;
        console.log('n'+ n + ':')
        for (let i = n; i >= 0; i--){
            console.log('current', current, '-', odd, ' result:',(i - odd))
            current -= odd;
            odd += 2;
            if (current == 0){
            console.log('result + 1')
            console.log('perfect square')
            console.log('')
            result2++
            odd = 1;
            break
            } 
            if(current < 0) {
            console.log('result2', current)
            console.log('not square')
            console.log('')
            odd = 1;
            break
            }        
        }
    }

// third method
    let min = Math.ceil(Math.sqrt(a)); 
    let max = Math.floor(Math.sqrt(b));
    // take the min and max sqrt, if n*n >= min and n*n <= max   count+1 
    for (let n = min; n <= max; n++){
        if (min <= n * n <= max){
            result3++
        }
    }
    console.log('R1:', result, ' R2:', result2, ' R3:', result3)
    return result
}

console.log(squares(a1, b1))
console.log('\n')
//console.log(squares(a2, b2))
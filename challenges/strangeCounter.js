/*
 * Complete the 'strangeCounter' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER t as parameter.
 */

let t1 = 4;
let t2 = 99999997668;

function strangeCounter(t) {
    // Write your code here
    let initial = BigInt(3);
    let result = BigInt(initial);
    let test;

    for (let time = 1; time < t; time++){
        console.log(time, result)
        if((t - 2) > initial && (BigInt(time) + result) < t){
            result = BigInt(2) * initial;
            initial = result;
            time = initial - 3n
            continue

        }
        if(t > 10){
        let dif = BigInt(t) - BigInt(time);
        let res = result - dif;
        console.log('res', res)
        console.log(BigInt(t) - BigInt(time))
        
        return res
        }
        
        if(result == 1){
            result = BigInt(2) * initial;
            initial = result;
            console.log('')
            continue
        }  
        result--
        test = time + 1
    }
    console.log('result:')
    console.log(test, result)
    return result
}

 console.log(strangeCounter(t1)) // 3079217434
console.log(strangeCounter(t2)) // 3079217434
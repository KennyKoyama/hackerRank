/*
Output Format
Output the minimal number of integers that should be 
replaced to make the sequence strictly increasing.
*/



//const contents = readFileSync(testeArrayGigante.txt, 'utf-8').split('\n');
let test1 = [4, 10, 20];
let test2 = [1, 7, 10, 2, 20 ,22];
            //[7, 30, 1, 2 ,25 ,22 ,20]
let test3 = [1, 2, 2, 3, 4, 5,];
let test4 = [81345, 47, 63, 1633604, 1000000000, 
            958493077, 83, 34955381, 7, 925253, 5, 
            957385195, 33088, 787644, 1151, 92258, 3, 
            829488789, 52748182, 571354824, 2, 171, 
            7035, 1000000000];
let test5 = [7, 8, 9, 10, 1, 2, 3, 4, 5, 6];

// Test 1:
// function modifySequence(arr) {
//     let last = arr[0];
//     let index = 0;
//     let next = 0;
//     let result = 0;
//     //let maxSize = arr.length - index;
//     //let maxValue  = 1000000000 - maxSize;
//     for(const number of arr){
//         index++;
//         let maxSize = arr.length - index;
//         let maxValue  = 1000000000 - maxSize;
//         next = arr[index];
//         console.log('Last: ' + last + '  Current: ' + number + '  ' + (number>last) + '  Next: ' + next + '  ' + (number>next))
//         if (number > last && number < next){
//             last = number;
//         } else if (number > last && number > next){
//             last++;
//             //result++
//         } 
//         else if (number < last || number == last && number != maxValue){
//             result++
//             last++
//             //console.log('Result: '+ result)
//         } else if (number  == 10**9){
//             last++
//         }
//     }
//     return result
// }

// Test 2:
function modifySequence(arr) {
    let last = 0;
    let size = arr.length;
    let result = 0;


    for(let i = 0; i < size; i++){
        let number = arr[i];
        let next = arr[i+1];
        let sizeLeft = (size - 1) - i;
        let maxValue  = 10**9 - sizeLeft;
        
        if (next == undefined || next == null){
            next = arr[size-1] + 1;
        }
        if (number == undefined || number == null){
            last++
            result++
        }
        if (isNaN(number)){
            last++;
            result++;
        }
        console.log('Last: '+ last + 
        '  Current: ' + number + 
        '  ' + (number > last) +
        '  After: ' + next + 
        '  ' + (number < next));
        if (i == 0 && number > next){
            last = 1;
            result++;
        } else if(number == last){
            result++;
            last++
        } else if (number > last && number >= maxValue){
            result++;
            last++;
        } else if (number > last && number < next){
            last = number;
        } else if (number > last && number > next){
            last++;
        } else if (number < last && number < next) {
            result++;
            last++;
        } else if (number < last && number > next){
            result++;
            last++;
        }
        console.log(result)
    }
    return result
}


// Test 3:
// function modifySequence(arr) {
// let number = 0;
// let last = arr[0];
// let next = 0;
// let result1 = 0;
// let result2 = 0;
// let size = arr.length;

// for(let i = 1; i < size; i++){
//     next = arr[i+1];
//     number = arr[i];
//     console.log('Last: ' + last + 
//                 '  Current: ' + number + 
//                 '  ' + (number>last) + 
//                 '  Next: ' + next + 
//                 '  ' + (number<next))

//     if (number > last && number < next){
//         last = number;
//     }
    
//     else if (number > last && number == next){
//         last = number;
//     }

//     else if (last == undefined){
//         last = 0;
//     }
    
//     else if (number > last && number > next){
//         last++;
//     }
    
//     else if (number == last){
//         result1++
//         last++
//     }
    
//     else if (number < last && number < next){
//         result1++
//         last++
//     }
    
//     else if (number < last && next == undefined){
//         result1++
//         last++
//     }
// }
//     console.log('R1: ' + result1)
    
//     last = arr[size-1];

//     for(let i = size - 2; i >= 0; i--){
//     next = arr[i-1];
//     number = arr[i];
//     console.log('Last: ' + last + 
//                 '  Current: ' + number + 
//                 '  ' + (number<last) + 
//                 '  Next: ' + next + 
//                 '  ' + (number>next))

//     if (number < last && number > next){
//         last = number;
//     }

//     else if (number < last && number == next){
//         last = number;
//     }

//     else if (next == undefined){
//         next = 0;
//     }

//     else if (number < last && number < next){
//         last--;
//         result2++;
//     }

//     else if (number == last){
//         result2++
//         last--
//     }
    
//     else if (number > last && number > next){
//         result2++
//         last--
//     }
    
//     else if (number > last && next == undefined ){
//         result2++
//         last--
//     }
// }
// console.log('R2: ' + result2)
// if (result1 < result2){
//     return result1
// }
// if(result2 < result1){
//     return result2
// }
// if (result1 == result2){
//     return result1
// }
// }


//console.log('Test1: ' + modifySequence(test1))
//console.log('Test2: ' + modifySequence(test2))
//console.log('Test3: ' + modifySequence(test3))
console.log('Test4: ' + modifySequence(test4))
//console.log('Test5: ' + modifySequence(test5))
//console.log('Size: ' + test4.length)
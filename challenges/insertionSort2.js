
let arr1 = [8, 7, 6, 5, 4, 3, 2, 1];
let n1 = arr1.length;
let arr2 = [1, 4, 3, 5, 6, 2];
let n2 = arr2.length;

function insertionSort2(n, arr) {
    // Write your code here
    let current;
    let test;

    for(let i = 1; i < n; i++){
        test = arr[i];
        for(let j = i - 1; j >= 0; j--){
            current = arr[j];
            if(current === test) continue;
            if(test > current && test > arr[j + 1]) break;
            if(test < current && j > 0) continue;
            if(test > current && test < arr[j + 1]){
                arr.splice(i,1)
                arr.splice(j+1,0,test)
                console.log(...arr)
                break
            }
            if(test < current && j === 0){
                arr.splice(i,1)
                arr.splice(j,0,test)
                console.log(...arr)
                break
            }
            console.log(...arr)
        }
    }
}
console.log(insertionSort2(n1, arr1))
// console.log(insertionSort2(n2, arr2))
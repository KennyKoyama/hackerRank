// Day 1
// Plus Minus:
const teste = [-5,-4,0,1,2];
function plusMinus(arr) {
    var total = arr.length;
    var positives = 0;
    var negatives = 0;
    var zeros = 0;
    var propPositives = 0;
    var propNegatives = 0;
    var propZeros = 0;
    for (let i = 0; i <= total - 1; i++){
        if (arr[i] == 0){
            zeros += 1;
        } else if (arr[i] > 0){
            positives += 1;
        } else {
            negatives += 1;
        }
    }
    propPositives = positives / total;
    propNegatives = negatives / total;
    propZeros = zeros / total;
    console.log('Positives: ' + propPositives.toFixed(6));
    console.log('Negatives: ' + propNegatives.toFixed(6));
    console.log('Zeros: ' + propZeros.toFixed(6));
}
console.log('DAY 1 -  Exercício 1:')
plusMinus(teste)
console.log('');


// Min-Max Sum:
var teste2 = [6,4,8,7,5];
function miniMaxSum(arr2) {
    // Write your code here
    var minToMax = arr2.sort((a, b) => a - b);
    var min = 0;
    var max = 0;
    var arrSize = arr2.length - 1;
    var j = 0;
    for (let i = 0; i < arrSize; i++){
        min += minToMax[i];
        j = (arrSize) - i;
        if (j >= 1){
            max += minToMax[j];
        }
    }
    console.log('Min: ' + min + '\n' + 'Max: ' + max);
}
console.log('DAY 1 - Exercício 2:')
miniMaxSum(teste2)
console.log('')



// Time Conversion:
var t1 = '12:00:00PM';
var t2 = '12:00:00AM';

function timeConversion(s) {
    // Write your code here
    var military = '';
    var amPM = s[8] + s[9];
    var hour = s[0] + s[1];
    var rest = s[2] + s[3] + s[4] + s[5] + s[6] + s[7];
    if (amPM == 'PM' && hour < 12){
        hour = Number(hour) + 12;
    } else if (amPM == 'PM' && hour == 12){
        hour = '12';
    } else if (amPM == 'AM' && hour == 12){
        hour = '00';
    }
    military = hour + rest;
    console.log('12H: ' + s + '  ->  ' + '24H: ' + military);
}
console.log('DAY 1 - Exercício 3:')
timeConversion(t1)
timeConversion(t2)
console.log('')



// Mock Test - Find the Median:

const mockArr = [5,3,6,2,1,4,7];

function findMedian(arr) {
    // Write your code here
    let sorted = arr.sort((a, b) => a - b);
    let mIndex = (arr.length + 1) / 2;
    let middle = arr[mIndex];

    console.log('Array: ' + arr + '\n' +
                'Sorted: ' + sorted + '\n' +
                'Middle Index: ' + mIndex + '\n' +
                'Middle Element: ' + middle)

}
console.log('Mock Test:')
findMedian(mockArr)


let keyboards1 = [3, 1];
let drives1 = [5, 2, 8];
let b1 = 10;
let keyboards2 = [4];
let drives2 = [5];
let b2 = 5;

function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */

    let keySorted = keyboards.sort();
    let usbSorted = drives.sort();
    let result = 0; 

    for(const kb of keyboards){
        if (kb >= b){
            continue
        }
        for (const usb of drives){
            if(usb >= b){
                continue
            }
            if ((kb + usb) > result && (kb + usb) <= b){
                result = kb + usb
            }
        }
    }
    if(result == 0){
        result = -1;
    }

    console.log(keySorted)
    console.log(usbSorted)
    console.log('Budget: ' + b)
    return result
}

console.log(getMoneySpent(keyboards1, drives1, b1))
console.log('')
console.log(getMoneySpent(keyboards2, drives2, b2))
console.log('')
console.log(10**6)

let x1 = 1;
let y1 = 2;
let z1 = 3;
let x2 = 1;
let y2 = 3;
let z2 = 2;

function catAndMouse(x, y, z) {
    let result = '';
    let catA = Math.abs(x - z);
    let catB = Math.abs(y - z);
    if (catA < catB){
        result = 'Cat A';
    } else if (catB < catA){
        result = 'Cat B';
    } else {
        result = 'Mouse C';
    }
    return result
}

console.log(catAndMouse(x1, y1, z1))
console.log('')
console.log(catAndMouse(x2, y2, z2))
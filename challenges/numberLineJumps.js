
let k1 = 0;
let d1 = 2;
let k2 = 5;
let d2 = 3;

function kangaroo(x1, v1, x2, v2) {
    if (v1 <= v2) {
        return 'NO'
    }
    let firstKangarooLocation = x1 + v1;
    let secondKangarooLocation = x2 + v2;

    while (secondKangarooLocation >= firstKangarooLocation) {
        firstKangarooLocation += v1;
        secondKangarooLocation += v2;

        if (firstKangarooLocation == secondKangarooLocation){
            console.log('YES')
            return 'YES';
        }
    }
    console.log('NO')
    return 'NO'
}


console.log(kangaroo(k1,d1,k2,d2))
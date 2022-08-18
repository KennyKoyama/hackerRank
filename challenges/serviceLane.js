let width1 = [2, 3, 1, 2, 3, 2, 3, 3];
let cases1 = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]];

function serviceLane(width, cases) {
    // Write your code here
// console.log(n)
// console.log(t)
// console.log(cases)
// console.log(width)
    let sub = [];
    let result = [];
    let entry;
    let exit;
    for (const element of cases){
        sub = [];
        entry = element[0];
        exit = element[1];
        for (let w = entry; w <= exit; w++){
            sub.push(width[w])
        }
        console.log(sub)
        console.log(Math.min(...sub))
        result.push(Math.min(...sub))
    }
    console.log(result)
    return result
}

console.log(serviceLane(width1, cases1))
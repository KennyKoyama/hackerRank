let c1 = [0, 0, 1, 0, 0, 1, 1, 0]; // 92
let k1 = 2;

let c2 = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0];
let k2 = 3;
// 0 is a cumulus cloud
// 1 is a thunderhead
// e = 100
// c[(i + k) % n]
function jumpingOnClouds(c, k) {
    let n = c.length;
    let energy = 100;

    for (let i = k; ; i += k){
        console.log('EnergyStart:', energy, '  i:', i, '  i % n:', (i % n), '  Value:', c[i % n])
        energy -= 1;
        console.log('Jump -1')
        if (c[i % n] === 1){
            energy -= 2;
            console.log('Thunderhead -2')
        }
        if((i % n) === 0){
            console.log('i = 0  Finish')
            break
        }
        console.log('Energy: ' + energy)
        console.log('')

    }
    return energy
}

console.log('Result:',jumpingOnClouds(c1, k1))
console.log('')
console.log('--------------------------------')
console.log('Result:', jumpingOnClouds(c2, k2))
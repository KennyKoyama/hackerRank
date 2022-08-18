/*
 * Complete the 'taumBday' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER b
 *  2. INTEGER w
 *  3. INTEGER bc
 *  4. INTEGER wc
 *  5. INTEGER z
 */

let b1 = 3;  // black gifts
let w1 = 5;  // white gifts
let bc1 = 3; // black gift cost
let wc1 = 4; // white gift cost
let z1 = 1;  // cost to convert gift color
let b2 = 10;
let w2 = 10;
let bc2 = 1;
let wc2 = 1;
let z2 = 1;
let b3 = 5;
let w3 = 9;
let bc3 = 2;
let wc3 = 3;
let z3 = 4;
let b4 = 3;
let w4 = 6;
let bc4 = 9;
let wc4 = 1;
let z4 = 1;
let b5 = 7;
let w5 = 7;
let bc5 = 4;
let wc5 = 2;
let z5 = 1;
let b6 = 3;
let w6 = 3;
let bc6 = 1;
let wc6 = 9;
let z6 = 2;

let b7 = 742407782;
let w7 = 90529439;
let bc7 = 847666641;
let wc7 = 8651519;
let z7 = 821801924;

let b8 = 142640749;
let w8 = 652432197;
let bc8 = 701695848;
let wc8 = 936714099;
let z8 = 324221606;

let b9 = 736418699;
let w9 = 754161925;
let bc9 = 912285746;
let wc9 = 841360803;
let z9 = 736841333;

let b10 = 177076565;
let w10 = 651852957;
let bc10 = 926160119;
let wc10 = 137199984;
let z10 = 872396383;

let b11 = 232813954;
let w11 = 654376491;
let bc11 = 933554781;
let wc11 = 63130979;
let z11 = 441062505;

let b12 = 988402860;
let w12 = 283959645;
let bc12 = 572488886;
let wc12 = 802335530;
let z12 = 193057740;

let b13 = 571683259;
let w13 = 397259663;
let bc13 = 136103531;
let wc13 = 271866251;
let z13 = 405911181;

let b14 = 810421806;
let w14 = 414506999;
let bc14 = 58343377;
let wc14 = 512117653;
let z14 = 203737449;

let b15 = 235081335;
let w15 = 101052703;
let bc15 = 957899374;
let wc15 = 147367080;
let z15 = 942413506;

let b16 = 547257058;
let w16 = 324443644;
let bc16 = 594266462;
let wc16 = 325933528;
let z16 = 461643627;

function taumBday(b, w, bc, wc, z) {
    // Write your code here
    let totalGifts = BigInt(b) + BigInt(w);
    let blacks = BigInt(b) * BigInt(bc);
    let whites = BigInt(w) * BigInt(wc);
    let totalGxBC = totalGifts * BigInt(bc);
    let totalGxWC = totalGifts * BigInt(wc);
    let bXz = BigInt(b) * BigInt(z);
    let wXz = BigInt(w) * BigInt(z);
    let totalBW = 0;
    let totalBC = 0;
    let totalWC = 0;

    totalBW = blacks + whites;
    totalBC = totalGxBC + wXz;
    totalWC = totalGxWC + bXz;
    if (totalBW <= totalBC && totalBW <= totalWC){
        return totalBW;
    }
    if (totalBC <= totalBW && totalBC <= totalWC){
        return totalBC;
    }
    if (totalWC <= totalBW && totalWC <= totalBC){
        return totalWC;
    }
}

console.log('')
console.log(taumBday(b1, w1, bc1, wc1, z1))
console.log('')
console.log(taumBday(b2, w2, bc2, wc2, z2))
console.log('')
console.log(taumBday(b3, w3, bc3, wc3, z3))
console.log('')
console.log(taumBday(b4, w4, bc4, wc4, z4))
console.log('')
console.log(taumBday(b5, w5, bc5, wc5, z5))
console.log('')
console.log(taumBday(b6, w6, bc6, wc6, z6))
console.log('')
console.log(taumBday(b7, w7, bc7, wc7, z7))
console.log('')
console.log(taumBday(b8, w8, bc8, wc8, z8))
console.log('')
console.log(taumBday(b9, w9, bc9, wc9, z9))
console.log('')
console.log(taumBday(b10, w10, bc10, wc10, z10))
console.log('')
console.log(taumBday(b11, w11, bc11, wc11, z11))
console.log('')
console.log(taumBday(b12, w12, bc12, wc12, z12))
console.log('')
console.log(taumBday(b13, w13, bc13, wc13, z13))
console.log('')
console.log(taumBday(b14, w14, bc14, wc14, z14))
console.log('')
console.log(taumBday(b15, w15, bc15, wc15, z15))
console.log('')
console.log(taumBday(b16, w16, bc16, wc16, z16))

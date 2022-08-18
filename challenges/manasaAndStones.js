/*
 * Complete the 'stones' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER a
 *  3. INTEGER b
 */

n1 = 3;
a1 = 1;
b1 = 2;
n2 = 4;
a2 = 10;
b2 = 100;
n3 = 58;
a3 = 69;
b3 = 24;
n4 = 83;
a4 = 86;
b4 = 81;
n5 = 73;
a5 = 25;
b5 = 25;
n6 = 12;
a6 = 73;
b6 = 82;
n7 = 5;
a7 = 3;
b7 = 23;


function stones(n, a, b) {
    // Write your code here
    let result = [];
    let rock = 0;
    let first = a > b ? b : a;
    let second = a > b ? a : b;
    //console.log(first, second)
    if (a == b){
        rock = (n - 1) * a;
        result.push(rock)
        console.log(result)
        return result;
    }
    for(let i = 0; i < n; i++){
        rock = (i * second) + ((n - i - 1) * first);
        result.push(rock)
    }
    console.log(result)
    return result
}

//stones(n1, a1, b1)
//stones(n2, a2, b2)
stones(n3, a3, b3)
stones(n4, a4, b4)
stones(n5, a5, b5)
stones(n6, a6, b6)
stones(n7, a7, b7)
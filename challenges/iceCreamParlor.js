function icecreamParlor(m, arr) {
    // Write your code here
    let result = [];
    let size = arr.length;
    console.log(result)
    for (let i = 0; i < size; i++) {
        let first = arr[i];
        for (let j = i+1; j < size; j++) {
            let second = arr[j];
            console.log(first + second == m)
            if((first + second) == m) return [i + 1, j + 1];
        }
    }
    return result
}

console.log(icecreamParlor(4, [1, 4, 5, 3, 2]))
// console.log(icecreamParlor(4, [2, 2, 4, 3]))
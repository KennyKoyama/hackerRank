function factorial(n) {
    let result = 1;
    for (let number = n; number > 0; number -= 1) {
        result *= number;
    }
    return result
}

console.log(factorial(4))
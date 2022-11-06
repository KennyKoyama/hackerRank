function getMaxLessThanK(n, k) {
    let s = [];
    let maximum = 0;
    for (let a = 1; a < n; a += 1) {
        for (let b = a + 1; b <= n; b += 1) {
            console.log(a & b)
            if ((a & b) < k && (a & b) > maximum) maximum = (a & b);
        }
    }
    return maximum
}
console.log(getMaxLessThanK(8, 5))
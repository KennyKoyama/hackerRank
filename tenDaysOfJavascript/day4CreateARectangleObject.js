/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    let obj = {length : a,
                width : b,
                perimeter : ((a + b) * 2),
                area : (a * b)}

    return obj
}
console.log(Rectangle(4,5))
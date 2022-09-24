/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    if (typeof s !== 'string') {
        console.log('s.split is not a function')
        console.log(s)
        return
    }
    let reversed = s.split('')
                    .reverse()
                    .join('');

    console.log(reversed)
}
console.log(reverseString("1234"))
console.log(reverseString(1234))
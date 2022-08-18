/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */
let n1 = 3;
let p1 = 'Ab1';
let n2 = 11;
let p2 = '#HackerRank';

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let falses = 0;
    let size = password.length >= 6 ? 0 : 6 - password.length;
    let numbers = /\d/.test(password);
    let lower_case = /[a-z]/.test(password);
    let upper_case = /[A-Z]/.test(password);
    let special_characters = /[\!\@\#\$\%\^\&\*\(\)\-\+]/.test(password);
    if(!numbers) falses++;
    if(!lower_case) falses++;
    if(!upper_case) falses++;
    if(!special_characters) falses++;
    let result = size > falses ? size : falses;

    console.log('')
    console.log('password:',password)
    console.log('size:',size)
    console.log('number:',numbers)
    console.log('lower:',lower_case)
    console.log('upper:',upper_case)
    console.log('special:',special_characters)
    console.log(falses)

    
    return result
}

console.log(minimumNumber(n1,p1))
console.log(minimumNumber(n2,p2))
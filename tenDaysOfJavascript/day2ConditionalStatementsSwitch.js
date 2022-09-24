function getLetter(s) {
    let letter;
    // Write your code here
    let vowels = /[aeiou]/;
    let consonants1 = /[bcdfg]/;
    let consonants2 = /[hjklm]/;
    let consonants3 = /[npqrstuvwxyz]/;
    let firstLetter = s[0];

    switch (true) {
        case vowels.test(firstLetter):
            letter = 'A';
            break;
        case consonants1.test(firstLetter):
            letter = 'B';
            break;
        case consonants2.test(firstLetter):
            letter = 'C';
            break;
        case consonants3.test(firstLetter):
            letter = 'D';
            break;
        default:
            console.log(`${s} is not valid`);
            break;
    }
    return letter;
}
console.log(getLetter('adfgt'))
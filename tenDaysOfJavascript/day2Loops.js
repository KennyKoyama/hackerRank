/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels = [];
    let consonants = [];
    let isVowel = (value) => /[aeiou]/i.test(value);
    for (const letter of s) {
        if (isVowel(letter)) vowels.push(letter);
        if (!isVowel(letter)) consonants.push(letter);
    }
    let result = vowels.concat(consonants);
    result.forEach( letter => console.log(letter));
    console.log(vowels)
    console.log(consonants)
}
console.log(vowelsAndConsonants('javascriptloops'))
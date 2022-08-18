/*
 * Complete the 'timeInWords' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER h
 *  2. INTEGER m
 */

let h1 = 5;
let m1 = 47;

function timeInWords(h, m) {
    // Write your code here
    let numToWord = {
                1 : 'one',
                2 : 'two',
                3 : 'three',
                4 : 'four',
                5 : 'five',
                6 : 'six',
                7 : 'seven',
                8 : 'eight',
                9 : 'nine',
                10 : 'ten',
                11 : 'eleven',
                12 : 'twelve',
                13 : 'thirteen',
                14 : 'fourteen',
                15 : 'quarter',
                16 : 'sixteen',
                17 : 'seventeen',
                18 : 'eighteen',
                19 : 'nineteen',
                20 : 'twenty',
                21 : 'twenty one',
                22 : 'twenty two',
                23 : 'twenty tree',
                24 : 'twenty four',
                25 : 'twenty five',
                26 : 'twenty six',
                27 : 'twenty seven',
                28 : 'twenty eight',
                29 : 'twenty nine',
                30 : 'half',
                45 : 'quarter',
                0 : "o' clock"
            };

    let result = '';
    let hour = '';
    let minutes = '';

    // oClock
    if (m == 0){
        hour = numToWord[h];
        minutes = numToWord[m];
        result = hour + ' ' + minutes;
        return result
    }

    // one min
    if (m == 1){
        hour = numToWord[h];
        minutes = numToWord[m];
        result = minutes + ' minute past ' + hour;
        return result
    }

    // past
    if (m > 1 && m < 30 && m != 15){
        hour = numToWord[h];
        minutes = numToWord[m];
        result = minutes + ' minutes past ' + hour;
        return result
    }

    // half or quarter past
    if (m == 30 || m == 15){
        hour = numToWord[h];
        minutes = numToWord[m];
        result = minutes + ' past ' + hour;
        return result
    }    

    // to
    if (m > 30 && m <= 59 && m != 45){
        hour = numToWord[h + 1];
        minutes = numToWord[60 - m];
        result = minutes + ' minutes to ' + hour;
        return result
    }    

    // quarter to
    if (m == 45){
        hour = numToWord[h + 1];
        minutes = numToWord[m];
        result = minutes + ' to ' + hour;
        return result
    }    
    
}

console.log(timeInWords(h1,m1))
/*
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

let s1 = 'beabeefeab';
let s2 = 'abaacdabd';
let s3 = 'asdcbsdcagfsdbgdfanfghbsfdab';
let s4 = 'asvkugfiugsalddlasguifgukvsa';
let s5 = 'cwomzxmuelmangtosqkgfdqvkzdnxerhravxndvomhbokqmvsfcaddgxgwtpgpqrmeoxvkkjunkbjeyteccpugbkvhljxsshpoymkryydtmfhaogepvbwmypeiqumcibjskmsrpllgbvc';

function alternate(s) {
    // Write your code here
    let result = 0;
    let splited = s.split('');
    let singles = [];
    let regex = /(\w)\1/g;
    let isSeq;
    let hasSeq = (arr) => /(\w)\1/.test(arr);
    let count;
    console.log(s)

    // Remove singles
    // for(const elem of splited){
    //     count = 0;
    //     for(const check of splited){
    //         if(elem == check) count++;
    //         if(count > 1) break;
    //     }
    //     if(count <= 1){
    //     singles.push(elem)
    //     console.log(' removed singles:',singles)
    //     splited = splited.filter(letter => letter !== elem)
    //     }
    // }
    // if(singles.length === 2 && (singles[0] + singles[1]) === s || (singles[1] + singles[0]) === s) return s.length;

    let test = s.match(/(\w)\1/)
    console.log(test.index)

    // Remove sequencials
    // isSeq = [...s.matchAll(regex)];
    // console.log(' seq:',isSeq)
    // for(const match of isSeq){
    //     console.log(' match Seq:',match[1])
    //     splited = splited.filter(letter => letter !== match[1])
    // }
    // console.log(' after removed:',splited)

    // Find Choices
    let choices = [];
    for(const first of splited){
        for(const second of splited){
            if(second === first) continue;
            if(!choices.includes(first + second) && !choices.includes(second + first)){
                choices.push(first + second)
                break
            };
        }

    }
    console.log(' choices:', choices)

    // Check possibilities
    let seqIndex;
    let possibilities = [];
    for(const str of choices){
        let choice = str.split('');
        let sub = splited.filter((letter) => letter === choice[0] || letter === choice[1]);
        console.log(' choice:',choice)
        console.log(' sub:',sub.join(''))
        console.log(' size:', sub.length)
        console.log(' Valid:', !hasSeq(sub.join('')))
        sub = sub.join('');
        console.log(sub)
        while(hasSeq(sub)){
            // seqIndex = sub.match(/(\w)\1+/);
            // console.log(seqIndex)
            sub = sub.replace(/(\w)\1+/g,'');
            console.log(sub, sub.length)
            
        }
        
        if(sub.length > 1){
            possibilities.push(sub)
            result = result > sub.length ? result : sub.length;
        };
        
    }
    console.log('possibilities:')
    console.log(possibilities)
    return result
}

// console.log(alternate(s1))
// console.log('\n')
// console.log(alternate(s2))
// console.log('\n')
// console.log(alternate(s3))
// console.log('\n')
// console.log(alternate(s4))
// console.log('\n')
console.log(alternate(s5))
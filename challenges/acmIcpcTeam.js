/*
 * Complete the 'acmTeam' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY topic as parameter.
 */

let topic1 = ['10101',
              '11110',
              '00010']

let topic2 = ['10101',
              '11100',
              '11010',
              '00101']

function acmTeam(topic) {
    let result = [0, 0];
    for (let teamA = 0, size = topic.length; teamA < size; teamA++){
        for (let teamB = teamA + 1; teamB < size; teamB++){
            let strSplit = [];
            for (let tpc = 0, strSize = topic[0].length; tpc < strSize; tpc++){
                if (topic[teamA][tpc] == 1 || topic[teamB][tpc] == 1){
                    strSplit.push(tpc + 1)
                }               
            }
            if (strSplit.length > result[0]){
                result[0] = strSplit.length;
                result[1] = 0;
            }
            if (strSplit.length === topic[0].length || strSplit.length === result[0]){
                result[1]++;
            }
        }        
    }
    return result
}

console.log(acmTeam(topic1))
console.log(acmTeam(topic2))
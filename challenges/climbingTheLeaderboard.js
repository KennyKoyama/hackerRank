/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

const ranked1 = [100, 90, 90, 80];
const player1 = [70, 70, 80, 105];
const ranked2 = [997, 981, 957, 933, 930, 927,
               926, 920, 916, 896, 887, 874, 
               863, 863, 858, 847, 815, 809, 
               803, 794, 789, 785, 783, 778, 
               764, 755, 751, 740, 737, 730, 
               691, 677, 652, 650, 587, 585, 
               583, 568, 546, 541, 540, 538, 
               531, 527, 506, 493, 457, 435, 
               430, 427, 422, 422, 414, 404, 
               400, 394, 387, 384, 374, 371, 
               369, 369, 368, 365, 363, 337, 
               336, 328, 325, 316, 314, 306, 
               282, 277, 230, 227, 212, 199, 
               179, 173, 171, 168, 136, 125, 
               124, 95, 92, 88, 85, 70, 68, 
               61, 60, 59, 44, 43, 28, 23, 
               13, 12];

const player2 = [12, 20, 30, 32, 35, 37, 63,
                 72, 83, 85, 96, 98, 98, 118, 
                 122, 125, 129, 132, 140, 144, 
                 150, 164, 184, 191, 194, 198, 
                 200, 220, 228, 229, 229, 236, 
                 238, 246, 259, 271, 276, 281, 
                 283, 287, 300, 302, 306, 307, 
                 312, 318, 321, 325, 341, 341, 
                 341, 344, 349, 351, 354, 356, 
                 366, 369, 370, 379, 380, 380, 
                 396, 405, 408, 417, 423, 429, 
                 433, 435, 438, 441, 442, 444, 
                 445, 445, 452, 453, 465, 466, 
                 467, 468, 469, 471, 475, 482, 
                 489, 491, 492, 493, 498, 500, 
                 501, 504, 506, 508, 523, 529, 
                 530, 539, 543, 551, 552, 556, 
                 568, 569, 571, 587, 591, 601, 
                 602, 606, 607, 612, 614, 619, 
                 620, 623, 625, 625, 627, 638, 
                 645, 653, 661, 662, 669, 670, 
                 676, 684, 689, 690, 709, 709, 
                 710, 716, 724, 726, 730, 731, 
                 733, 737, 744, 744, 747, 757, 
                 764, 765, 765, 772, 773, 774, 
                 777, 787, 794, 796, 797, 802, 
                 805, 811, 814, 819, 819, 829, 
                 830, 841, 842, 847, 857, 857, 
                 859, 860, 866, 872, 879, 882, 
                 895, 900, 900, 903, 905, 915, 
                 918, 918, 922, 925, 927, 928, 
                 929, 931, 934, 937, 955, 960, 
                 966, 974, 982, 988, 996, 996];

//             120, 50, 25, 5
//              1    2   4  6        
let ranked3 = [100, 100, 50, 40, 40, 20, 10];
let player3 = [5, 25, 50, 120];

function climbingLeaderboard(ranked, player) {
    // Write your code here
    let result = [];
    let playerRank = 1;
    let lastScore;
    let lastGame;
    let game;
    let lastPIndex = player.length - 1;
    let lastRIndex = ranked.length - 1;
    const lastPlace = new Set(ranked).size;
    let count = 0;
    let count2 = 0;
    let previewIndex = 0;

    //console.log('RankedList: ' + ranked)
    //console.log('PlayerList: ' + player)

    playerGame:
    for(let i = lastPIndex; i >= 0; i--){
        game = player[i]
        count++
        console.log('')
        console.log('Player: ' + count + '   ' + 'Value: ' + game + '   ' + 'Index: ' + i + ' / ' + lastPIndex)

        if (game === lastGame){
            console.log('1 game: ' + game + ' = ' + lastGame + ' :lastgame' + '   Place: ' + playerRank)
            result.unshift(playerRank)
            //previewIndex = lastRIndex
            continue
        }
        if (game < ranked[lastRIndex]){
            console.log('2 game: ' + game + ' < ' + ranked[lastRIndex] + ' :lastIndex' + '   Place: ' + (lastPlace + 1))
            result.unshift(lastPlace + 1)
            previewIndex = lastRIndex
            continue
        }
        if(game === ranked[lastRIndex]){
            console.log('3 game: ' + game + ' = ' + ranked[lastRIndex] + ' :lastIndex' + '   Place: ' + lastPlace)
            result.unshift(lastPlace)
            previewIndex = lastRIndex
            continue
        }
        //playerRank = 1;
        count2 = 0;
        scoreRanked:
        for(let j = previewIndex; j <= lastRIndex; j++){
            let score = ranked[j]
            count2++
            console.log('Rank:   ' + count2 + '   ' + 'Value: ' + score + '   ' + 'Index: ' + j + ' / ' + lastRIndex)
            if(score == lastScore && count2 > 1){
                console.log('Skip Score: ' + score + ' = ' + lastScore + ' :lastScore' + ' e ' + 'Count: ' + count2 + ' > ' + '1 ' +  '   Place: ' + playerRank + '   Index: ' + j)
                //previewIndex = j
                continue
            } else if(game < score){
                console.log('R++ Game: ' + game + ' < ' + score + ' :Score' + '   Place: ' + (playerRank + 1) + '   Index: ' + j)
                playerRank++
            } else if(game == score){
                console.log('Push Game: ' + game + ' = ' + score + ' :Score' + '   Push Place: ' + (playerRank) + '   Index: ' + j)
                lastGame = game;
                lastScore = score;
                previewIndex = j;
                result.unshift(playerRank)
                continue playerGame
            } else if (game > score && count2 > 2){
                console.log('Push Game: '+ game + ' > ' + score + ' :Score' + ' e ' + 'Count: ' + count2 + ' > 2' + '   Push Place: ' + (playerRank + 1) + '   Index: ' + j)
                lastGame = game;
                lastScore = score;
                previewIndex = j;
                result.unshift(playerRank)
                continue playerGame
            } else if (game > score){
                console.log('Push Game: '+ game + ' > ' + score + ' :Score' + '   Push Place: ' + playerRank + '   Index: ' + j)
                lastGame = game;
                lastScore = score;
                previewIndex = j;
                result.unshift(playerRank)
                continue playerGame
            }
            lastGame = game;
            lastScore = score;
            previewIndex = j;
        }
    }
    console.log(JSON.stringify(result))
    return result
}
console.log('')
//console.log(climbingLeaderboard(ranked1, player1))
console.log('')
//console.log(climbingLeaderboard(ranked2, player2))
console.log('')
console.log(climbingLeaderboard(ranked3, player3))
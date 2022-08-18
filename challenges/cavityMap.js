let grid1 = ['1112', '1912', '1892', '1234'];

function cavityMap(grid) {
    // Write your code here
    let result = grid;
    let sub;
    let top;
    let bot;
    let left;
    let right;
    let current;

    for(let i = 1, size = result.length - 1; i < size; i++){
        for(let j = 1; j < result[i].length - 1; j++){
            current = result[i][j];
            top = result[i - 1][j];
            bot = result[i + 1][j];
            left = result[i][j - 1];
            right = result[i][j + 1];
            console.log('current', current, '  top', top, '  bot', bot, '  left', left, '  right', right)
            if(current > top && current > bot && current > left && current > right){
                console.log('true')
                console.log(current)
                sub = result[i].split('');
                sub[j] = 'X';
                result[i] = sub.join('');
            }
        }
    }
    console.log(result)
    return result
}

cavityMap(grid1)
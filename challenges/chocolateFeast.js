/*
 * Complete the 'chocolateFeast' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER c
 *  3. INTEGER m
 */



function chocolateFeast(n, c, m) {
    // Write your code here
    let balance = n;
    let price = c;
    let pack = m;
    let result = 0;
    let bought = Math.trunc(balance / price);
    let boughtRest = 0;
    let after = 0;
    let afterRest = 0;
    let bonus = 0;
    
    if (bought >= pack){
        bonus = Math.trunc(bought / pack);
        boughtRest = bought % pack;
    }

    console.log('balance', balance, '  price', price, '  pack', pack, '  bonus', bonus, '  bought', bought, '  rest', boughtRest)
    if((bonus + boughtRest) >= pack){ 
        after = Math.trunc((bonus + boughtRest) / pack);
        result = bonus + after + bought;
        console.log('   after', after)
        while (after >= pack) {
            console.log('   after', after)
            after = Math.round(after / pack);
            result += after
        }
        //result = bonus + after + bought;
        //console.log(typeof result)
        return result
    }
    console.log('   bonus', bonus, '  bought', bought,  '  pack', pack,'  after', after, '  boughtRest', boughtRest)

    result = bonus + bought;
    //console.log(typeof result)

    return result
}


//console.log(chocolateFeast(31371, 40, 4507))
console.log(chocolateFeast(43203, 60, 5))
console.log('EXPECTED 899')

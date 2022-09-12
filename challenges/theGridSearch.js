let g1 = ['7283455864',
          '6731158619',
          '8988242643',
          '3830589324',
          '2229505813',
          '5633845374',
          '6473530293',
          '7053106601',
          '0834282956',
          '4607924137'];

let p1 = ['9505',
          '3845',
          '3530'];

let g2 = ['400453592126560',
          '114213133098692',
          '474386082879648',
          '522356951189169',
          '887109450487496',
          '252802633388782',
          '502771484966748',
          '075975207693780',
          '511799789562806',
          '404007454272504',
          '549043809916080',
          '962410809534811',
          '445893523733475',
          '768705303214174',
          '650629270887160'];

let p2 = ['99',
          '99'];

let g3 = ['123412',
          '561212',
          '123634',
          '781288'];

let p3 = ['12',
          '34'];

function gridSearch(G, P) {
    // Write your code here
    let count = 0;
    let result;
    let rSize = G.length;
    let cSize = G[0].length;
    let last = 0;
    
    // console.log(rSize,cSize)
    for(let row = 0; row <= rSize - P.length; row++){
        let currentRow = G[row];
        // console.log(currentRow.includes(P[0]))
            if(currentRow.includes(P[0])){
                console.log(row)
                console.log(currentRow.indexOf(P[0], last))
                let colIndex = currentRow.indexOf(P[0], last);
                for(let pRow = 0; pRow < P.length; pRow++){
                    console.log(G[row+pRow].indexOf(P[pRow]))
                    if(G[row+pRow].indexOf(P[pRow]) === colIndex){
                        count++
                        continue
                    }
                    
                    console.log(count)
                    count = 0;
                    last = colIndex + 1;
                    
                    // break
                    
                }
            }
            console.log(P.length)
            if(count === P.length) return 'YES'
        console.log(count)
    }
    return 'NO'
}

// console.log(gridSearch(g1,p1))
// console.log(gridSearch(g2,p2))
console.log(gridSearch(g3,p3))
// Complete the flatlandSpaceStations function below.

let n1 = 5; // num of cities
let c1 = [0,4] // index of cities with space station

function flatlandSpaceStations(n, c) {
    let result = 0;
    let distance;
    for (let citie = 0; citie < n; citie++){
        distance = n;
        console.log('citie:', citie)
        for (const spaceStation of c){
            distance = distance < Math.abs(spaceStation - citie) ? distance : Math.abs(spaceStation - citie);
            //console.log('  distance:', distance)
            console.log('  space:', spaceStation, ' citie:', citie)
            console.log('   diff:', Math.abs(spaceStation - citie))
        }
        result = result > distance ? result : distance;
    }
    return result
}
console.log(flatlandSpaceStations(n1, c1))
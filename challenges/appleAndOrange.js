let start = 2;
let end = 3;
let apple = 1;
let orange = 5;
let apples = [2];
let oranges = [-2];
let result = [];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let houseStart = s;
    let houseEnd = t;
    let appleLocation = a;
    let orangeLocation = b;
    let applePosition = 0;
    let orangePosition = 0;
    let applesOnHouse = 0;
    let orangesOnHouse = 0;

    for (const appleDistance of apples){
        applePosition = appleLocation + appleDistance;
        if (applePosition >= houseStart && applePosition <= houseEnd){
            applesOnHouse++;
        }
    }
    for (const orangeDistance of oranges){
        orangePosition = orangeLocation + orangeDistance;
        console.log(orangePosition)
        console.log(orangeLocation)
        console.log(orangeDistance)
        if (orangePosition >= houseStart && orangePosition <= houseEnd){
            orangesOnHouse++;
        }
    }
    console.log(applesOnHouse);
    console.log(orangesOnHouse);
    result.push(applesOnHouse);
    result.push(orangesOnHouse)
    return result
}

console.log(countApplesAndOranges(start, end, apple, orange, apples, oranges));
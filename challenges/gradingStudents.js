let test1 = [73, 67, 38, 33];

function gradingStudents(grades) {
    // Write your code here
    let result = [];

    for(const grade of grades){
        let lastDigit = grade % 10;
        let difference = 0;

        if(grade < 38){
            result.push(grade);
        } else if (lastDigit >= 3 && lastDigit < 5){
            difference = 5 - lastDigit;
            result.push(grade + difference);
        } else if (lastDigit >= 8 && lastDigit <= 9){
            difference = 10 - lastDigit;
            result.push(grade + difference);
        } else {
            result.push(grade);
        }
    }
    return result
}

console.log(gradingStudents(test1))
function getGrade(score) {
    let grade;
    // Write your code here
    if (score < 0 || score > 30) return 'Invalid Score';
    grade = score > 25 ? 'A'
          : score > 20 ? 'B'
          : score > 15 ? 'C'
          : score > 10 ? 'D'
          : score > 5 ? 'E'
          : 'F';
    return grade;
}
console.log(getGrade(11))
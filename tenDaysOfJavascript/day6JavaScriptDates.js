// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
// dateString = MM/DD/YYYY
function getDayName(dateString) {
    let dayName;
    // Write your code here
    let day = dateString[3] + dateString[4];
    let month = (dateString[0] + dateString[1]) - 1;
    let year = dateString[6] + dateString[7] + dateString[8] + dateString[9];
    let date = new Date(year, month, day);
    console.log(year, month, day)
    let convertList = ['Sunday',
                       'Monday',
                       'Tuesday',
                       'Wednesday',
                       'Thursday',
                       'Friday',
                       'Saturday'];
    console.log(date)
    console.log(convertList[date.getDay()])
    dayName = convertList[date.getDay()];
    return dayName;
}
console.log(getDayName('10/11/2009'))
console.log(getDayName('11/10/2010'))
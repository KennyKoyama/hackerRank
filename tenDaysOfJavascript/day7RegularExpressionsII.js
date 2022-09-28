function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    let re = /^[MDE]r\.[a-zA-Z]*[^\.]$|^Mrs\.[a-zA-Z]*[^\.]$|^Ms\.[a-zA-Z]*[^\.]$/;
    
    /*
     * Do not remove the return statement
     */
    return re;
}
console.log('Mr.X'.match(regexVar()) !== null)
console.log('Mr. X'.match(regexVar()) !== null)
console.log('Mr.'.match(regexVar()) !== null)
console.log('Er.Dr.'.match(regexVar()) !== null)
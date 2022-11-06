/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    let isEven = (value) => value % 2 === 0;
    let modified = nums.map((num) => isEven(num) ? num * 2 : num * 3);
    return modified;
}

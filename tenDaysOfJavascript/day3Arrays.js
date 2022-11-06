/**
*   Return the second largest number in the array.
**/

function getSecondLargest(nums) {
    // Complete the function
    let first = 0;
    let second = 0;
    nums.sort((a,b) => a - b);
    for (const number of nums) {
        if (number > first) {
            second = first;
            first = number;
        }
    }

    return second
}

console.log(getSecondLargest([2, 3, 6, 6, 5]))
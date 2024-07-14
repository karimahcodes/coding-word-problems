/*
136. Single Number

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {

    //sort array nums in ascending order
    nums.sort()

    // loop through nums array to compare current and next #

    for (let i = 0; i < nums.length; i++) {
        let currentInteger = nums[i]
        let nextInteger = nums[i + 1]
        // if 2nd integer !== 1st integer
        if (currentInteger !== nextInteger) {

            //return 1st integer
            return currentInteger;
        }

    }

};

//error:
    //need to account for last number 
    //need to incorporate a counter to account for duplicates being present, otherwise
    
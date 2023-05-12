// Asked in "Python interview with a LinkedIn engineer: Matching pairs": ⁡⁣⁢⁢https://youtu.be/wBXZD436JAg⁡

/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;
const expected1 = [0, 2];
// Explanation: nums[0] + nums[2] = 2 + 7 = 9. Return order doesn't matter.

const nums2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
const expected2 = [2, 4];
// Explanation: nums[2] + nums[4] = 2 + 4 = 6.

const nums3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
const expected3 = [1, 6];
// Explanation: nums[1] + nums[6] = 8 + (-2) = 6.

/*****************************************************************************/
/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */
function twoSum(nums, targetSum) {
    //Code goes here
    const newarr = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === targetSum) {
                newarr.push(i)
                newarr.push(j)
            }
        }
    }
    return newarr
}

console.log("Answer:", twoSum(nums1, targetSum1), "Expected:", expected1);
console.log("Answer:", twoSum(nums2, targetSum2), "Expected:", expected2);
console.log("Answer:", twoSum(nums3, targetSum3), "Expected:", expected3);
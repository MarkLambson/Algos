// From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8
/* 
Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
You can assume there is always a valid solution
These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
*/

const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
const expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

// 6 occurs 6 times, 3 occurs 3 times, 2 occurs 2 times, 1 occurs 1 time.
const nums3 = [1, 6, 3, 3, 6, 6, 3, 6, 2, 2, 6, 6];
const k3 = 3;
const expected3 = [6, 3, 2];

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * nums.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */
function kMostFrequent(nums, k) {
    let map = {}
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1
        }
        else {
            map[nums[i]]++
        }
    }
    let j = 0
    while (j < k) {
        let max = null
        let idx = null
        for (key in map) {
            if (map[key] > max) {
                max = map[key]
                idx = key
            }
        }
        arr.push(idx)
        map[idx] = 0
        j++
    }
    return arr
}
console.log("Answer:", kMostFrequent(nums1, k1), "Expected:", expected1);
console.log("Answer:", kMostFrequent(nums2, k2), "Expected:", expected2);
console.log("Answer:", kMostFrequent(nums3, k3), "Expected:", expected3);
/*****************************************************************************/
/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

function oddOccurrencesInArray(nums) {
    let map = {};
    let value = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] in map) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }

    for(let j in map) {
        if(map[j] % 2 != 0) {
            value = j;
        }
    }

    return value;
}

console.log(oddOccurrencesInArray(nums1));
console.log(oddOccurrencesInArray(nums2));
console.log(oddOccurrencesInArray(nums3));
console.log(oddOccurrencesInArray(nums4));
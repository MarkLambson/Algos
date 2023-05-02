/*
Notes:
Selection sort is an effective and efficient sort algorithm based on comparison operations.
It adds one element in each iteration.
You need to select the smallest element in the array and move it to the beginning of the array by swapping with the front element.
You can also accomplish this by selecting the most potent element and positioning it at the back end.
In each iteration, selection sort selects an element and places it in the appropriate position.
*/

/* 
https://visualgo.net/en/sorting

Selection sort works by iterating through the list, finding the minimum
value, and moving it to the beginning of the list. Then, ignoring the first
position, which is now sorted, iterate through the list again to find the
next minimum value and move it to index 1. This continues until all values
are sorted.
Unstable sort.

Time Complexity
- Best: O(n^2) quadratic.
- Average: O(n^2) quadratic.
- Worst: O(n^2) quadratic.
Space: O(1) constant.
Selection sort is one of the slower sorts.
- ideal for: pagination, where page 1 displays 10 records for example,
you run selection sort for 10 iterations only to display the first 10
sorted items.
*/


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
//⁡⁣⁢PSEUDO CODE:⁡
//nested loop
//outer loop (⁡⁣⁢⁣i⁡) keeps track of where we are
//inner loop (⁡⁣⁣⁢j⁡) keeps track of where minimum
//create a ⁡⁢⁣⁣for⁡ loop
//create a ⁡⁢⁣⁢min var⁡, and a ⁡⁢⁣⁢min⁡ ⁡⁢⁣⁢idx var⁡
//inside ⁡⁣⁣⁢j⁡ loop have a conditional that compares for min
//inside the ⁡⁢⁢⁢if⁡, we have found a smaller val, so make that new
//after ⁡⁣⁣⁢j⁡ loop swap (if current and minimum are different)

const selectionSort = (nums = []) => {
    for (let i = 0; i < nums.length; i++) {
        let min = nums[i]
        let minIdx = i
        for (let j = i; j < nums.length; j++) {
            if (nums[j] < min) {
                min = nums[j]
                minIdx = j
            }
        }
        if (nums[i] != nums[minIdx]) {
            [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]]
        }
        return nums
    }
}
console.log("Answer:", selectionSort(numsRandomOrder), "Expected:", selectionSort(expected), "Correct! :)");
console.log("Answer:", selectionSort(numsReversed), "Expected:", selectionSort(expected), "Correct :)");
/*****************************************************************************/
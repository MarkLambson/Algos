/*
-⁡⁣⁢⁣ Visualization with playing cards⁡ (scroll down):
https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort

- ⁡⁣⁢⁣Array / bar visualization⁡:
https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

- Stable sort, efficient for small data sets or mostly sorted data sets.
Time Complexity
- Best: O(n) linear when array is already sorted.
- Average: O(n^2) quadratic.
- Worst: O(n^2) quadratic when the array is reverse sorted.
The first two elements of the array are compared in insertion sort.
9 is greater than 2 - they are not in the ascending order and 9 is not at its correct position.
Swap 9 and 2.
So, for now 2 is stored in a sorted sub-array.
Now, move to the next two elements and compare them
Space: O(1) constant.
- this sort splits the array into two portions (conceptually, not literally).
- the left portion will become sorted, the right portion (that hasn't been iterated over yet) is unsorted.

// can ⁡⁣⁣⁢shift⁡ OR ⁡⁢⁣⁣swap⁡ target element until it reaches desired position

// ⁡⁣⁣⁢shifting⁡ steps:
1. consider the first item as sorted
2. move to the next item
3. store current item in a temp variable (to make this position available to shift items)
4. if item to the left of current is greater than current item, shift the left item to the right.
5. repeat step 4 as many times as needed
6. insert current item
7. move to the next item and repeat
// swap steps:
1. consider the first item as sorted
2. move to the next item
4. if item to left of current item is less than current, swap
5. repeat step 4 until item to left is less than current item
6. move to next item and repeat
⁡*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given array in-place.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
const insertionSort = (nums) => {
    // Code goes here
    //Start iterating over array from the second element 
    for (let i = 1; i < nums.length; i++) {
        //Store the current element in a temp variable
        let temp = nums[i]
        //Initialize a variable j to iterate backwards from the current element
        let j = i - 1
        // White statement j is greater than or equal to 0 && the element at index j is greater than the temp
        while (j >= 0 && nums[j] > temp) {
            //Shift the element at index j to the right
            nums[j + 1] = nums[j]
            //Decrement j
            j--
        }
        //Insert the temp variable (current) to it's correct position (empty slot)
        nums[j + 1] = temp
    }
    // Return the sorted array
    return nums
}
console.log(insertionSort(numsRandomOrder));
console.log(insertionSort(numsReversed));
console.log(insertionSort(numsOrdered));
//-----------------------------------------------------------------------------------------------------------------//
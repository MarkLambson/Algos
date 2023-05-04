/* 
Efficiently combine two already sorted multiset arrays 
into an array containing the sorted set intersection of the two.

Output: only the shared values between the two arrays (deduped).

Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

const numsA4 = [0, 1, 2, 2, 2, 7, 9, 9, 9];
const numsB4 = [1, 3, 5, 7, 9];
const expected4 = [1, 7, 9];

const numsA5 = [0, 100, 200, 200, 200, 7, 9, 9, 9];
const numsB5 = [100, 3, 5, 7, 9];
const expected5 = [7, 9, 100];
/**
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
    let map = {}
    let map2 = {}
    let arr = []
    for (let i = 0; i < sortedA.length; i++) {
        if (sortedA[i] in map) {
            map[sortedA[i]]++
        } else {
            map[sortedA[i]] = 1
        }
    }
    for (let j = 0; j < sortedB.length; j++) {
        if (sortedB[j] in map2) {
            map2[sortedB[j]]++
        } else {
            map2[sortedB[j]] = 1
        }
    }
    for (let obj in map) {
        for (let obj2 in map2) {
            if (obj == obj2) {
                arr.push(parseInt(obj2))
                // console.log(obj)
                // console.log(obj2)
            }
        }
    } 
    return arr
}
console.log(orderedIntersection(numsA1, numsB1))
console.log(orderedIntersection(numsA2, numsB2))
console.log(orderedIntersection(numsA3, numsB3))
console.log(orderedIntersection(numsA4, numsB4))
console.log(orderedIntersection(numsA5, numsB5))
/*****************************************************************************/


// module.exports = { orderedIntersection };
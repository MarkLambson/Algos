// recursion = the idea of having a function call itself

// EXAMPLE

// function recur(x, i=0){
//     i++
//     if (i >= 10){
//         return 0
//     } else {
//         console.log(i)
//         return x + recur(x,i)
//     }
// }
// console.log(recur(10))
//--------------------------------------------------------------------------------------------------------------------------

/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) {
    if (num < 0) {
        return 0
    }
    {
        if (num <= 1)
            return Math.floor(num);
        return Math.floor(num) + recursiveSigma(num - 1);
    }

}

console.log(recursiveSigma(num1))
console.log(recursiveSigma(num2))
console.log(recursiveSigma(num3))
/*****************************************************************************/
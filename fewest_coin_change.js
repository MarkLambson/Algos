/* 
Given an int to represent how much change is needed
calculate the fewest number of coins needed to create that change,
using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {
    var penny = 0;
    var nickel = 0;
    var dime = 0;
    var quarter = 0;
    var result = {};
    if (cents >= 25) {
        quarter = Math.floor(cents / 25);
        cents = cents % 25;
        result.quarter = quarter;
    }
    if (cents >= 10) {
        dime = Math.floor(cents / 10);
        cents = cents % 10;
        result.dime = dime;
    }
    if (cents >= 5) {
        nickel = Math.floor(cents / 5);
        cents = cents % 5;
        result.nickel = nickel;
    }
    if (cents >= 1) {
        penny = Math.floor(cents / 1);
        cents = cents % 1;
        result.penny = penny;
    }
    return result;
}
console.log("Answer: ", fewestCoinChange(cents1), "Expected answer: ", expected1)
console.log("Answer: ", fewestCoinChange(cents2), "Expected answer: ", expected2)
console.log("Answer: ", fewestCoinChange(cents3), "Expected answer: ", expected3)
console.log("Answer: ", fewestCoinChange(cents4), "Expected answer: ", expected4)
/*****************************************************************************/
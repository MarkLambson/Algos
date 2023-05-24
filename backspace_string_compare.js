/* 
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  
  # character means a backspace character.
  i.e., after processing the backspaces, are the two strings equal?
  Bonus: solve in O(n) time
*/

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##";
const T2 = "c#d#";
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} S
 * @param {string} T
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */
function backspaceStringCompare(S, T) {
    // Create an helper function that processes the string
    function processBackspaces(str) {

        // Initialize an empty array to simulate stack data structure
        const stack = [];

        // Iterate through the string
        for (let i = 0; i < str.length; i++) {

            // If the character is not a '#', push it into the stack
            if (str[i] !== '#') {
                stack.push(str[i]);
            }

            // If the character is a '#', pop the last character out of the stack
            else if (stack.length !== 0) {
                stack.pop();
            }
        }
        // Join the remaining characters in the stack to form a string and return it
        return stack.join('');
    }

    // Process backspaces for both strings and compare them
    return processBackspaces(S) === processBackspaces(T);
}
console.log("Answer:" , backspaceStringCompare(S1, T1), "Expected: " , expected1)
console.log("Answer:" , backspaceStringCompare(S2, T2), "Expected: " , expected2)
console.log("Answer:" , backspaceStringCompare(S3, T3), "Expected: " , expected3)
console.log("Answer:" , backspaceStringCompare(S4, T4), "Expected: " , expected4)
/* 
Recursively reverse a string
helpful methods:
str.slice(beginIndex[, endIndex])
returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */

function reverseStr(str) {
    if (str.length == 0) {
        return "";
    }
    var endIndex = str.slice(str.length - 1, str.length);
    var rest = str.slice(0, str.length - 1);
    var newStr = "";
    if (newStr.length != str.length) {
        return newStr = endIndex + reverseStr(rest);
    }
}
console.log("Answer: ", reverseStr(str1), "Expected Answer: ", expected1)
console.log("Answer: ", reverseStr(str2), "Expected Answer: ", expected2)
/*****************************************************************************/
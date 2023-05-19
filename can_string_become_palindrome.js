/* 
Given to me (Neil) in an interview
What is it about a string that makes it possible for it to become a palindrome?
a word, phrase, or sequence that reads the same backward as forward.

Given a string return whether or not it's possible
to make a palindrome out of the string's characters.

*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */
function canStringBecomePalindrome(str) {
    //Code goes here
    let bool = false
    let map = {}
    if (str === "") {
        return bool
    }
    for (i = 0; i < str.length; i++) {
        if (!map[str[i]]) {
            map[str[i]] = 1
        }
        else {
            map[str[i]]++
        }
    }
    let counter = 0
    for (key in map) {
        if (map[key] % 2 !== 0) {
            counter++
        }
    }
    if (counter <= 1) {
        bool = true
    }
    return bool
}


console.log("Answer:", canStringBecomePalindrome(str1), "Expected:", expected1);
console.log("Answer:", canStringBecomePalindrome(str2), "Expected:", expected2);
console.log("Answer:", canStringBecomePalindrome(str3), "Expected:", expected3);
console.log("Answer:", canStringBecomePalindrome(str4), "Expected:", expected4);
console.log("Answer:", canStringBecomePalindrome(str5), "Expected:", expected5);
console.log("Answer:", canStringBecomePalindrome(str6), "Expected:", expected6);
/*********************************************************************************/
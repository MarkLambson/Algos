/* 
    Given by Riot games. Rehash an incorrectly hashed string 
    by combining letter count occurrences and alphabetizing them.
*/

const str1 = "b70a164c32a20c10j3a15";

const expected1 = "a199b70c42j3";

/**
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */

// Create a function 'rehash' that accepts an incorrectly hashed string as input.
const rehash = (str) => {
    // Declare a new object 'letterHashCounts' to keep track of counts of each character.
    const letterHashCounts = {};

    // Declare a string 'numStr' to keep track of the count numbers in the input string.
    let numStr = "";

    // Initialize 'letter' with the first character of the input string.
    let letter = str[0];

    // Start looping over the input string from the second character.
    for (let i = 1; i < str.length; i++) {

        // Convert the current character into an integer.
        const num = parseInt(str[i]);

        // Check if the current character is a number (not NaN).
        const isNum = !isNaN(num);

        // Check if the current character is a letter (is NaN).
        const isLetter = isNaN(num);

        // If the current character is a number, append it to 'numStr'.
        if (isNum) {
            numStr += str[i];
        }

        // If the current character is a letter or if it's the last character of the string:
        if (isLetter || i === str.length - 1) {

            // Convert 'numStr' into an integer to get the count of the previous letter.
            const letterCount = parseInt(numStr);

            // If the letter already exists in 'letterHashCounts', add the new count to the existing one.
            // Otherwise, add a new entry to the object.
            if (letter in letterHashCounts) {
                letterHashCounts[letter] += letterCount;
            } else {
                letterHashCounts[letter] = letterCount;
            }
            // Update 'letter' with the current character and reset 'numStr'.
            letter = str[i];
            numStr = "";
        }
    }

    // Sort the keys of 'letterHashCounts' alphabetically.
    const alphabetized = Object.keys(letterHashCounts).sort();

    // Initialize a new string 'newHash' to build the final correctly hashed string.
    let newHash = "";

    // Loop over the sorted keys.
    for (let i = 0; i < alphabetized.length; i++) {
        // Get the current letter and its count.
        const letter = alphabetized[i];
        // Append the letter and its count to 'newHash'.
        newHash += letter + letterHashCounts[letter];
    }

    // Return the final correctly hashed string.
    return newHash;
}

console.log("Answer:" , rehash(str1), "Expected: " , expected1)
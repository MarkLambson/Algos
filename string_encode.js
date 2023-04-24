/* 
Given in an alumni interview in 2021.
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 

If final result is not shorter (such as "bb" => "b2" ),
return the original string.
  */
const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

//   BONUS
const str5 = "aaaabbcdddaaaa";
const expected5_nobonus = "a8b2c1d3";
const expected5_bonus = "a4b2c1d3a4";
/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */

function encodeStr(str) {
  var new_str = ""
  var temp = ""
  var count = 0
  temp = str[0]
  for (var i = 0; i <= str.length; i++) {
    if (str[i] == temp) {
      count += 1
    }
    else if (str[i] != temp) {
      new_str = new_str + temp + count
      count = 1
      temp = str[i]
    }
  } if (new_str.length < str.length) {
    return new_str
  }
  else
    return str
}

console.log(encodeStr(str1))
console.log(encodeStr(str2))
console.log(encodeStr(str3))
console.log(encodeStr(str4))
console.log(encodeStr(str5))
// /*****************************************************************************/
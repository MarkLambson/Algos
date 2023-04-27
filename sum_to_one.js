/*
Sum To One Digit
Implement a function sumToOne(num)​ that,
given a number, sums that number’s digits
repeatedly until the sum is only one digit. Return
that final one digit result.
Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 123456789
const expected4 = 9

const num5 = 345613764518726458
const expected5 = 6


/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {
    var str_num = num.toString()
    if (str_num.length <= 1) {
        return num
    }
    var sum = 0
    sum += parseInt(str_num[0])
    var new_num = str_num.slice(1, num.length)
    return sumToOneDigit(sum + parseInt(sumToOneDigit(new_num)))
}

console.log("Answer:", sumToOneDigit(num1), "||", "Expected Answer:", expected1)
console.log("Answer:", sumToOneDigit(num2), "||", "Expected Answer:", expected2)
console.log("Answer:", sumToOneDigit(num3), "||", "Expected Answer:", expected3)
console.log("Answer:", sumToOneDigit(num4), "||", "Expected Answer:", expected4)
console.log("Answer:", sumToOneDigit(num5), "||", "Expected Answer:", expected5)
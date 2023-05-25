/* 
Given an array of objects representing students, and a string representing a bad habit
return a "santasNaughtyList" containing the first and last names of all the people who
have the matching bad habit so that santa knows how much coal he needs.

Bonus: after solving it, make a 2nd solution to practice functional programming
with built in methods
*/

const students = [
    {
        firstName: "Alex",
        lastName: "Miller",
        habits: ["doesn't wash dishes", "falls asleep in lecture", "shows up early"],
    },
    {
        firstName: "Martha",
        lastName: "Smith",
        habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
        firstName: "Roger",
        lastName: "Anderson",
        habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
        firstName: "Rick",
        lastName: "James",
        habits: ["shows up early", "helps peers", "washes dishes"],
    },
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["Alex Miller", "Roger Anderson"];

const badHabit2 = "shows up late";
const expected2 = ["Martha Smith", "Roger Anderson"];

const badHabit3 = "vapes too much";
const expected3 = [];

/*****************************************************************************/
/**
 * Finds a list of people whose habits contain the given bad habit.
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */
function santasNaughtyList(persons, badHabit) {
    let arr = []
    for (let i = 0; i < persons.length; i++) {
        let habits = persons[i].habits
        for (let h = 0; h < habits.length; h++) {
            if (habits[h] === badHabit) {
                arr.push(persons[i].firstName + " " + persons[i].lastName)
            }
        }
    }
    return arr
}
console.log("Answer:", santasNaughtyList(students, badHabit1), "Expected:", expected1)
console.log("Answer:", santasNaughtyList(students, badHabit2), "Expected:", expected2)
console.log("Answer:", santasNaughtyList(students, badHabit3), "Expected:", expected3)

/**
 * Finds a list of people whose habits contain the given bad habit. 
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */
function santasNaughtyListFunctional(persons, badHabit) {
    return persons.filter(vape => vape.habits.includes(badHabit)).map(eggs => (eggs.firstName + " " + eggs.lastName))
}
console.log("Answer:", santasNaughtyListFunctional(students, badHabit1), "Expected:", expected1)
console.log("Answer:", santasNaughtyListFunctional(students, badHabit2), "Expected:", expected2)
console.log("Answer:", santasNaughtyListFunctional(students, badHabit3), "Expected:", expected3)
/************************************************************************************************/
/* 
Given a search criteria object, whose values will only be
primitives (ints, strings, booleans) and a list of objects.
return any object that matches all the key value pairs in the search
criteria object.

Bonus: write a 2nd solution using built in methods to practice functional
programming.
*/

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
};

const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria2 = {
    lastName: "Smith",
};

const expected2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

/**
 * Finds the objects that match the given search criteria.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} criteria
 * @param {Array<Object>} collection
 * @returns {Array<Object>} The found objects.
 */
function findObjects(criteria, collection) {
    //Code goes here
    let result = []

    for (let obj of collection) {
        let isMatch = true

        for (let key in criteria) {
            if (obj[key] !== criteria[key]) {
                isMatch = false
                break;
            }
        }
        if (isMatch) {
            result.push(obj)
        }
    }
    return result

}
console.log("Answer:", findObjects(searchCriteria1, items), "Expected:", expected1);
console.log("Answer:", findObjects(searchCriteria2, items), "Expected:", expected2);

/**
 * - Time: O(?).
 * - Space: O(?).
 */
// function findObjectsFunctional(criteria, collection) {
//     //Code goes here
// }
// console.log(findObjectsFunctional(searchCriteria1, items));
// console.log(findObjectsFunctional(searchCriteria2, items));
//----------------------------------------------------------------------------------//
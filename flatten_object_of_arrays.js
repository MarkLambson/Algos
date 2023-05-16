//one-dimensional array is a data structure that contains a set of elements of the same data type.
/* 
  * Takes an object containing arrays of objects and places all the nested objects into a new one-dim array that only contains id & type.
  * Bonus: Write a 2nd solution focusing on functional programming using built in methods.
*/

const object1 = {
    closedCreditMemos: [
        { id: 106, type: "credited" },
        { id: 108, type: "credited" },
    ],

    closedDeliveryOrders: [
        { id: 110, type: "delivered" },
        { id: 115, type: "delivered" },
    ],

    closedPickupOrders: [
        { id: 112, type: "pickup" },
        { id: 117, type: "pickup" },
    ],

    openCreditMemos: [],

    openDeliveryOrders: [
        {
            id: 123,
            type: "delivery",
            gateCode: "#2552",
        },
        {
            id: 153,
            type: "delivery",
            instructions: "Place in secure delivery box.",
        },
    ],

    openPickupOrders: [
        {
            id: 163,
            type: "pickup",
        },
    ],

    returnPickupOrders: [],
};

const expected1 = [
    { id: 106, type: "credited" },
    { id: 108, type: "credited" },
    { id: 110, type: "delivered" },
    { id: 115, type: "delivered" },
    { id: 112, type: "pickup" },
    { id: 117, type: "pickup" },
    { id: 123, type: "delivery" },
    { id: 153, type: "delivery" },
    { id: 163, type: "pickup" },
];

/**
 * Takes an object containing arrays of objects and places all the nested
 * objects into a new one-dim array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} o Containing arrays of objects.
 * @returns {Object[]} An array of objects.
 */
function flattenObjectOfArrays() {
    //Code goes here
    const newArr = []

    for (item1 in object1) {

        for (let i = 0; i < object1[item1].length; i++) {
            let final = object1[item1][i]
            let tempMap = {}

            tempMap.type = final.type
            tempMap.id = final.id

            newArr.push(tempMap)
        }
    }
    return newArr
}

console.log("Answer:", flattenObjectOfArrays(object1), "Expected:", expected1);
/*****************************************************************************/



//Functional code below, one liner
//.map is extremely helpful for functional and one liners

const functionalFlattenObjectOfArrays = (object1) => Object.values(object1).flat().map(({type, id}) => ({type, id}))

console.log("Functional Answer:", functionalFlattenObjectOfArrays(object1), "Functional Expected:", expected1);
/*****************************************************************************/
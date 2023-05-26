/* 
Amazon is developing a new song selection algorithm that will sync with the
duration of your bus ride.
Given a positive integer representing a duration of a bus ride and
an array of positive integers representing song times,
find a pair of two songs where the song pair ends 30 seconds before the bus ride ends.
return an array of the song indexes or [-1, -1] if no pair is found.
If there are multiple song pairs that match, return the pair that contains the
longest song. The order of the returned indexes doesn't matter.
*/

const busDuration1 = 300;

const songDurations1 = [70, 120, 200, 45, 210, 40, 60, 50];

const expected1 = [4, 6]; // 210, 60

/* Explanation:
There are multiple pairs that add up to 30 seconds before the bus duration.
The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
*/

const busDuration2 = 300;
const songDurations2 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
const expected2 = [3, 6]; // 230, 40
/* Explanation:
This is the pair with the longest song.
*/

const busDuration3 = 300;
const songDurations3 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
const expected3 = [-1, -1]; // not found.

/**
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} busDuration Seconds.
 * @param {number} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no
 *    pair is found.
 */
function musicRuntime(busDuration, songDurations) {
    const arr = []
    let max = songDurations[0]
    let maxIdx = 0
    for (let i = 0; i < songDurations.length; i++) {
        if (songDurations[i] > max) {
            max = songDurations[i]
            maxIdx = i
        }
        for (let j = i + 1; j < songDurations.length; j++) {
            if (songDurations[j] > max) {
                max = songDurations[j]
                maxIdx = j
            }
            if (songDurations[i] + songDurations[j] === busDuration - 30) {
                arr.push([i, j])
            }
        }
    }
    for (let h = 0; h < arr.length; h++) {
        for (let q = 0; q < arr[h].length; q++) {
            if (arr[h][q] === maxIdx) {
                return arr[h]
            }
        }
    }
    return arr
}
console.log("Answer:", musicRuntime(busDuration1, songDurations1), "Expected:", expected1)
console.log("Answer:", musicRuntime(busDuration2, songDurations2), "Expected:", expected2)
console.log("Answer:", musicRuntime(busDuration3, songDurations3), "Expected:", expected3)
/*******************************************************************************************/
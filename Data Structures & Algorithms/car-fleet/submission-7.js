class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let fleetCount = 0;
        let cars = [];
        for (let i = 0; i < position.length; i++) {
            cars.push({ position: position[i], speed: speed[i] });
        }
        cars.sort((a, b) => a.position - b.position);

        let hourStack = [];
        for (let i = position.length - 1; i >= 0; i--) {
            const hoursCurr = (target - cars[i].position) / cars[i].speed;
            // const hoursNext =
            //     position.length - 1 !== i
            //         ? (target - cars[i + 1].position) / cars[i + 1].speed
            //         : undefined;
            console.log(hoursCurr, hourStack)
            if (hourStack.length === 0 || hoursCurr > hourStack[hourStack.length - 1]) {
                hourStack.push(hoursCurr)
                fleetCount++;
            }
        }

        return fleetCount;
    }
}

/**
 * target = 10, position = [4,1,0,7], speed = [2,2,1,1]
 *
 *
 *  -    -         10
 *  1+3+3+3   4 + 2 + 2 + 2
 *  - -     -       -
 *  1 2.    2.      1
 *
 *
 * 10 + 2*1
 * 8 + 4*1
 * 0 + 1*12
 * 5 + 1*3
 * 3 + 3*3
 *

  0       2      4
  2 * 5   3 *4   1 * 10





-   -  -   -  -
0   3  5   8  10
12  3  7   1  1

0 + 10*1    1 + 2*4,5    4 + 2*3   7 + 1*3

(target - position) / speed = hours

if ( i+1 <= hours || !i+1 ) no count (is part of same fleet)
else if increase count of fleet


hmm, i forgot that the cars are in a certain order and just becasue cars need the same speed doesnt mean they can be ause there might be a car in front that prevents it


so my idea would be, combine position and speed into {position: .. , speed: ..} objects, and the nwe sort them fter position

then we can push it like wanted


hmmm nevermind, because there could be a situation like this

  0       2      4
  2 * 5   3 *4   1 * 10


 oka, i am out of ideas. i know maybe use staks but no idea jumps into my mind


 */

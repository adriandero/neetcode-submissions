class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = [];
        const pairs = position.map((p, i) => [p, speed[i]]);
        pairs.sort((a, b) => b[0] - a[0]);

        for(let i = 0; i < position.length; i++) {

            const timeNeeded = (target - pairs[i][0]) / pairs[i][1];
            if(stack.length === 0 || timeNeeded > stack[stack.length-1]) stack.push(timeNeeded); continue;

        }
        
        return stack.length;
    }
}

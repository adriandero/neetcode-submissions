class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const out = new Array(temperatures.length).fill(0);
        const stack = []; //[i, tmp]

        for(let i = 0; i < temperatures.length; i++) {
            const currTemp = temperatures[i];

            while(stack.length > 0 &&  currTemp > stack[stack.length-1][1]) {
                const [stackIdx, stackVal] = stack.pop();
                out[stackIdx] = i-stackIdx;
            }

            stack.push([i, currTemp]);
        
        }
        
        return out;
    }
}

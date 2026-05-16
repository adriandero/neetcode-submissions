class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const final = new Array(temperatures.length).fill(0);
        let tempIdx = [];

        for (let i = 0; i < temperatures.length; i++) {
            while (temperatures[tempIdx[tempIdx.length - 1]] < temperatures[i]) {
                let curr = tempIdx.pop();
                final[curr] = i - curr;
            }
            tempIdx.push(i);
        }

        return final;
    }
}

/**
 * since i know we are working on stack problems i can probably use stacks as a help here
 *
 * 30
 * 30
 *
 * 38
 * pop 30 -> hotDayStackLengthStart - i of pop
 * 
 * 
 *  * 
 * 4 3 1 _
 * 1 2 3 -- mhh this is wrong way around - need to save them temporarily and lopp through them again
 * 3 2 1 
 * 
 * 5
 * 1 2 3 1
 * 
 * 6 4 3 
 * 1 2 3 
 * 3 2 1 1 3 2 1
 * 
 * 8
 * 1 2 3 1 1 2 3 0 -- hmm oh shit, what do i do with the 0 values when there is no more higher temp coming. this could also be somewhere in the middle, so just having a loop at the end that appends 0s doesnt work
 * 
 * maybe i can work with key:value pairs key=temp, value = where position of it. then i dont need to push and pop to a final list, but i can put it direcly into the slot it was in
 *
 * 4 3 1 5 6 4 3 8
 * tempStack.push(4, 3, 1) until 5 because 5 > tempStack[tempStack.length-1] 
 * 4:0 3:1 1:2 
 * then pop one by one and substract originalTempStackLength - tempStack[i]. push that value to final[tempStack[i].value]
 *  3 2 1
 * 
 * 5:3 
 * 
 * 3 2 1 1 
 * 
 * 6:4 4:5 3:6
 * 
 * 3 2 1 1 3 2 1 0
 * 
 * 

 * 
 * 
 * 
 * 
 * 
 * 
 * i know that i will have a stack that will pop if i is > than top of stack, and it will pop until i is no longer > than stack.
 * then there will be a result stack, that pushes the resulting days which will be i of last
 */

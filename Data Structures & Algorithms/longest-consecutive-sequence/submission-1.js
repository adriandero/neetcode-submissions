class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;

        for(const num of numSet) {
            if(numSet.has(num-1)) continue;

            let consLength = 1;
            while(numSet.has(num+consLength)) {
                consLength++;
            }

            if(consLength > longest) longest = consLength;
        }
        return longest;
    }
    
}

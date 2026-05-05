class Solution {

   

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for(let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            const sumIdx = map.get(complement);

            const isTarget = map.has(complement);

            if(isTarget) {
                return [sumIdx, i]
            }
            map.set(nums[i], i);
        }


    }

}
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for(let i = 0; i < nums.length; i++) {


            const hasCompliment = map.has(target - nums[i]);
            if(hasCompliment) return [i, map.get(target - nums[i])]

            map.set(nums[i], i)
        }

        return [-1, -1]
    }

}

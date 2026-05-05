class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const maps = new Map();

        for (let i = 0; i < nums.length; i++) {
            const sub = target - nums[i];
            if (maps.has(sub)) return [maps.get(sub), i];

            maps.set(nums[i], i);
        }

        return [-1, -1];
    }
}

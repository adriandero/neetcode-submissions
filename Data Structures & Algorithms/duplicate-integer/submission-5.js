class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let array = [];
        for (let i = 0; i < nums.length; i++) {
            if (array[nums[i]] !== undefined) return true;
            array[nums[i]] = nums[i];
        }
        return false;
    }
}

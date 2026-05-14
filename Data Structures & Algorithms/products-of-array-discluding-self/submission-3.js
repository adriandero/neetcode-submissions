class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let final = [];
        let prefix = [];
        let suffix = [];

        for (let i = 0; i < nums.length; i++) {
            prefix.push((prefix[i - 1] ?? 1) * (nums[i - 1] ?? 1));

        }

        for (let i = nums.length - 1; i >= 0; i--) {
            suffix[i] = (suffix[i + 1] ?? 1) * (nums[i + 1] ?? 1);
        }

        for (let i = 0; i < nums.length; i++) {
            final.push(prefix[i] * suffix[i]);
        }

        return final;
    }
}

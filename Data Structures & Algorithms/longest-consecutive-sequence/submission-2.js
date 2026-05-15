class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestConsecutive = 0;
        let numsSet = new Set(nums);

        for (let i = 0; i < nums.length; i++) {
            if (!numsSet.has(nums[i] - 1)) {
                let j = nums[i];
                while (numsSet.has(j + 1)) {
                    j++;
                }
                let count = j - nums[i] + 1;
                if (count > longestConsecutive) longestConsecutive = count;
            }
        }

        return longestConsecutive;
    }
}

/**
 *
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        let final = [];
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let k = i + 1;
            let j = nums.length - 1;

            while (k < j) {
                if (nums[i] + nums[j] + nums[k] > 0) j--;
                else if (nums[i] + nums[j] + nums[k] < 0) k++;
                else {
                    final.push([nums[i], nums[j], nums[k]]);
                    k++;
                    j++;
                    while (k < j && nums[k] === nums[k - 1]) k++;
                    while (k < j && nums[j] === nums[j + 1]) j--;
                }
            }
        }

        return final;
    }
}

/**
 * 
 * 
 *     threeSum(nums) {
        let final = [];
        nums = nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            let j = i + 1;
            let k = nums.length - 1;
            while (j < k) {
                console.log(nums[i], nums[j], nums[k]);
                if (nums[i] + nums[j] + nums[k] === 0) {
                    final.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;
                } else if (nums[i] + nums[j] + nums[k] < 0) j++;
                else k--;
            }
        }

        return final;
    }
 * sort it first
 *
 * then you have your index i which starts at 0
 *
 * another index j at 1
 * another index k at the end
 *
 * then for each i you either increase j if result of i+j+k < 0
 * or you decrease k if i+j+k > 0
 *
 * do that until j and k meet
 *
 * o(n (log n))
 *
 */

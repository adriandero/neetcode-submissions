class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let finArr = Array(nums.length);
        let pre = 1;
        let post = 1;

        for(let i = 0; i < nums.length; i++) {
            finArr[i] = pre;
            pre = pre*nums[i];
        }

        for(let i = nums.length-1; i >= 0; i--) {
            finArr[i] = finArr[i] * post;
            post = post*nums[i];
        }

        return finArr;
    }
}

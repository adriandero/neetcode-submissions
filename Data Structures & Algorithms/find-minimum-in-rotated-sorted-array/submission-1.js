class Solution {
    binarySearch(nums, l, r) {
        const m = l + Math.floor((r-l)/2)
        if(l+1 === r || l === r) return nums[r];
        if(nums[m] >= nums[l]) return this.binarySearch(nums, m, r);
        if(nums[m] < nums[l]) return this.binarySearch(nums, l, m);
    }

    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if(nums[0] < nums[nums.length-1]) return nums[0]
        return this.binarySearch(nums, 0, nums.length-1);
    }
}

class Solution {

    binarySearch(nums, target, lo, hi) {
        const half = lo + Math.floor((hi-lo)/2)
        const currVal = nums[half]

        console.log(lo, hi, half)

        if(hi < lo) return -1;
        if (currVal === target) return half;

        if(currVal < target) return this.binarySearch(nums, target, half+1, hi)
        if(currVal > target) return this.binarySearch(nums, target, lo, half-1)
    }

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const hi = nums.length-1;
        const lo = 0;
        return this.binarySearch(nums, target, lo, hi)

    }
}

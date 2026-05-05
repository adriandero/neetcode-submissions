class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
    const set = new Set();

    for(let i = 0; i < nums.length; i++) {
        const alrHasNum = set.has(nums[i]);


        if(alrHasNum) return true;

        set.add(nums[i]);
    }
    return false;
}
}

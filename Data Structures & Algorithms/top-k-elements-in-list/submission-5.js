class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        let arr = new Array(nums.length+1).fill(null).map(() => []);

        for (const [key, val] of map) {
            arr[val].push(key);
        }

        let final = [];

        for (let i = arr.length; i >= 0; i--) {
            if (arr[i] && arr[i].length > 0) {
                for (let val of arr[i]) {
                    final.push(val);
                    if (final.length === k) return final;
                }
            }

            if (final.length === k) return final;
        }
        return [0, 0];
    }
}

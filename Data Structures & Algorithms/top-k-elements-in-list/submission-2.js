class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let final = [];
        let map = new Map();

        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        for (const [key, val] of map) {
            final.push([key, val]);
        }

        final.sort((a, b) => b[1] - a[1]);

        const ret = [];

        for (let i = 0; i < k; i++) {
            ret.push(final[i][0]);
        }

        return ret;
    }
}

//   topKFrequent(nums, k) {
//     let final = []
//     let numCount = 0;
//     let currNum = undefined;

//     for(let i = 0; i < nums.length; i++) {

//         if(currNum !== nums[i]) {
//             if(currNum >= k) final.push(currNum)
//             numCount = 0;
//             currNum = nums[i]
//         }

//         numCount++;
//     }

//     return final;

// }

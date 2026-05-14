class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let final = [];
        let total = 1;
        let totalWo0 = 1;
        let seen0 = false;

        for (const num of nums) {
            total = total * num;
            if (num !== 0 || seen0) {
                totalWo0 = totalWo0 * num;
            } else {
                seen0 = true;
            }
        }

        for (const num of nums) {
            if (totalWo0 === 0) final.push(0);
            else if (total === 0 && num === 0) final.push(totalWo0);
            else final.push(total / num);
        }

        return final;
    }
}

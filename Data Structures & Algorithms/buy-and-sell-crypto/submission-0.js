class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProf = 0;
        let currMin = prices[0];

        for (let i = 0; i < prices.length; i++) {
            if (prices[i] - currMin > maxProf) maxProf = prices[i] - currMin;
            if (prices[i] < currMin) currMin = prices[i];
        }
        
        return maxProf
    }
}

/**
 * you can brute force it and -> O(n * (n-i))
 *
 *
 *  10 > 1
 *  1 5 < 1.  /   5 > 0 = 5 max
 *  6 < 1.    / 5 > 5.  = 6 max
 *  7 < 1.    /
 *
 * 10
 * 10
 *
 * 0
 * maxProf = 0
 * minSoFar = 10
 *
 *
 * 2 10 1 10 9 8
 *
 * you could have 2 stacks with min and max
 * if you find a new min you push it to the stack
 * if you find a new max you push it to the stack, at the end you take the values indexes of the smaller stack
 */

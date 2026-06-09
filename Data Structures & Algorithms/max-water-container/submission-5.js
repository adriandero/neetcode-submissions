class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let max = 0;

        while (l < r) {
            const h = heights[r] > heights[l] ? heights[l] : heights[r];
            const area = (r - l) * h;

            if (area > max) max = area;

            if (heights[r] > heights[l]) l++;
            else if (heights[r] < heights[l]) r--;
            else l++;
        }

        return max;
    }
}

/**
 *
 * first i thought this was siilar to histogram problem - but actually its simpler - you justf ill out the between the 2 bars
 *
 * so you take bar left and right, and multiple the (right - left) * (bigger bar)
 *
 * and if right + 1 > right && clac > currMax so be it
 * or if left + 1 > left && calc > curr Max so be it
 *
 * hm but what if there ar eones in the middle that are really tall
 *
 *
 *
 * so the bruteforce solution would be to try each bar with each bar O(n^2)
 *
 * easier way:
 *
 *
 * you always move the one that is smaller than the other one
 * so l > r -> move r .. check new squareMetric and if bigger replace max
 *
 */

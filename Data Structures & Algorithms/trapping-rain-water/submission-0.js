class Solution {

    shift(heights, l, r, maxL, maxR, total) {
        if(l >= r) return total;

        if(heights[l] <= heights[r]) {
            total += Math.max(0, maxL - heights[l]);
            return this.shift(heights, l+1, r, Math.max(maxL, heights[l]), maxR, total);
        }
        if(heights[l] > heights[r]) {
            total += Math.max(0, maxR-heights[r]);
            return this.shift(heights, l, r-1, maxL, Math.max(maxR, heights[r]), total)
        }

        return;
    }

    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        return this.shift(height, 0, height.length-1, height[0], height[height.length-1], 0)
    }
}

class Solution {

    shift(heights, l, r, max) {
        if(l >= r) return max;

        const currArea = (r-l)*Math.min(heights[l],heights[r])
        if(currArea > max) max = currArea;
        console.log(currArea);

        if(heights[l] <= heights[r]) return this.shift(heights, l+1, r, max)
        if(heights[r] < heights[l]) return this.shift(heights, l, r-1, max)

        return max;
    }

    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) { 
        return this.shift(heights, 0, heights.length - 1, 0);
    }
}

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxH = 0;
        let stack = [];

        for (let i = 0; i < heights.length; i++) {
            const currH = heights[i];
            if (stack.length === 0 || currH > stack[stack.length - 1].height) {
                stack.push({ idx: i, height: currH });
                continue;
            }
            let pop;
            while (stack.length > 0 && currH < stack[stack.length - 1].height) {
                pop = stack.pop();
                const area = (i - pop.idx) * pop.height;
                maxH = Math.max(area, maxH);
            }
            stack.push({ idx: pop?.idx ?? i, height: currH });
        }

        while (stack.length > 0) {
            const pop = stack.pop();
            const area = (heights.length - pop.idx) * pop.height;
            maxH = Math.max(area, maxH);
        }
        return maxH;
    }
}

//0:1 1:7 3:8  4:2

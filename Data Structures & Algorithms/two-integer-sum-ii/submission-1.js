class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} low
     * @param {number} high
     * @param {number} target
     * @return {number[]}
     */
    sumMove(numbers, low, high, target) {
        if (low >= high) return;

        const sum = numbers[low] + numbers[high];
        if (sum === target) {
            return [low+1, high+1];
        } else if (sum > target) {
            return this.sumMove(numbers, low, high - 1, target);
        } else {
            return this.sumMove(numbers, low + 1, high, target); 
        }
    }

    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        return this.sumMove(numbers, 0, numbers.length - 1, target);
    }
}

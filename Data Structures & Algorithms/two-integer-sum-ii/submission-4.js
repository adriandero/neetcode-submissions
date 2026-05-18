class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let b = numbers.length - 1;
        let f = 0;
        while (f < b) {
            if (numbers[f] + numbers[b] < target) f++;
            else if (numbers[f] + numbers[b] > target) b--;
            else return [f + 1, b + 1];
        }
    }
}

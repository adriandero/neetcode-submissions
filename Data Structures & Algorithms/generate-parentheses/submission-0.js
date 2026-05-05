class Solution {

    addParanthesis(n, curr, res, openCount, closeCount) {
        if(openCount === n && closeCount === n) {
            res.push(curr);
            return;
        }

        if(openCount < n) {
            this.addParanthesis(n, curr+"(", res, openCount+1, closeCount)
        }
        if(openCount > closeCount) {
            this.addParanthesis(n, curr+")", res, openCount, closeCount+1)
        }

        return res;

    }
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        return this.addParanthesis(n, "", [], 0, 0);
    }
}

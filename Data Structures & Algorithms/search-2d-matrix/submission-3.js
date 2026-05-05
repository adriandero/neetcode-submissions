class Solution {
    findMatrixToSearch(matrix, target, t, b) {

        if(t === b) return matrix[t];

        const m = t + Math.floor((b-t)/2);
        const mTopVal = matrix[m][matrix[m].length-1]

        if(target > mTopVal) return this.findMatrixToSearch(matrix, target, m+1, b)
        if(target <= mTopVal) return this.findMatrixToSearch(matrix, target, t, m)
    }

    bsRightMatrix(matrix, target, l, r) {
        if(l > r) return false;

        const m = l + Math.floor((r-l)/2)

        if(matrix[m] === target) return true;
        if(matrix[m] > target) return this.bsRightMatrix(matrix, target, l, m-1);
        if(matrix[m] < target) return this.bsRightMatrix(matrix, target, m+1, r)

        return false;
    }
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const matrixToSearch = this.findMatrixToSearch(matrix, target, 0, matrix.length-1);
        console.log(matrixToSearch)
        return this.bsRightMatrix(matrixToSearch, target, 0, matrixToSearch.length-1)

    }
}

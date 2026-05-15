class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowSetArr = new Array(9).fill(undefined).map(() => new Set());
        let colSetArr = new Array(9).fill(undefined).map(() => new Set());
        let boxSetArr = new Array(9).fill(undefined).map(() => new Set());

        for (let i = 0; i < board.length; i++) {
            for (let k = 0; k < board[i].length; k++) {
                if(board[i][k] === ".") continue;
                if (rowSetArr[i].has(board[i][k])) return false;
                if (colSetArr[k].has(board[i][k])) return false;
                const boxIdx = Math.floor(i / 3) * 3 + Math.floor(k / 3);
                if (boxSetArr[boxIdx].has(board[i][k])) return false;

                rowSetArr[i].add(board[i][k]);
                colSetArr[k].add(board[i][k]);
                boxSetArr[boxIdx].add(board[i][k]);
            }
        }

        return true;
    }
}

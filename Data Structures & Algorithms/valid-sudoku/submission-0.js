class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map();
        const cols = new Map();
        const squares = new Map(); // (r/3) * 3 + (c/3)

        for(let r = 0; r < board.length; r++) {
            for(let c = 0; c < board[0].length; c++) {
                const cell = board[r][c];
                if(cell === ".") continue;


                const currSquareKey = Math.floor(r/3) * 3 + Math.floor(c/3)
                if(rows.get(r)?.has(cell) || cols.get(c)?.has(cell) || squares.get(currSquareKey)?.has(cell)) return false

                const newRowSet = new Set(rows.get(r)).add(cell);
                const newColSet = new Set(cols.get(c)).add(cell);
                const newSquareSet = new Set(squares.get(currSquareKey)).add(cell);

                rows.set(r, newRowSet);
                cols.set(c, newColSet);
                squares.set(currSquareKey, newSquareSet);

            }
        }
        return true

    }
}

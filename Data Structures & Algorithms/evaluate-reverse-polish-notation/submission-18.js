class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let calcStack = [];

        for (const token of tokens) {
            switch (token) {
                case "+": {
                    calcStack[calcStack.length - 2] =
                        calcStack[calcStack.length - 2] + calcStack[calcStack.length - 1];
                    calcStack.pop();
                    break;
                }
                case "-": {
                    calcStack[calcStack.length - 2] =
                        calcStack[calcStack.length - 2] - calcStack[calcStack.length - 1];
                    calcStack.pop();
                    break;
                }
                case "*": {
                    calcStack[calcStack.length - 2] =
                        calcStack[calcStack.length - 2] * calcStack[calcStack.length - 1];
                    calcStack.pop();
                    break;
                }
                case "/": {
                    calcStack[calcStack.length - 2] = Math.trunc(
                        calcStack[calcStack.length - 2] / calcStack[calcStack.length - 1],
                    );
                    calcStack.pop();
                    break;
                }
                default: {
                    calcStack.push(Number(token));
                }
            }
            console.log(calcStack);
        }

        return calcStack[0];
    }
}

/**
 * first thought is that since we are doing stack examples:
 * 1 if next  + stack top
 *
 * 3 4 + 5 6 + *
 *
 * 3 4 + = [ 0 ] = 7
 *
 * 7 5 6
 * 56 +  = [l - 2]
 * 7 11
 * 7 11 * = [l-2] = 77
 * 
 * "10","6","9","3","+","-11","*","/","*","17","+","5","+"]
 * 
 * (10 *(6 /((9 + 3)* -11))) + 17 + 5
 */

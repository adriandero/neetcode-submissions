class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let calcStack = [];
        const operators = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => Math.trunc(a / b),
        };

        for (const token of tokens) {
            if (token in operators) {
                const b = calcStack.pop();
                const a = calcStack.pop();

                calcStack.push(operators[token](a, b));
            } else {
                calcStack.push(Number(token));
            }
        }

        return calcStack[0];
    }
}
